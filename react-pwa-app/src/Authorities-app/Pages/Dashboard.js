import React, { useState } from "react";
import { FormControl, Button } from "react-bootstrap";
import { useOutletContext } from "react-router-dom";
import DataGridComponent from "../../Components/DataGridComponent";

export default function Dashboard() {
  const [tableName, setTableName] = useOutletContext();
  const [selectedRows, setSelectedRows] = useState([]);

  return (
    <div className="dashboard__container">
      <div className="authority__card card__height">
        <div className="d-flex align-items-center mb-3 justify-content-between">
          <div className="authority__card__title">DASHBOARD</div>
        </div>
        <DataGridComponent
          table_name={tableName}
          selectedRows={selectedRows}
          setSelectedRows={setSelectedRows}
        ></DataGridComponent>
      </div>
    </div>
  );
}
