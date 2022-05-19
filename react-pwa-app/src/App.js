import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AdminApp from "./Admin-app/AdminApp";
import AgentApp from "./Agent-app/AgentApp";
import AuthoritiesApp from "./Authorities-app/AuthoritiesApp";
import Login from "./Pages/Login";
import Register from "./User-app/Pages/Register";
import UserApp from "./User-app/UserApp";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="user" element={<UserApp />}></Route>
          <Route path="register" element={<Register></Register>}></Route>
          <Route path="agent" element={<AgentApp />}></Route>
          <Route path="authority" element={<AuthoritiesApp />}></Route>
          <Route path="admin" element={<AdminApp />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
