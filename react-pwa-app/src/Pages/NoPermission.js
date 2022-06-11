import { Button, Alert } from "react-bootstrap";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function NoPermission() {
  return (
    <>
      <Alert variant="danger">
        <Alert.Heading>Permission Error!</Alert.Heading>
        <p>
          You don't have permission to view that page, you can press the button
          below to Login or Register!
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Link to={"/"}>
            <Button onClick={() => {}} variant="outline-danger">
              Authenticate me!
            </Button>
          </Link>
        </div>
      </Alert>
    </>
  );
}
