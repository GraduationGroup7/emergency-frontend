import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Card } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { get_chatrooms } from "../API/API";

export default function Chat() {
  let navigate = useNavigate();
  const location = useLocation();
  let path = location.pathname.split("/");
  let appletName = path[1];
  const [emergencies, setEmergencies] = useState([]);
  // @TODO: Refactor this
  useEffect(() => {
    (async () => {
      let request = await get_chatrooms(
        appletName === "user" ? "user/emergencies" : "agents/chat_rooms"
      );
      setEmergencies(request.data.data);
      console.log(request.data.data);
    })();
  }, []);

  let emergenciesArray = emergencies.map((emergency) => {
    return (
      <div
        className="messages__row__container"
        key={emergency.id}
        onClick={(e) => {
          navigate(
            `chatroom/${emergency.chat_room_id}?chatRoomType=${emergency.chat_room_type}`
          );
        }}
      >
        <div className="messages__row__avatar"># {emergency.id}</div>
        <div className="messages__row__right">
          <div className="messages__row__label">
            {emergency.chat_room_type
              ? emergency.agent_name
              : `Emergency ${emergency.id}`}
          </div>
          <div className="messages__row__message">{emergency.description}</div>
        </div>
      </div>
    );
  });
  return (
    <div className="general__mobile__container">
      <div className="text-center mb-4">
        <h1
          className="general__mobile__title mx-3"
          style={{ "font-size": "1.35rem" }}
        >
          Chat Rooms
        </h1>
      </div>
      {emergenciesArray}
    </div>
  );
}
