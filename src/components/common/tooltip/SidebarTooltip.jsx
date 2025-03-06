import { Box, Tooltip, tooltipClasses, Typography } from "@mui/material";
import React from "react";
import { COLOR } from "../../../design/color";

const SidebarTooltip = ({ title, children, ...props }) => {
  return (
    <Tooltip
      title={
        <Box
          sx={{
            backgroundColor: COLOR.error,
            color: "white",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            px: 1,
            ml: "-10px",
            // py: 1,
            borderRadius: "20px",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              width: "8px",
              height: "8px",
              left: "-27px",
              backgroundColor: COLOR.error,
              borderRadius: "50%",
            }}
          />
          <Typography sx={{ fontSize: "14px", fontWeight: "bold" }}>
            {title}
          </Typography>
        </Box>
      }
      placement="right"
      arrow
      slotProps={{
        popper: {
          sx: {
            [`&.${tooltipClasses.popper}[data-popper-placement*="bottom"] .${tooltipClasses.tooltip}`]:
              {
                marginTop: "0px",
              },
            [`&.${tooltipClasses.popper}[data-popper-placement*="top"] .${tooltipClasses.tooltip}`]:
              {
                marginBottom: "0px",
              },
            [`&.${tooltipClasses.popper}[data-popper-placement*="right"] .${tooltipClasses.tooltip}`]:
              {
                marginLeft: "0px",
              },
            [`&.${tooltipClasses.popper}[data-popper-placement*="left"] .${tooltipClasses.tooltip}`]:
              {
                marginRight: "0px",
              },
          },
        },
      }}
      componentsProps={{
        tooltip: {
          sx: {
            backgroundColor: COLOR.error,
            fontSize: "14px",
            padding: "8px 12px",
            borderRadius: "0 50px 50px 0",
          },
        },
        arrow: {
          sx: {
            fontSize: "36.5px",
            color: COLOR.error,
            mt: "-3.7px",
          },
        },
      }}
      {...props}
    >
      {children}
    </Tooltip>
  );
};

export default SidebarTooltip;
