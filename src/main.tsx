import "./index.css"
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App.tsx";
import DonatePage from "./components/pages/donatePage/DonatePage.tsx";
import HomePage from "./components/pages/homePage/HomePage.tsx";
import Signup from "./components/pages/signupPage/signup.tsx";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/donate" element={<DonatePage />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  </BrowserRouter>
);
