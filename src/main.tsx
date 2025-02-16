import "./index.css"
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App.tsx";
import DonatePage from "./components/pages/donatePage/DonatePage.tsx";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/donate" element={<DonatePage />} />
    </Routes>
  </BrowserRouter>
);
