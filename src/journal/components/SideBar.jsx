import { TurnedInNot } from "@mui/icons-material";
import {
  Box,
  Button,
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
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { SideBarItem } from "./";

export const SideBar = ({ drawerWidth = 240 }) => {
  const { notes } = useSelector((state) => state.journal);
  const [closeMenu, setCloseMenu] = useState(true);

  useEffect(() => {
    console.log(closeMenu)
  
  }, [closeMenu])

  const onChangeMenu = () => {
    setCloseMenu(false);
  }
  
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
        <Toolbar
          sx={{
            backgroundColor: "primary.main",
            color: "white",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h6" noWrap component="div">
            JournalApp
          </Typography>

          <Button
            sx={{
              p: 0,
              m: 0,
            }}
            onClick={onChangeMenu}
          >
            <img
              src={"./assets/menu.png"}
              width={30}
              alt={"note icon"}
              loading="lazy"
            />
          </Button>
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
