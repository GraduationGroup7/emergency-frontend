import React, { useState, useEffect } from "react";
import { Card, ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";

export default function Profile() {
  const userInfo = useSelector((state) => state.userInfo.value);
  useEffect(() => {}, []);

  return (
    <>
      <Card>
        <Card.Header>User Profile</Card.Header>
        <Card.Body>
          <Card.Title>{userInfo.name}</Card.Title>
          <ListGroup variant="flush">
            <ListGroup.Item>{userInfo.email}</ListGroup.Item>
            <ListGroup.Item>{userInfo.type}</ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </>
  );
}
