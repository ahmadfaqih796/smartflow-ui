import React from "react";
import { useAuth } from "../context/AuthContext";

const Dashboard = () => {
  const { logout } = useAuth();

  const handleLogout = async () => {
    await logout();
  };
  return (
    <div>
      Dashboard
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
