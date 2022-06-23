import React, { useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { get_table_data } from "../API/API";
import { useState } from "react";
import { useParams } from "react-router-dom";

export default function DataGridComponent() {
  const [columns, setColumns] = useState([]);
  const [rows, setRows] = useState([]);
  const [page, setPage] = useState(1);
  const [sortModel, setSortModel] = useState({});
  const [tableParams, setTableParams] = useState({
    page: page,
  });

  let { table_name } = useParams();
  console.log(table_name);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log("i ran");
    (async () => {
      try {
        setIsLoading(true);
        const searchParams = new URLSearchParams({
          ...tableParams,
          page: page,
          ...sortModel,
        }).toString();
        let res = await get_table_data(table_name, searchParams);
        setRows(res.data.data);
        console.log("NO of Rows " + res.data.data.length);
        setColumns(res.data.columns);
        setTableParams({
          ...res.data.meta,
          perPage: parseInt(res.data.meta.per_page),
          page: page,
        });
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [page, sortModel, table_name]);

  return (
    <>
      <div style={{ height: "100%", width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={15}
          rowsPerPageOptions={[15]}
          checkboxSelection
          paginationMode="server"
          loading={isLoading}
          sortingMode="server"
          onSortModelChange={(model, details) => {
            console.log("model", model);
            console.log("details", details);
            setSortModel({
              orderBy: model[0].field,
              orderByDirection: model[0].sort,
            });
          }}
          rowCount={tableParams.total}
          onPageChange={(page, details) => {
            setPage(page + 1);
          }}
        />
      </div>
    </>
  );
}
