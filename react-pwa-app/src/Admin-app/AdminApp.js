import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import UnauthorizedAccess from "../Components/UnauthorizedAccess";
export default function AdminApp() {
  const [tableName, setTableName] = useState("customers");
  return (
    <>
      <div className="authority__container">
        <Sidebar tableName={tableName} setTableName={setTableName}></Sidebar>
        <Outlet context={[tableName, setTableName]}></Outlet>
      </div>
      <div className="d-block d-md-none">
        <UnauthorizedAccess></UnauthorizedAccess>
      </div>
    </>
  );
}
