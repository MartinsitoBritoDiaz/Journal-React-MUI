import { TurnedInNot } from "@mui/icons-material";
import {
  Box,
  Divider,
  Drawer,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { SideBarItem } from "./";

export const SideBar = ({ drawerWidth = 240 }) => {
  const { notes } = useSelector((state) => state.journal);

  return (
    <Box
      component="nav"
      sx={{
        width: { sm: drawerWidth },
        flexShrink: { sm: 0 },
      }}
    >
      <Drawer
        variant="permanent"
        open
        sx={{
          display: "block",
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            backgroundColor: "primary.main",
          },
        }}
      >
        <Toolbar sx={{ backgroundColor: "primary.main", color: "white" }}>
          <Typography variant="h6" noWrap component="div">
            JournalApp
          </Typography>
        </Toolbar>
        <List
          sx={{
            color: "white",
            maxHeight: "700px",
            overflow: "auto",
            position: "fixed",
            width: { sm: drawerWidth },
            flexShrink: { sm: 0 },
            mt: 10,
          }}
        >
          {notes.map((note) => (
            <SideBarItem key={note.id} {...note} />
          ))}
        </List>
      </Drawer>
    </Box>
  );
};
