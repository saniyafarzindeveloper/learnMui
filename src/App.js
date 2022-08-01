import React from "react";
import LoginPage from "./LoginPage";
import SignUp from "./SignUp";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      {/* BrowserRouter simply helps in creating a url/ connecting it to the browser */}
      <BrowserRouter>
        <Routes>
          {/* routes is a wrapper for all the routes */}
          <Route path="/" element = {<LoginPage />} />{/* routes simply means path */}
          <Route path="sign-up" element = {<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
