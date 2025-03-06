import { Avatar, Box, Button, useMediaQuery } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
import { COLOR } from "../../../design/color";
import { MENU_ROUTE } from "../../../router/menuRoute";
import SidebarTooltip from "../../common/tooltip/SidebarTooltip";
import { Logout } from "@mui/icons-material";

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
      <Avatar
        alt="User"
        sx={{
          my: 2,
          width: 75,
          height: 75,
        }}
        src="/logoF.png"
      />
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
          {MENU_ROUTE.map(({ path, name, icon }) => (
            <SidebarTooltip key={path} title={name}>
              <NavLink
                act
                to={path}
                style={{
                  backgroundColor: path === window.location.pathname ? "green" : "transparent",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "15px",
                  textDecoration: "none",
                  color: "white",
                  transition: "0.3s",
                }}
              >
                {icon}
              </NavLink>
            </SidebarTooltip>
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
         <Logout />
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
