import React from "react";
import Home from "../components/home/Home";
import Dashboard from "../components/dashboard/Dashboard";
import { useAuth0 } from "@auth0/auth0-react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/common/nav/Navbar";
import Login from "../components/login/Login";

const RouterApp = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <div>
      {isAuthenticated ? (

        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </BrowserRouter>
      ) :
      (<Login/>)
      }
    </div>
  );
};

export default RouterApp;
