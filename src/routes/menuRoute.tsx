import { lazy } from "react";
import {
  BoxCubeIcon,
  // CalenderIcon,
  // ChevronDownIcon,
  GridIcon,
  // HorizontaLDots,
  ListIcon,
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
    element: lazy(() => import("../pages/secure/dashboard")),
  },
  {
    icon: <BoxCubeIcon />,
    name: "Management",
    subItems: [
      {
        name: "User",
        path: "/management/users",
        count: 4,
        element: lazy(() => import("../pages/secure/management/user/user.page")),
      },
      {
        name: "Roles Workflow",
        path: "/management/roles-workflow",
        element: lazy(() => import("../pages/secure/management/role/roles-workflow.page")),
      },
    ],
  },
  {
    path: "/workflow",
    name: "Workflow",
    icon: <ListIcon />,
    element: lazy(() => import("../pages/secure/workflow/workflow.page")),
  },
];
