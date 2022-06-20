import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { get_user_emergencies } from "../../API/API";

export default function Chat() {
  let navigate = useNavigate();
  const [emergencies, setEmergencies] = useState([]);
  // @TODO: Refactor this
  useEffect(() => {
    (async () => {
      let request = await get_user_emergencies();
      setEmergencies(request.data.data);
      console.log(request.data.data);
    })();
  }, []);

  let emergenciesArray = emergencies.map((emergency) => {
    return (
      <Card
        key={emergency.id}
        border="dark"
        style={{ width: "18rem" }}
        onClick={(e) => {
          navigate(`/user/chatroom/${emergency.chat_room_id}`);
        }}
      >
        <Card.Header>Emergency Chat Room</Card.Header>
        <Card.Body>
          <Card.Title>{`Emergency ${emergency.id}`}</Card.Title>
          <Card.Text>{emergency.description}</Card.Text>
        </Card.Body>
      </Card>
    );
  });
  return <>{emergenciesArray}</>;
}
