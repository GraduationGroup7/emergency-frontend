import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import { NavDropdown, Tab, Row, Nav, Col } from "react-bootstrap";
import Sidebar from "./Components/Sidebar";

export default function AuthoritiesApp() {
  const [tableName, setTableName] = useState("emergencies");
  return (
    <div className="authority__container">
      <Sidebar tableName={tableName} setTableName={setTableName}></Sidebar>
      <Outlet context={[tableName, setTableName]}></Outlet>
    </div>
  );
}
