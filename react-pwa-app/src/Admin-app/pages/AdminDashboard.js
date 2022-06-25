import React, { useEffect, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import { get_table_list } from "../../API/API";
import DataGridComponent from "../../Components/DataGridComponent";

export default function AdminDashboard() {
  const [tableList, setTableList] = useState([]);
  const [tableName, setTableName] = useState("");
  useEffect(() => {
    (async () => {
      let res = await get_table_list();
      setTableList(
        res.data.data.map((table, index) => {
          console.log(table);
          return (
            <Nav.Link
              key={index}
              onClick={() => {
                setTableName(table.name);
              }}
            >
              {`${table.name}`}
            </Nav.Link>
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
      {tableName && (
        <DataGridComponent table_name={tableName}></DataGridComponent>
      )}
    </>
  );
}
