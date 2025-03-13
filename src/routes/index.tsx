import { Suspense } from "react";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import AuthGuard from "./AuthGuard";
import { routeConfig } from "./routerConfig";
import AdminLayout from "@/templates/AdminLayout";

const pages = import.meta.glob("/src/pages/**/*.tsx", { eager: true }) as {
  [key: string]: any;
};
const generateRoutePath = (filePath: string) => {
  let routePath = filePath.replace("/src/pages", "").replace(".tsx", "");
  routePath = routePath.replace(/\[([^\]]+)\]/g, ":$1");
  if (routePath.endsWith("/index")) {
    routePath = routePath.replace("/index", "");
  }
  return routePath;
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
          {/* Public Routes */}
          <Route path="/" element={<div>login</div>} />
          <Route
            path="/login"
            element={!user ? <div>login</div> : <Navigate to="/dashboard" />}
          />

          {/* Dynamically generated routes */}
          {Object.keys(pages).map((filePath: string) => {
            const Component = pages[filePath].default;
            const routePath = generateRoutePath(filePath)?.toLowerCase();

            const { allowedRoles } = routeConfig(routePath);

            if (allowedRoles) {
              return (
                <Route
                  key={routePath}
                  path={routePath}
                  element={
                    <AuthGuard allowedRoles={allowedRoles}>
                      <AdminLayout />
                    </AuthGuard>
                  }
                >
                  <Route index element={<Component />} />
                </Route>
              );
            }
            return (
              <Route key={routePath} path={routePath} element={<Component />} />
            );
          })}

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
