import React, { useEffect, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { get_table_list } from "../API/API";
import { Link, Outlet } from "react-router-dom";

export default function AdminApp() {
  const [tableList, setTableList] = useState([]);
  useEffect(() => {
    (async () => {
      let res = await get_table_list();
      setTableList(
        res.data.data.map((table, index) => {
          console.log(table);
          return (
            <Link key={index} to={`tables/${table.name}`}>
              {`${table.name}`}
            </Link>
          );
        })
      );
    })();
  }, []);

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">{tableList}</Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet></Outlet>
    </>
  );
}
