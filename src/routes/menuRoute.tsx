import { lazy } from "react";

export const MENU_ROUTE = [
   {
     path: "/dashboard",
     name: "Dashboard",
   //   icon: <DashboardIcon fontSize="large" />,
     element: lazy(() => import("../pages/dashboard")),
   },
 ];