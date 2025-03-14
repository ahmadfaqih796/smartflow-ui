import { Outlet } from "react-router-dom";
import Navbar from "./container/Navbar";

const AdminLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default AdminLayout;
