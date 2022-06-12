import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AdminApp from "./Admin-app/AdminApp";
import AgentApp from "./Agent-app/AgentApp";
import AuthoritiesApp from "./Authorities-app/AuthoritiesApp";
import Login from "./Pages/Login";
import Page404 from "./Pages/Page404";
// User App pages
import Profile from "./User-app/Pages/Profile";
import Register from "./User-app/Pages/Register";
import Report from "./User-app/Pages/Report";
import SmsVerify from "./User-app/Pages/SmsVerify";
import UserApp from "./User-app/UserApp";
// Authorities App pages
import NewReports from "./Authorities-app/Pages/NewReports";

import Pusher from "pusher-js";
import config from "../src/API/config.json";

function App() {
  useEffect(() => {
    // const pusher = new Pusher("f06fc2e0e3a78a7ca79b", {
    //   cluster: "eu",
    //   encrypted: true,
    // });
    // const channel = pusher.subscribe("chat.2");
    // channel.bind("message", (data) => {
    //   console.log(data);
    // });
    // console.log(pusher);
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />}></Route>
          <Route path="user" element={<UserApp />}>
            <Route path="register" element={<Register></Register>}></Route>
            <Route path="sms-verify" element={<SmsVerify></SmsVerify>}></Route>
            <Route index element={<Report></Report>}></Route>
            <Route path=":userid" element={<Profile></Profile>}></Route>

            <Route path="*" element={<Page404></Page404>}></Route>
          </Route>

          <Route path="agent" element={<AgentApp />}></Route>
          <Route path="authority" element={<AuthoritiesApp />} />
          <Route path="admin" element={<AdminApp />}></Route>
          <Route path="*" element={<Page404></Page404>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
