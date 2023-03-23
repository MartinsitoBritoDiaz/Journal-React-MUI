import { Box, Toolbar } from "@mui/material";
import React from "react";
import { Navbar } from "../components/Navbar";
import { SideBar } from "../components";

const drawerWidth = 280;

export const JournalLayout = ({ children }) => {
  return (
    <Box
      // sx={{ display: "flex" }}
      className="animate__animated animate__fadeIn animate__faster"
    >
      <Navbar drawerWidth={drawerWidth} />
      <SideBar drawerWidth={drawerWidth} />

      <Box component="main" sx={{ flexGrow: 1, pr: 4, display: "flex" }}>
        {/* <Toolbar /> */}
        <Box component="main" sx={{ flexGrow: 1, p: 4, pb: 0, ml: { sm: `${drawerWidth}px` }, }}>
          {children}

        </Box>
      </Box>
    </Box>
  );
};
