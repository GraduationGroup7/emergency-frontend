import React from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import NoPermission from "../Pages/NoPermission";
import { Navbar, Nav } from "react-bootstrap";

export default function UserApp() {
  const authToken = localStorage.getItem("authToken");
  return (
    <>
      {authToken ? (
        <>
          <Outlet></Outlet>
          {/* bottom navbar */}
          <Navbar
            bg="light"
            expand="lg"
            fixed="bottom"
            className="user-bottom-navbar"
          >
            {/* <Container id="bottom-nav-container"> */}
            <Nav className="" id="change-flex-to-row">
              <Nav.Item>
                <Link to={""} className="link-dark">
                  <i className="bi bi-house fa-lg"></i>
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link to={"chat"} className="link-dark">
                  <i className="bi bi-chat-left-dots fa-lg"></i>
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link to={"profile"} className="link-dark">
                  <i className="bi bi-person-circle fa-lg"></i>
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link to={"call-help"} className="link-dark">
                  <i className="bi bi-telephone fa-lg"></i>
                </Link>
              </Nav.Item>
              <Nav.Item>
                {/* remember that I implemented logout just by rerouting to login page */}
                <Link to={"/"} className="link-dark">
                  <i className="bi bi-box-arrow-right fa-lg"></i>
                </Link>
              </Nav.Item>
            </Nav>
            {/* </Container> */}
          </Navbar>{" "}
        </>
      ) : (
        <NoPermission></NoPermission>
      )}
    </>
  );
}
