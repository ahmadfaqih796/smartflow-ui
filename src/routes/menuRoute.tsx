import { lazy } from "react";
import {
  BoxCubeIcon,
  // CalenderIcon,
  // ChevronDownIcon,
  GridIcon,
  // HorizontaLDots,
  // ListIcon,
  // PageIcon,
  // PieChartIcon,
  // PlugInIcon,
  // TableIcon,
  // UserCircleIcon,
} from "@/assets/icons";

export const MENU_ROUTE = [
  {
    path: "/home",
    name: "Dashboard",
    icon: <GridIcon />,
    element: lazy(() => import("../pages/dashboard")),
  },
  {
    icon: <BoxCubeIcon />,
    name: "Management",
    subItems: [
      {
        name: "User",
        path: "/management/users",
        count: 4,
        element: lazy(() => import("../pages/management/user/user.page")),
      },
      {
        name: "Role",
        path: "/management/roles",
        element: lazy(() => import("../pages/management/role")),
      },
    ],
  },
];
