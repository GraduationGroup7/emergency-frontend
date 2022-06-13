import React, { useState, useEffect } from "react";
import { Card, ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";

export default function Profile() {
  const userInfo = useSelector((state) => state.userInfo.value);
  useEffect(() => {}, []);

  return (
    <>
      <Card style={{ width: "100vw" }}>
        <Card.Header>User Profile</Card.Header>
        <Card.Body>
          <Card.Title>{userInfo.name}</Card.Title>
          <hr />
          <dl class="row">
            <dt class="col-3">Email</dt>
            <dd class="col-9">{userInfo.email}</dd>
            <dt class="col-3">Type</dt>
            <dd class="col-9">{userInfo.type}</dd>
          </dl>
        </Card.Body>
      </Card>
    </>
  );
}
