import { Box, Button, useMediaQuery } from "@mui/material";
import React from "react";
import { MENU_ROUTE } from "../../../router/menuRoute";
import { COLOR } from "../../../design/color";
import { useAuth } from "../../../context/AuthContext";
import { NavLink } from "react-router-dom";

const MobileAppBar = () => {
  return <Box>MobileAppBar</Box>;
};

const DesktopAppBar = ({ onLogout }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
        height: "100%",
        width: "100%",
        //   gap: "10px",
      }}
    >
      <Box
        sx={{
          padding: "5px",
          border: "1px solid black",
          cursor: "pointer",
          color: "black",
          borderRadius: "50%",
        }}
      >
        Logo
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: COLOR.primary,
          height: "70%",
          width: "100%",
          padding: "35px 0",
          borderRadius: "0 30px 30px 0",
        }}
      >
        <Box>
          {MENU_ROUTE.map(({ path, name }) => (
            <Box key={path} sx={{ cursor: "pointer" }}>
              <NavLink to={path}>{name}</NavLink>
            </Box>
          ))}
        </Box>
        <Button
          onClick={onLogout}
          sx={{
            cursor: "pointer",
            backgroundColor: COLOR.error,
            borderRadius: "0 50px 50px 0",
            width: "135px",
            color: "white",
          }}
        >
          Keluar
        </Button>
      </Box>
    </Box>
  );
};

const Navbar = () => {
  const isMobile = useMediaQuery("(max-width:720px)");
  const { logout } = useAuth();
  return (
    <Box
      sx={{
        width: isMobile ? "100%" : "100px",
        height: isMobile ? "50px" : "100vh",
        backgroundColor: COLOR.main,
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {isMobile ? <MobileAppBar /> : <DesktopAppBar onLogout={logout} />}
    </Box>
  );
};

export default Navbar;
