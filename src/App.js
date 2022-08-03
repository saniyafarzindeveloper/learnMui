import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Common from "./Common";

export default function App() {
  return (
    <>
      {/* BrowserRouter simply helps in creating a url/ connecting it to the browser */}
      <BrowserRouter>
        <Routes>
          {/* routes is a wrapper for all the routes */}
          <Route path="/" element = {<Common formChange = {true} />} />{/* routes simply means path */}
          <Route path="sign-up" element = {<Common formChange = {false} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
