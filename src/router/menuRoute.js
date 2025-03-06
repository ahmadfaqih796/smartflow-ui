import { lazy } from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";

export const MENU_ROUTE = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: <DashboardIcon fontSize="large"  />,
    element: lazy(() => import("../pages/dashboard")),
    layout: "admin",
  },
  {
    path: "/profile",
    name: "Profile",
    icon: <PersonIcon fontSize="large" />,
    element: lazy(() => import("../pages/profile")),
    layout: "admin",
  },
];
