import React, { useEffect, useState } from "react";
import { Collapse, Badge } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import {
  bulk_delete,
  create_backup,
  get_backup_file,
  get_table_list,
} from "../../API/API";
export default function Sidebar({ tableName, setTableName }) {
  let navigate = useNavigate();
  const userInfo = useSelector((state) => state.userInfo.value);
  const [routes, setRoutes] = useState();
  useEffect(() => {
    get_table_list().then((res) => {
      console.log(res.data.data);
      setRoutes(res.data.data);
    });
  }, []);
  const [agentsOpen, setAgentsOpen] = useState(false);
  const location = useLocation();
  let path = location.pathname.split("/");
  let appletName = path[1];

  return (
    <div className="sidebar__container">
      <div className="sidebar__main__content">
        <div className="logo__container">
          <img className="logo__image" src="./Images/logo-svg.svg" alt="" />
          <div className="logo__text">YARDIM</div>
        </div>
        <div className="username__container d-flex align-items-center">
          <Badge className="username__avatar" bg="primary">
            {userInfo.name.split(" ")
              ? userInfo.name.split(" ")[0][0].toUpperCase()
              : null}
          </Badge>
          <div>{userInfo.name}</div>
        </div>
        <div className="page__section__container">
          <div className="page__section__title">PAGES</div>
        </div>
        {routes
          ? routes.map((route, index) => (
              <div
                onClick={() => {
                  setTableName(route.model);
                  navigate("/admin");
                }}
                className={
                  (tableName === route.model ? "sidebar__link__active" : "") +
                  " sidebar__link d-flex"
                }
                key={index}
              >
                <i className="bi bi-circle sidebar__link__icon"></i>
                <div>{`${route.name}`}</div>
              </div>
            ))
          : null}
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
