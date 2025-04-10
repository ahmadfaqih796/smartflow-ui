import LoginPage from "@/pages/auth/login";
import { JSX, Suspense } from "react";
import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router";
import { MENU_ROUTE } from "./menuRoute";
import AdminLayout from "@/templates/AdminLayout";

type RouteProps = {
  path: string;
  element: React.LazyExoticComponent<() => JSX.Element>;
  layout?: "blank" | "default";
};

const AppRoutes = () => {
  const user = {
    role: "admin" as string,
    fullname: "Faqih" as string,
  };
  return (
    <Router>
      <Suspense fallback={<div>Loading.....</div>}>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route
            path="/login"
            element={!user ? <div>login</div> : <Navigate to="/dashboard" />}
          />

          {MENU_ROUTE.map(
            ({ path, element: Component, layout }: RouteProps) => {
              let WrappedComponent = (
                <AdminLayout>
                  <Component />
                </AdminLayout>
              );
              if (layout === "blank") {
                WrappedComponent = <Component />;
              }
              return (
                <Route key={path} path={path} element={WrappedComponent} />
              );
            }
          )}

          {/* Error Pages */}
          <Route path="/403" element={<div>Forbidden</div>} />
          {/* <Route path="/404" element={<NotFound />} />
             <Route path="*" element={<Navigate to="/404" />} /> */}
          <Route path="*" element={<div>NotFound</div>} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default AppRoutes;
