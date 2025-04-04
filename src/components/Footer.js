import React from "react";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { Facebook, Twitter, Instagram } from "@mui/icons-material";

const Footer = ({ darkMode }) => (
  <BottomNavigation
    showLabels
    sx={{
      backgroundColor: darkMode ? "#001f3f" : "#ffffff",
      color: darkMode ? "#ffffff" : "#000000",
    }}
  >
    <BottomNavigationAction
      label="Facebook"
      icon={<Facebook />}
      sx={{
        color: darkMode ? "#ffffff" : "#000000",
      }}
    />
    <BottomNavigationAction
      label="Twitter"
      icon={<Twitter />}
      sx={{
        color: darkMode ? "#ffffff" : "#000000",
      }}
    />
    <BottomNavigationAction
      label="Instagram"
      icon={<Instagram />}
      sx={{
        color: darkMode ? "#ffffff" : "#000000",
      }}
    />
  </BottomNavigation>
);

export default Footer;
