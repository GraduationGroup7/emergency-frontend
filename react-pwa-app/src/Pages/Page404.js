import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
export default function Page404() {
  const navigate = useNavigate();
  return (
    <div className="h-100 w-100 d-flex align-items-start align-items-md-center p-3 justify-content-center">
      <div className="d-block d-md-flex justify-content-between align-items-center w-100 px-4">
        <div className="text-center text-md-start">
          <div style={{ fontSize: "4rem", lineHeight: "3.25rem" }}>404</div>
          <div style={{ fontSize: "1.75rem" }} className="mb-0">
            Page Not Found
          </div>
          <div style={{ color: "rgba(0, 0, 0, 0.4)" }} className="mb-2">
            Looks like you tried to visit a page that does not exist
          </div>
          <Button onClick={() => navigate("/")}>Go Home</Button>
        </div>
        <img
          className="d-none d-md-block"
          style={{ width: "50vw" }}
          src="https://img.freepik.com/free-vector/404-error-with-landscape-concept-illustration_114360-7898.jpg?t=st=1656284933~exp=1656285533~hmac=8fc7586f95f9bfc995828df2003d1bc498d90b90afeef850a114ea97f72c3923&w=1800"
          alt=""
        />
      </div>
    </div>
  );
}
