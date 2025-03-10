import React from "react";
import TrackingCard from "../features/dashboard/TrackingCard";
import DocumentCard from "../features/dashboard/DocumentCard";
import { Box } from "@mui/material";

const Dashboard = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <TrackingCard />
      <DocumentCard />
    </Box>
  );
};

export default Dashboard;
