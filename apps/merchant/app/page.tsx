"use client"
import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Dashboard from "./dashboard/page";
import Marketing from "./marketing/page";

export default function Home() {
  const isAuthenticated = true;
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={isAuthenticated ? <Navigate to="/dashboard" /> : <Marketing />}
        />
        <Route
          path="/dashboard"
          element={isAuthenticated ? <Dashboard /> : <Navigate to="/" />}
        />
      </Routes>
    </Router>
  );
}
