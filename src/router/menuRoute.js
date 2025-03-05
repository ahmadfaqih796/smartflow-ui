import { lazy } from "react";

export const MENU_ROUTE = [
  {
    path: "/dashboard",
    name: "Dashboard",
    element: lazy(() => import("../pages/dashboard")),
    layout: "admin",
  },
   {
     path: "/profile",
     name: "Profile",
     element: lazy(() => import("../pages/profile")),
     layout: "admin",
   },
];
