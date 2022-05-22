import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AdminApp from "./Admin-app/AdminApp";
import AgentApp from "./Agent-app/AgentApp";
import AuthoritiesApp from "./Authorities-app/AuthoritiesApp";
import Login from "./Pages/Login";
import Page404 from "./Pages/Page404";
import Register from "./User-app/Pages/Register";
import SmsVerify from "./User-app/Pages/SmsVerify";
import UserApp from "./User-app/UserApp";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />}></Route>
          <Route path="user" element={<UserApp />}>
            <Route path="register" element={<Register></Register>}></Route>
            <Route path="sms-verify" element={<SmsVerify></SmsVerify>}></Route>
            <Route path="*" element={<Page404></Page404>}></Route>
          </Route>

          <Route path="agent" element={<AgentApp />}></Route>
          <Route path="authority" element={<AuthoritiesApp />}></Route>
          <Route path="admin" element={<AdminApp />}></Route>
          <Route path="*" element={<Page404></Page404>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
