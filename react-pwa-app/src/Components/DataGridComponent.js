import React, { useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { bulk_delete, get_table_data } from "../API/API";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateError } from "../redux/errorInfoSlice";
import { Button } from "react-bootstrap";
import { toggle } from "../redux/successInfoSlice";

export default function DataGridComponent({ table_name }) {
  const [columns, setColumns] = useState([]);
  const [rows, setRows] = useState([]);
  const [page, setPage] = useState(1);
  const [sortModel, setSortModel] = useState({});
  const [selectedRows, setSelectedRows] = useState([]);
  const [tableParams, setTableParams] = useState({
    page: page,
    total: 0,
  });

  const dispatch = useDispatch();
  let navigate = useNavigate();
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
        console.log("unsuccesful table fetch attempt ", error);
        dispatch(
          updateError({
            techError: error.message,
          })
        );
      }
    })();
  }, [page, sortModel, table_name, tableParams.total]);

  async function handleDelete() {
    try {
      bulk_delete(`${table_name}/bulk_delete`, { ids: selectedRows });
      dispatch(toggle());
      setTableParams((prevValue) => ({
        ...prevValue,
        total: prevValue.total - selectedRows.length,
      }));
    } catch (error) {
      console.log("unsuccesful delete Attempt ", error);
      dispatch(
        updateError({
          techError: error.message,
          descriptiveError: error.response.data.data,
        })
      );
    }
  }

  // to fix the row count issue, look here: https://mui.com/x/react-data-grid/pagination/#basic-implementation
  const [rowCountState, setRowCountState] = useState(tableParams.total);
  React.useEffect(() => {
    setRowCountState((prevRowCountState) =>
      tableParams.total !== undefined ? tableParams.total : prevRowCountState
    );
  }, [tableParams.total, setRowCountState]);

  return (
    <>
      <Button onClick={handleDelete}>Delete</Button>
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
          onRowClick={(event, details) => {
            console.log("row clicked", table_name);
            console.log("row clicked", event);
            navigate(`form/${table_name}/${event.id}`);
          }}
          rowCount={rowCountState}
          onPageChange={(page, details) => {
            setPage(page + 1);
          }}
          onSelectionModelChange={(selectionMode) => {
            console.log("rows selected: ", selectionMode);
            setSelectedRows(selectionMode);
          }}
        />
      </div>
    </>
  );
}
