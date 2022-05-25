import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
const axios = require("axios").default;

export default function Profile() {
  let params = useParams();
  let userID = parseInt(params.userid);
  const [userObj, setUserObj] = useState({});

  useEffect(() => {
    axios
      .get("https://550941cd-cb61-4436-94e3-44d1be2b0caf.mock.pstmn.io/users", {
        headers: { "Access-Control-Allow-Origin": "*" },
      })
      .then(function(response) {
        // handle success
        const foundUser = response.data.find((element) => {
          console.log(element.id);
          console.log(userID);
          return parseInt(element.id) === userID;
        });
        setUserObj(foundUser);
        console.log(response.data);
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      });
  }, []);

  useEffect(() => {
    console.log(userObj);
  }, [userObj]);

  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={userObj.profile_pic} />
        <Card.Body>
          <Card.Title>{userObj.name}</Card.Title>
          <Card.Text>{userObj.about}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>{userObj.phone_number}</ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Card.Link href="/user/report">Go Home</Card.Link>
        </Card.Body>
      </Card>
    </>
  );
}
