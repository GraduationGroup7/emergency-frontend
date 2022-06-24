import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AdminApp from "./Admin-app/AdminApp";
import AgentApp from "./Agent-app/AgentApp";
import AuthoritiesApp from "./Authorities-app/AuthoritiesApp";
import Login from "./Pages/Login";
import Page404 from "./Pages/Page404";
import Pusher from "pusher-js";
import config from "./API/config.json";
// import * as PusherPushNotifications from "@pusher/push-notifications-web";

// User App pages
import Chat from "../src/User-app/Pages/Chat";
import Profile from "./User-app/Pages/Profile";
import Register from "./User-app/Pages/Register";
import Report from "./User-app/Pages/Report";
import SmsVerify from "./User-app/Pages/SmsVerify";
import UserApp from "./User-app/UserApp";

// Authorities App pages
import CallHelp from "./User-app/Pages/CallHelp";
import Chatroom from "./Pages/Chatroom";
import MainWrapper from "./Pages/MainWrapper";
import Dashboard from "./Authorities-app/Pages/Dashboard";

// Agent App Pages
import EmergencyAssignment from "./Agent-app/EmergencyAssignment";

// Admin App Pages
import DataGridComponent from "./Components/DataGridComponent";

const pusher = new Pusher("f06fc2e0e3a78a7ca79b", {
  cluster: "eu",
  encrypted: true,
  authEndpoint: `${config.api}/pusher/auth`,
  auth: {
    headers: {
      Authorization: localStorage.getItem("authToken")
        ? "Bearer " + localStorage.getItem("authToken")
        : "",
    },
  },
});

function App() {
  useEffect(() => {
    console.log("App rerendered");
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/emergency-frontend"
            element={<MainWrapper></MainWrapper>}
          >
            <Route index element={<Login />}></Route>
            <Route path="login" element={<Login />}></Route>
            <Route path="register" element={<Register></Register>}></Route>
            <Route
              path="user/sms-verify/:request_id/:id"
              element={<SmsVerify></SmsVerify>}
            ></Route>
            <Route path="user" element={<UserApp />}>
              <Route index element={<Report></Report>}></Route>
              <Route path="profile" element={<Profile></Profile>}></Route>
              <Route path="call-help" element={<CallHelp />}></Route>
              <Route path="chat" element={<Chat></Chat>}></Route>
              <Route
                path="chatroom/:chatroom_id"
                element={<Chatroom></Chatroom>}
              ></Route>
              <Route path="*" element={<Page404></Page404>}></Route>
            </Route>

            <Route path="agent" element={<AgentApp />}>
              <Route
                index
                element={<EmergencyAssignment></EmergencyAssignment>}
              ></Route>
              <Route path="profile" element={<Profile></Profile>}></Route>
              <Route path="report" element={<Report />}></Route>
              <Route path="chat" element={<Chat></Chat>}></Route>
              <Route
                path="chatroom/:chatroom_id"
                element={<Chatroom></Chatroom>}
              ></Route>
              <Route path="*" element={<Page404></Page404>}></Route>
            </Route>
            <Route path="authority" element={<AuthoritiesApp />}>
              <Route index element={<Dashboard></Dashboard>}></Route>
            </Route>
            <Route path="admin" element={<AdminApp />}>
              <Route
                path="tables/:table_name"
                element={<DataGridComponent></DataGridComponent>}
              ></Route>
            </Route>
            <Route path="*" element={<Page404></Page404>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

export { pusher };
