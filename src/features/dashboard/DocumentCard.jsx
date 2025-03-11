import React from "react";
import BaseCard from "../../components/common/card/BaseCard";
import { CardContent, Divider, Typography } from "@mui/material";
import ReactVirtualizedTable from "../../components/common/table/BaseTable";
import { DummyColumn } from "./columns/DummyColumn";
import  Chance  from "chance";

const DocumentCard = () => {
  const chance = new Chance(42);
  const createData = (id) => {
    return {
      id,
      firstName: chance.first(),
      lastName: chance.last(),
      email: chance.email(),
      age: chance.age(),
      phone: chance.phone(),
      state: chance.state({ full: true }),
      address: chance.address(),
      avatar: chance.avatar(),
    };
  };
  const rows = Array.from({ length: 50 }, (_, index) => createData(index));
  return (
    <BaseCard>
      <Typography variant="h6" textAlign="center" p={2}>
        The upcoming document
      </Typography>
      <Divider />
      <CardContent>
        <ReactVirtualizedTable columns={DummyColumn} rows={rows} />
      </CardContent>
    </BaseCard>
  );
};

export default DocumentCard;
