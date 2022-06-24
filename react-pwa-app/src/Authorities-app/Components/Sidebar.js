import React, { useEffect, useState } from "react";
import { Collapse, Badge } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Sidebar() {
  let navigate = useNavigate();
  const [routes, setRoutes] = useState([
    {
      name: "New Reports",
      path: "",
      icon: "bi bi-exclamation-circle",
    },
    { name: "Archive", path: "archive", icon: "bi bi-inboxes" },
  ]);
  const [agentsOpen, setAgentsOpen] = useState(false);
  const location = useLocation();
  let path = location.pathname.split("/");
  let appletName = path[1];

  return (
    <div className="sidebar__container">
      <div className="sidebar__main__content">
        <div className="logo__container">
          <img className="logo__image" src="/Images/logo-svg.svg" alt="" />
          <div className="logo__text">YARDIM</div>
        </div>
        <div className="username__container d-flex align-items-center">
          <Badge className="username__avatar" bg="primary">
            AA
          </Badge>
          <div>Admin Adminson</div>
        </div>
        <div className="page__section__container">
          <div className="page__section__title">PAGES</div>
        </div>
        {routes.map((route, index) => (
          <Link
            to={route.path}
            className={
              (route.path === appletName ||
              (route.path === "" && appletName === "authority")
                ? "sidebar__link__active"
                : "") + " sidebar__link d-flex"
            }
            key={index}
          >
            <i className={route.icon + " sidebar__link__icon"}></i>
            <div>{`${route.name}`}</div>
          </Link>
        ))}
        <div className="page__section__container">
          <div className="page__section__title">AGENT OPERATIONS</div>
        </div>
        <div
          onClick={() => setAgentsOpen(!agentsOpen)}
          aria-expanded={agentsOpen}
          aria-controls="sidebar__agents__collapse"
          className={
            (agentsOpen ? "sidebar__link__collapse__toggle__open" : "") +
            " sidebar__link d-flex align-items-center"
          }
        >
          <i className="bi bi-exclamation-circle sidebar__link__icon"></i>
          <div>Agents</div>
          <i
            className={
              (agentsOpen
                ? "side__link__arrow__open "
                : "side__link__arrow__closed ") +
              "bi bi-chevron-right sidebar__link__icon side__link__arrow"
            }
          ></i>
        </div>
        <div className="sidebar__link__collapse">
          <Collapse in={agentsOpen}>
            <div id="sidebar__agents__collapse">
              <div className="sidebar__link d-flex align-items-center">
                <i className="bi bi-circle sidebar__link__icon__circle"></i>
                <div>Create Agent</div>
              </div>
              <div className="sidebar__link d-flex align-items-center">
                <i className="bi bi-circle sidebar__link__icon__circle"></i>
                <div>All Agents</div>
              </div>
            </div>
          </Collapse>
        </div>
      </div>
      <div
        onClick={() => navigate("/")}
        className="logout__area__container d-flex"
      >
        <i className="bi bi-box-arrow-right logout__icon"></i>
        <div>Logout</div>
      </div>
    </div>
  );
}
