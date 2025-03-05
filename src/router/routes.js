import React, { Suspense } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import AdminLayout from "../components/layout/AdminLayout";
import Home from "../pages/Home";
import Login from "../pages/login";
import ProtectedRoute from "./ProtectedRoute";
import { MENU_ROUTE } from "./menuRoute";

const AppRouter = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />

          {MENU_ROUTE.map(({ path, element: Component, layout }) => {
            let WrappedComponent = (
              <ProtectedRoute>
                <Component />
              </ProtectedRoute>
            );

            if (layout === "admin") {
              WrappedComponent = (
                <ProtectedRoute>
                  <AdminLayout>
                    <Component />
                  </AdminLayout>
                </ProtectedRoute>
              );
            }

            return <Route key={path} path={path} element={WrappedComponent} />;
          })}
        </Routes>
      </Suspense>
    </Router>
  );
};

export default AppRouter;
