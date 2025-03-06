import { Avatar, Box, Typography } from "@mui/material";
import React from "react";
import { COLOR } from "../../../design/color";

const Sidebar = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        padding: "20px 0",
      }}
    >
      <div>
        <Typography variant="h6" align="center">
          My Profile
        </Typography>
        <Avatar
          alt="User"
          sx={{
            my: 2,
            width: 100,
            height: 100,
            border: `5px solid ${COLOR.primary}`,
          }}
          src="https://picsum.photos/200/300"
        />
        <Typography
          variant="body1"
          align="center"
          color={COLOR.warning}
          sx={{ my: 1 }}
        >
          John Doe
        </Typography>
        <Typography variant="body2" align="center" color={COLOR.gray}>
          Admin
        </Typography>
      </div>
      <Box
        sx={{
          ml: "auto",
          mt: 4,
          backgroundColor: COLOR.primary,
          borderRadius: "30px 0 0 30px",
          width: "90%",
          py: 2,
          pl: 2,
        }}
      >
        <Typography variant="h6" fontWeight={600} color="white" mb={2}>
          My Task
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
            gap: 2,
          }}
        >
          {Array.from({ length: 2 }).map((_, index) => (
            <Box
              sx={{
                backgroundColor: COLOR.warning,
                borderRadius: "30px 0 0 30px",
                py: 0.5,
                pl: 1.5,
              }}
            >
              <Box
                sx={{
                  backgroundColor: "white",
                  borderRadius: "20px 0 0 20px",
                  p: 2,
                }}
              >
                <Typography variant="body1" key={index}>
                  Task {index + 1}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
