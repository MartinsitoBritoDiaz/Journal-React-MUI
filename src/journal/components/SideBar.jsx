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
import { useDispatch, useSelector } from "react-redux";
import { SideBarItem } from "./";
import { changeSideBarMenu } from "../../store/journal";

export const SideBar = () => {
  const dispatch = useDispatch();
  const { notes, drawerWidth } = useSelector((state) => state.journal);
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    if(drawerWidth > 100){
      setIsOpen(true);
    }else{
      setIsOpen(false);
    }
  }, [drawerWidth])

  const onChangeMenu = () => {
    if(drawerWidth > 100){
      dispatch( changeSideBarMenu(60) );
    }else{
      dispatch( changeSideBarMenu(240) );
    }
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

          <Box
            sx={{
              p: 0,
              m: 0,
              cursor: 'pointer'
            }}
            onClick={onChangeMenu}
          >
            <img
              src={"./assets/menu.png"}
              width={30}
              alt={"note icon"}
              loading="lazy"
            />
          </Box>
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
            <SideBarItem key={note.id} {...note} isOpen={isOpen} />
          ))}
        </List>
      </Drawer>
    </Box>
  );
};
