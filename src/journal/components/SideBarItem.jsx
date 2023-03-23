import { TurnedInNot } from "@mui/icons-material";
import {
  Grid,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React, { useMemo } from "react";
import { useDispatch } from "react-redux";
import { setActiveNote } from "../../store/journal/journalSlice";

export const SideBarItem = ({ title = "", body, id, date, imageUrls = [] }) => {
  const dispatch = useDispatch();

  const newTitle = useMemo(() => {
    return title.length > 17 ? title.substring(0, 17) + "..." : title;
  }, [title]);

  const handleActiveNote = () => {
    dispatch(setActiveNote({ id, title, body, date, imageUrls }));
  };

  return (
    <ListItem disablePadding>
      <ListItemButton sx={{ '&:hover': {
          backgroundColor: 'secondary.main', // set your hover color here
        } }} onClick={handleActiveNote}>
        <ListItemIcon>
          <img
            src={'./assets/note-icon.png'}
            width={30}
            alt={'note icon'}
            loading="lazy"
          />
        </ListItemIcon>
        <Grid container>
          <ListItemText primary={newTitle} />
          <ListItemText primary={"Proident sint cillum aliqua dolore. D"} />
        </Grid>
      </ListItemButton>
    </ListItem>
  );
};
