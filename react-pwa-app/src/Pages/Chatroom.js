import axios from "axios";
import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useParams } from "react-router-dom";
import { get_messages } from "../API/API";

export default function Chatroom() {
  const [messages, setMessages] = useState([]);
  const [paginatationData, setPaginatationData] = useState({
    page: 1,
    perPage: 0,
    total: 0,
  });

  let { chatroom_id } = useParams();

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
          flexDirection: "column",
        }}
      >
        <InfiniteScroll
          dataLength={messages.length}
          next={fetchMoreData}
          style={{ display: "flex", flexDirection: "column" }} //To put endMessage and loader to the top.
          hasMore={messages.length < paginatationData.total}
          loader={<h4>Loading...</h4>}
          scrollableTarget="scrollableDiv"
        >
          {messages.map((msg) => (
            <div
              key={msg.id}
            >{`${msg.user_name}: ${msg.message} ${msg.id}`}</div>
          ))}
        </InfiniteScroll>
      </div>
    </>
  );
}
