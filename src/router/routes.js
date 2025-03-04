import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "../pages";
import AdminLayout from "../components/layout/AdminLayout";
import Dashboard from "../pages/dashboard";
import Login from "../pages/login";
import ProtectedRoute from "./ProtectedRoute";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <AdminLayout>
                <Dashboard />
              </AdminLayout>
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default AppRouter;
