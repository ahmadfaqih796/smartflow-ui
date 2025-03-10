import React from "react";
import BaseCard from "../../components/common/card/BaseCard";
import { CardContent, Divider, Typography } from "@mui/material";
import ReactVirtualizedTable from "../../components/common/table/BaseTable";

const DocumentCard = () => {
  return (
    <BaseCard>
      <Typography variant="h6" textAlign="center" p={2}>
        The upcoming document
      </Typography>
      <Divider />
      <CardContent>
        <ReactVirtualizedTable />
      </CardContent>
    </BaseCard>
  );
};

export default DocumentCard;
