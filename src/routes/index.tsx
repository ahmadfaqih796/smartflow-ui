import LoginPage from "@/pages/auth/login";
import AppLayout from "@/templates/SimpleLayout";
import { JSX, Suspense } from "react";
import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router";
import { MENU_ROUTE } from "./menuRoute";
import NotFoundPage from "@/pages/errors/404.page";

type RouteProps = {
  path: string;
  element: React.LazyExoticComponent<() => JSX.Element>;
  layout?: "blank" | "default";
  subItems?: any[];
  icon?: any;
}


const AppRoutes = () => {
  const user = {
    role: "admin" as string,
    fullname: "Faqih" as string,
  };

  const renderRoutes = (routes: any) => {
    return routes.flatMap((route : RouteProps) => {
      if (route.subItems) {
        return route.subItems.map((sub: any) => (
          <Route key={sub.path} path={sub.path} element={<sub.element />} />
        ));
      } else {
        return (
          <Route
            key={route.path}
            path={route.path}
            element={<route.element />}
          />
        );
      }
    });
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
          <Route element={<AppLayout />}>
            {renderRoutes(MENU_ROUTE)}
          </Route>

          {/* Error Pages */}
          <Route path="/403" element={<div>Forbidden</div>} />
          {/* <Route path="/404" element={<NotFound />} />
             <Route path="*" element={<Navigate to="/404" />} /> */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default AppRoutes;
