import React from "react";
import { Outlet } from "react-router";
import Navbar from "./container/Navbar";

type Props = {
  children: React.ReactNode
}

const AdminLayout = ({children} : Props) => {
  return (
    <div>
      <Navbar />
      <Outlet />
      {children}
    </div>
  );
};

export default AdminLayout;
