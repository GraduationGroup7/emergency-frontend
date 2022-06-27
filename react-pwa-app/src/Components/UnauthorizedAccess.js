import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function UnauthorizedAccess() {
  const navigate = useNavigate();
  return (
    <div className="h-100">
      <div className="h-100 w-100 d-flex align-items-center align-items-md-center p-3 justify-content-center">
        <div className="d-block d-md-flex justify-content-between align-items-center w-100 px-4">
          <div className="text-center text-md-start">
            <div style={{ fontSize: "4rem", lineHeight: "3.25rem" }}>401</div>
            <div style={{ fontSize: "1.75rem" }} className="mb-0">
              Unauthorized Access
            </div>
            <div style={{ color: "rgba(0, 0, 0, 0.4)" }} className="mb-2">
              Looks like you tried to visit a page that is not allowed to be
              viewed at this device
            </div>
            <Button onClick={() => navigate("/")}>Go Home</Button>
          </div>
          <img
            className="d-none d-md-block"
            style={{ width: "50vw" }}
            src="https://img.freepik.com/free-vector/401-error-unauthorized-concept-illustration_114360-5531.jpg?t=st=1656289225~exp=1656289825~hmac=a3fefae3fc774e8c9696af9aedac24ee29f3b8a7739477a5e0a9c1a04fbb03b4&w=1380"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
