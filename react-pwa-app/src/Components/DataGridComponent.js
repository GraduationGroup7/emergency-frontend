import React, { useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { get_table_data } from "../API/API";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function DataGridComponent({ route }) {
  const [columns, setColumns] = useState([]);
  const [rows, setRows] = useState([]);
  const [page, setPage] = useState(1);
  const [sortModel, setSortModel] = useState({});
  const [tableParams, setTableParams] = useState({
    page: page,
    total: 0,
  });

  let navigate = useNavigate();
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
        let res = await get_table_data(
          route ? route : table_name,
          searchParams
        );
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

  // to fix the row count issue, look here: https://mui.com/x/react-data-grid/pagination/#basic-implementation
  const [rowCountState, setRowCountState] = useState(tableParams.total);
  React.useEffect(() => {
    setRowCountState((prevRowCountState) =>
      tableParams.total !== undefined ? tableParams.total : prevRowCountState
    );
  }, [tableParams.total, setRowCountState]);

  return (
    <>
      <div className="w-100" style={{ height: "93%" }}>
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
          onRowClick={(rowParams, event, details) => {
            console.log("rowParams", rowParams);
            navigate(`/${table_name}/${rowParams.id}`);
          }}
          rowCount={rowCountState}
          onPageChange={(page, details) => {
            setPage(page + 1);
          }}
        />
      </div>
    </>
  );
}
