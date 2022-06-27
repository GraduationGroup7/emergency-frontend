import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import InfiniteScroll from "react-infinite-scroll-component";
import { useParams } from "react-router-dom";
import { get_authority_messages, send_authority_message } from "../../API/API";
import { useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import { pusher } from "../../Pages/Login";

export default function AuthorityChatroom() {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const [paginatationData, setPaginatationData] = useState({
    page: 1,
    perPage: 0,
    total: 0,
  });
  // get user info from redux store
  const userInfo = useSelector((state) => state.userInfo.value);
  useEffect(() => {
    try {
      const channel = pusher.subscribe(`private-agent-chat.${chatroom_id}`);
      channel.bind("message", (data) => {
        console.log("I got called");
        appendMsg(data.user.name, data.chatMessage.message);
      });
      console.log(pusher);
    } catch (error) {
      console.log(error);
      navigate("/");
    }

    return () => {
      if (pusher) {
        pusher.unsubscribe(`chat.${chatroom_id}`);
      }
    };
  }, []);

  let { chatroom_id } = useParams();

  function appendMsg(userId, message) {
    setMessages((prevValue) => [{ user_id: userId, message }, ...prevValue]);
  }
  function onSubmit(e) {
    e.preventDefault();
    send_authority_message(chatroom_id, { message });
    // commented for now, duplicate messages
    //appendMsg(userInfo.name, message);
  }

  useEffect(() => {
    // declare the data fetching function
    (async () => {
      try {
        let res = await get_authority_messages(chatroom_id);
        res = res.data.data;
        console.log(res);
        setMessages(res.data);
        setPaginatationData({
          page: res.current_page,
          perPage: res.per_page,
          total: res.total,
        });
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  async function fetchMoreData() {
    let newParams = {
      ...paginatationData,
      page: paginatationData.page + 1,
    };
    try {
      let res = await get_authority_messages(chatroom_id, newParams);
      res = res.data.data;
      console.log(res);
      setMessages([...messages, ...res.data]);
      setPaginatationData({
        page: res.current_page,
        perPage: res.per_page,
        total: res.total,
      });
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="dashboard__container d-flex flex-column">
      <div className="chatroom__header__container d-flex justify-content-between align-items-center">
        <i
          onClick={() => navigate(-1)}
          style={{ fontSize: "1.15rem" }}
          class="bi bi-chevron-left"
        ></i>
        <h1
          className="general__mobile__title mb-0"
          style={{ "font-size": "1.35rem" }}
        >
          Authority Chatroom {chatroom_id}
        </h1>
        <div></div>
      </div>
      <div className="chatroom__container pb-0">
        <div
          id="scrollableDiv"
          style={{
            overflow: "scroll",
            display: "flex",
            flexDirection: "column",
            flex: "1",
          }}
        >
          <InfiniteScroll
            dataLength={messages.length}
            next={fetchMoreData}
            className="chat__room__container"
            style={{ display: "flex", flexDirection: "column-reverse" }} //To put endMessage and loader to the top.
            hasMore={messages.length < paginatationData.total}
            loader={<h4>Loading...</h4>}
            scrollableTarget="scrollableDiv"
            inverse={true}
          >
            {messages.map((msg, index) => (
              <div
                className={
                  msg.user_id === userInfo.id
                    ? "message__right__side"
                    : "message__left__side"
                }
                key={index}
              >
                <div
                  className={
                    msg.user_id === userInfo.id
                      ? "d-none"
                      : "message__username__label"
                  }
                >
                  {msg.user_name}:
                </div>
                {`${msg.message}`}
              </div>
            ))}
          </InfiniteScroll>
        </div>
      </div>
      <Form style={{ padding: "12px" }} onSubmit={onSubmit}>
        <Form.Group
          className="d-flex align-items-center"
          controlId="formBasicPassword"
        >
          <Form.Control
            required
            type="text"
            className="chat__message__input"
            placeholder="Enter your Msg here"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />
          <Button type="submit" className="message__send__button">
            <i class="bi bi-send-fill"></i>
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
}
