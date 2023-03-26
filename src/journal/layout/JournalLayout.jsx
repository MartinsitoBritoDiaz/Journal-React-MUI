import { Box, Toolbar } from "@mui/material";
import React from "react";
import { Navbar } from "../components/Navbar";
import { SideBar } from "../components";
import { useSelector } from "react-redux";

export const JournalLayout = ({ children }) => {
  
  const { drawerWidth } = useSelector((state) => state.journal);
  return (
    <Box
      // sx={{ display: "flex" }}
      className="animate__animated animate__fadeIn animate__faster"
    >
      <Navbar />
      <SideBar />

      <Box component="main" sx={{ flexGrow: 1, pr: 4, display: "flex", ml: { xs: `${drawerWidth < 100 ? drawerWidth : 0}px` }, }}>
        {/* <Toolbar /> */}
        <Box component="main" sx={{ flexGrow: 1, p: 4, pb: 0 }}>
          {children}

        </Box>
      </Box>
    </Box>
  );
};
