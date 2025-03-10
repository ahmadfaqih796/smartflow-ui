import { Card, styled } from "@mui/material";
import React from "react";
import { COLOR } from "../../../design/color";

const CssCard = styled(Card)({
  // width: '100%',
  // padding: "20px",
  borderRadius: "20px",
  backgroundColor: "white",
  boxShadow: `0px 4px 4px ${COLOR.primary}`,
  // "&:hover": {
  //   boxShadow: '0px 4px 4px green'
  // }
});

const BaseCard = ({ children, ...props }) => {
  return (
    <CssCard {...props}>
      {children}
    </CssCard>
  );
};

export default BaseCard;
