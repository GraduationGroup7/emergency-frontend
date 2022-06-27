import React, { useState } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import NoPermission from "../Pages/NoPermission";
import { Navbar, Nav } from "react-bootstrap";
import useIsAuthenticated from "../Util/useIsAuthenticated";
import { useLocation } from "react-router-dom";
import UnauthorizedAccess from "../Components/UnauthorizedAccess";
export default function UserApp() {
  const location = useLocation();
  let path = location.pathname.split("/");
  let appletName = path[2];

  return (
    <>
      <div className="user__app__container">
        <Outlet></Outlet>
        {/* bottom navbar */}
        <Navbar bg="light" expand="lg" className="user-bottom-navbar w-100">
          {/* <Container id="bottom-nav-container"> */}
          <Nav className="navbar__item__container" id="change-flex-to-row">
            <Nav.Item
              className={
                (!appletName ? "nav__item__active" : "") + " nav__item"
              }
            >
              <Link to={""} className="link__dark">
                <i
                  className={
                    (!appletName ? "bi-house-fill" : "bi-house") + " bi  fa-lg"
                  }
                ></i>
              </Link>
            </Nav.Item>
            <Nav.Item
              className={
                (appletName === "chat" ? "nav__item__active" : "") +
                " nav__item"
              }
            >
              <Link to={"chat"} className="link__dark">
                <i
                  className={
                    (appletName === "chat"
                      ? "bi-chat-left-dots-fill"
                      : "bi-chat-left-dots") + " bi  fa-lg"
                  }
                ></i>
              </Link>
            </Nav.Item>
            <Nav.Item
              className={
                (appletName === "profile" ? "nav__item__active" : "") +
                " nav__item"
              }
            >
              <Link to={"profile"} className="link__dark">
                <i className="bi bi-person-circle fa-lg"></i>
              </Link>
            </Nav.Item>
            <Nav.Item
              className={
                (appletName === "call-help" ? "nav__item__active" : "") +
                " nav__item"
              }
            >
              <Link to={"call-help"} className="link__dark">
                <i
                  className={
                    (appletName === "call-help"
                      ? "bi-telephone-fill"
                      : "bi-telephone") + " bi  fa-lg"
                  }
                ></i>
              </Link>
            </Nav.Item>
            <Nav.Item className="nav__item">
              {/* remember that I implemented logout just by rerouting to login page */}
              <Link to={"/"} className="link__dark">
                <i className="bi bi-box-arrow-right fa-lg"></i>
              </Link>
            </Nav.Item>
          </Nav>
          {/* </Container> */}
        </Navbar>{" "}
      </div>
      <div className="d-none d-md-block">
        <UnauthorizedAccess></UnauthorizedAccess>
      </div>
    </>
  );
}
