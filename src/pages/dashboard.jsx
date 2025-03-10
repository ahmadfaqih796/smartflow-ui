import { CardContent, Divider, Typography } from "@mui/material";
import React from "react";
import BaseCard from "../components/common/card/BaseCard";

const Dashboard = () => {
  return (
    <div>
      <BaseCard>
        <Typography variant="h6" textAlign="center" p={2}>
          Please enter the barcode here for real-time and accurate document
          tracking
        </Typography>
        <Divider />
        <CardContent>
          Hello Barcode
        </CardContent>
      </BaseCard>
    </div>
  );
};

export default Dashboard;
