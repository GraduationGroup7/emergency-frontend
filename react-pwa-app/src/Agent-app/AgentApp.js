import React from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import NoPermission from "../Pages/NoPermission";
import { Navbar, Nav } from "react-bootstrap";
import { useLocation } from "react-router-dom";

export default function AgentApp() {
  const location = useLocation();
  let path = location.pathname.split("/");
  let appletName = path[2];
  const authToken = localStorage.getItem("authToken");
  return (
    <>
      <>
        <div className="d-flex flex-column main-area-minus-bot-nav m-auto overflow-auto">
          <Outlet></Outlet>
        </div>{" "}
        {/* bottom navbar */}
        <Navbar
          bg="light"
          expand="lg"
          fixed="bottom"
          className="user-bottom-navbar"
        >
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
                    (appletName === "call-help" ? "bi-upload" : "bi-upload") +
                    " bi  fa-lg"
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
      </>
    </>
  );
}
