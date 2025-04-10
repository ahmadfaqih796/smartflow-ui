import React from "react";
import { Outlet } from "react-router";
import Navbar from "./container/beauty/Navbar";

type Props = {
  children: React.ReactNode
}

const AdminLayout : React.FC<Props> = ({children} : Props) => {
  return (
    <div>
      <Navbar />
      <Outlet />
      {children}
    </div>
  );
};

export default AdminLayout;
