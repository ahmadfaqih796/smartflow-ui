import React from "react";

const AdminLayout = ({ children }) => {
  return (
    <div>
      <nav>Admin Navigation</nav>
      <main>{children}</main>
    </div>
  );
};

export default AdminLayout;
