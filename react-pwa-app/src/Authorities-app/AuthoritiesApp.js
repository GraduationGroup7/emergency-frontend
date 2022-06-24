import React from "react";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import { NavDropdown, Tab, Row, Nav, Col } from "react-bootstrap";
import Sidebar from "./Components/Sidebar";

export default function AuthoritiesApp() {
  return (
    <div className="authority__container">
      <Sidebar></Sidebar>
      <Outlet></Outlet>
    </div>
  );
}
