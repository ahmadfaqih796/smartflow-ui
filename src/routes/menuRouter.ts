export const menuRouter = [
  {
    path: "/dashboard",
    role: ["admin", "spv", "staff"],
    label: "Dashboard",
    icon: "ic-dashboard",
  },
  {
    path: "/management",
    role: ["admin", "spv"],
    label: "Management",
    icon: "ic-management",
    children: [
      {
        path: "/management/user",
        role: ["admin", "spv"],
        label: "User",
        icon: "ic-user",
      },
      {
        path: "/management/role",
        role: ["admin"],
        label: "Role",
        icon: "ic-user",
      },
      {
        path: "/management/division",
        role: ["admin"],
        label: "Division",
        icon: "ic-user",
      },
      {
        path: "/management/project",
        role: ["spv"],
        label: "Project",
        icon: "ic-analysis",
      },
    ],
  },
];
