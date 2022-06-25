import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import InfiniteScroll from "react-infinite-scroll-component";
import { useParams } from "react-router-dom";
import { get_messages, send_chat_message } from "../API/API";
import { useSelector } from "react-redux";
import { pusher } from "./Login";

export default function Chatroom() {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [paginatationData, setPaginatationData] = useState({
    page: 1,
    perPage: 0,
    total: 0,
  });
  // get user info from redux store
  const userInfo = useSelector((state) => state.userInfo);
  useEffect(() => {
    const channel = pusher.subscribe(`private-chat.${chatroom_id}`);
    channel.bind("message", (data) => {
      console.log("I got called");
      appendMsg(data.user.name, data.chatMessage.message);
    });
    console.log(pusher);

    return () => {
      pusher.unsubscribe(`chat.${chatroom_id}`);
    };
  }, []);

  let { chatroom_id } = useParams();

  function appendMsg(userName, message) {
    setMessages((prevValue) => [
      { user_name: userName, message },
      ...prevValue,
    ]);
  }
  function onSubmit(e) {
    e.preventDefault();
    send_chat_message(chatroom_id, { message });
    // commented for now, duplicate messages
    //appendMsg(userInfo.name, message);
  }

  useEffect(() => {
    // declare the data fetching function
    (async () => {
      try {
        let res = await get_messages(chatroom_id);
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
      let res = await get_messages(chatroom_id, newParams);
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
    <>
      <div
        id="scrollableDiv"
        style={{
          overflow: "auto",
          display: "flex",
          flexDirection: "column-reverse",
        }}
      >
        <InfiniteScroll
          dataLength={messages.length}
          next={fetchMoreData}
          style={{ display: "flex", flexDirection: "column-reverse" }} //To put endMessage and loader to the top.
          hasMore={messages.length < paginatationData.total}
          loader={<h4>Loading...</h4>}
          scrollableTarget="scrollableDiv"
          inverse={true}
        >
          {messages.map((msg, index) => (
            <div key={index}>{`${msg.user_name}: ${msg.message} ${
              msg.id ? msg.id : index
            }`}</div>
          ))}
        </InfiniteScroll>
      </div>
      <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            type="text"
            placeholder="Enter your Msg here"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}
