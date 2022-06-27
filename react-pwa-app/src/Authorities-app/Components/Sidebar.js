import React, { useEffect, useState } from "react";
import { Collapse, Badge } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Sidebar({ tableName, setTableName }) {
  let navigate = useNavigate();
  const userInfo = useSelector((state) => state.userInfo.value);
  const [routes, setRoutes] = useState([
    {
      name: "Emergencies",
      path: "",
      icon: "bi bi-exclamation-circle",
    },
  ]);
  const [agentsOpen, setAgentsOpen] = useState(false);
  const location = useLocation();
  let path = location.pathname.split("/");
  let appletName = path[1];

  return (
    <div className="sidebar__container">
      <div className="sidebar__main__content">
        <div onClick={() => navigate("/authority")} className="logo__container">
          <img className="logo__image" src="./Images/logo-svg.svg" alt="" />
          <div className="logo__text">YARDIM</div>
        </div>
        <div className="username__container d-flex align-items-center">
          <Badge className="username__avatar" bg="primary">
            {userInfo.name.split(" ")[0][0].toUpperCase() +
              userInfo.name.split(" ")[1][0].toUpperCase()}
          </Badge>
          <div>{userInfo.name}</div>
        </div>
        <div className="page__section__container">
          <div className="page__section__title">PAGES</div>
        </div>
        {routes.map((route, index) => (
          <div
            onClick={() => {
              setTableName("emergencies");
              navigate("/authority");
            }}
            className={
              (route.path === appletName ||
              (route.path === "" && appletName === "authority" && !path[2])
                ? "sidebar__link__active"
                : "") + " sidebar__link d-flex"
            }
            key={index}
          >
            <i className={route.icon + " sidebar__link__icon"}></i>
            <div>{`${route.name}`}</div>
          </div>
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
              <Link
                to={"form/agents/create_form"}
                className="sidebar__link d-flex align-items-center"
              >
                <i className="bi bi-circle sidebar__link__icon__circle"></i>
                <div>Create Agent</div>
              </Link>
              <div
                onClick={() => {
                  setTableName("agents");
                  navigate("/authority");
                }}
                className="sidebar__link d-flex align-items-center"
              >
                <i className="bi bi-circle sidebar__link__icon__circle"></i>
                <div>All Agents</div>
              </div>
            </div>
          </Collapse>
        </div>
        <div className="page__section__container">
          <div className="page__section__title">CHATS</div>
        </div>
        <div
          onClick={() => {
            navigate("chatList");
          }}
          className={
            (path[2] === "chatList" ? "sidebar__link__active" : "") +
            " sidebar__link d-flex align-items-center"
          }
        >
          <i
            style={{ fontSize: "18px" }}
            className="bi bi-chat-dots sidebar__link__icon__circle"
          ></i>
          Chat
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
