import React, { useState, useEffect } from "react";
import { Card, ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";

export default function Profile() {
  const userInfo = useSelector((state) => state.userInfo.value);

  return (
    <>
      <Card style={{ width: "100vw" }}>
        <Card.Header>User Profile</Card.Header>
        <Card.Body>
          <Card.Title>{userInfo.name}</Card.Title>
          <hr />
          <dl className="row">
            <dt className="col-3">Email</dt>
            <dd className="col-9">{userInfo.email}</dd>
            <dt className="col-3">Type</dt>
            <dd className="col-9">{userInfo.type}</dd>
          </dl>
        </Card.Body>
      </Card>
    </>
  );
}
