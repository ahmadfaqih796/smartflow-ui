import { Box } from "@mui/material";
import React from "react";
import Navbar from "./container/Navbar";
import { COLOR } from "../../constants/color";
import Sidebar from "./container/Sidebar";

const AdminLayout = ({ children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        // flexDirection: "column",
      }}
    >
      <Navbar />
      <Box
        sx={{
          width: "calc(100% - 350px)",
          backgroundColor: COLOR.main,
          padding: "20px",
        }}
      >
        {children}
      </Box>
      <Box
        sx={{
          width: "350px",
          backgroundColor: "white",
          padding: "20px 0",
        }}
      >
        <Sidebar />
      </Box>
    </Box>
  );
};

export default AdminLayout;
