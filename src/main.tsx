import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Login from "./assets/views/LoginForm.tsx";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  </StrictMode>
);
