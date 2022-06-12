import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import NewReports from "./Pages/NewReports";
import { NavDropdown, Tab, Row, Nav, Col } from "react-bootstrap";

export default function AuthoritiesApp() {
  return (
    <div unselectable="on">
      <Tab.Container
        className="myTabClass"
        id="left-tabs-example"
        defaultActiveKey="first"
        menuVariant="dark"
      >
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>SVG PICTURE HERE</Nav.Item>
              <hr />
              <Nav.Item style={{ textAlign: "center" }}>
                Authority Personel Name
              </Nav.Item>
              <hr />
              <Nav.Item>
                <Nav.Link eventKey="first">New Reports</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Archive</Nav.Link>
              </Nav.Item>
              <hr />
              <Nav.Item style={{ textAlign: "center" }}>OPERATIONS</Nav.Item>
              <Nav.Item>
                <NavDropdown
                  id="nav-dropdown-dark-example"
                  title="Dropdown"
                  menuVariant="dark"
                >
                  <NavDropdown.Item href="#action/3.1">
                    Create Agents
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    All Agents
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <NewReports />
              </Tab.Pane>
              <Tab.Pane eventKey="second">Archive</Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
}
