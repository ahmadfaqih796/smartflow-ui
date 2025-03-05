import { Box } from "@mui/material";
import React from "react";
import Navbar from "./container/Navbar";

const AdminLayout = ({ children }) => {
  return (
    <Box sx={{
      display: "flex",
      // flexDirection: "column",
    }}>
      <Navbar/>
      <main>{children}</main>
    </Box>
  );
};

export default AdminLayout;
