import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AdminApp from "./Admin-app/AdminApp";
import AgentApp from "./Agent-app/AgentApp";
import AuthoritiesApp from "./Authorities-app/AuthoritiesApp";
import Login from "./Pages/Login";
import Page404 from "./Pages/Page404";

// User App pages
import Chat from "./Pages/Chat";
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
import AuthorityForm from "./Authorities-app/Pages/AuthorityForm";

// Agent App Pages
import EmergencyAssignment from "./Agent-app/EmergencyAssignment";

// Admin App Pages
import AdminDashboard from "./Admin-app/pages/AdminDashboard";
import AdminForm from "./Admin-app/pages/AdminForm";

function App() {
  useEffect(() => {
    console.log("App rerendered");
  }, []);

  return (
    <>
      <BrowserRouter basename="/emergency-frontend">
        <Routes>
          <Route path="/" element={<MainWrapper></MainWrapper>}>
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
                path="chat/chatroom/:chatroom_id"
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
                path="chat/chatroom/:chatroom_id"
                element={<Chatroom></Chatroom>}
              ></Route>
              <Route path="*" element={<Page404></Page404>}></Route>
            </Route>
            <Route path="authority" element={<AuthoritiesApp />}>
              <Route index element={<Dashboard></Dashboard>}></Route>
              {/* if id is "create" is will fetch the create form request otherwise, update the user with that id */}
              <Route
                path="form/:formType/:id"
                element={<AuthorityForm></AuthorityForm>}
              ></Route>
            </Route>
            <Route path="admin" element={<AdminApp />}>
              <Route index element={<AdminDashboard></AdminDashboard>}></Route>
              <Route
                path="form/:formType/:id"
                element={<AdminForm></AdminForm>}
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
