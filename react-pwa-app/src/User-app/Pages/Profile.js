import React, { useState, useEffect } from "react";
import { Card, ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Form, Button } from "react-bootstrap";

export default function Profile() {
  const userInfo = useSelector((state) => state.userInfo.value);
  useEffect(() => {
    console.log(userInfo);
  }, []);
  return (
    <div className="general__mobile__container">
      <div>
        <div className="text-center mb-4">
          <h1
            className="general__mobile__title mx-3"
            style={{ "font-size": "1.35rem" }}
          >
            Profile
          </h1>
        </div>
        <div className="d-flex flex-column align-items-center mb-4">
          <div className="user__avatar mb-2">
            {userInfo.name.split(" ")[0][0].toUpperCase() +
              userInfo.name.split(" ")[1][0].toUpperCase()}
          </div>
          <div className="user__avatar__label">{userInfo.name}</div>
        </div>
        <div>
          <Form.Group className="mb-3" controlId="formBasicDoB">
            <Form.Label className="general__mobile__label">Email</Form.Label>
            <Form.Control
              required
              className="general__mobile__input"
              disabled
              type="email"
              value={userInfo.email}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicDoB">
            <Form.Label className="general__mobile__label">Phone</Form.Label>
            <Form.Control
              required
              className="general__mobile__input"
              disabled
              type="number"
              value={userInfo.phone_number}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicDoB">
            <Form.Label className="general__mobile__label">ID</Form.Label>
            <Form.Control
              className="general__mobile__input"
              disabled
              type="number"
              value={userInfo.id}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicDoB">
            <Form.Label className="general__mobile__label">Type</Form.Label>
            <Form.Control
              required
              className="general__mobile__input"
              disabled
              type="text"
              value={userInfo.type}
            />
          </Form.Group>
        </div>
      </div>
    </div>
  );
}
