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

export const SideBarItem = ({
  title = "",
  body,
  id,
  date,
  imageUrls = [],
  isOpen,
}) => {
  const dispatch = useDispatch();

  const newTitle = useMemo(() => {
    return title.length > 17 ? title.substring(0, 17) + "..." : title;
  }, [title]);

  const newBody = useMemo(() => {
    return body.length > 17 ? body.substring(0, 17) + "..." : body;
  }, [body]);

  const handleActiveNote = () => {
    dispatch(setActiveNote({ id, title, body, date, imageUrls }));
  };

  return (
    <ListItem disablePadding>
      <ListItemButton
        sx={{
          "&:hover": {
            backgroundColor: "secondary.main", // set your hover color here
          },
        }}
        onClick={handleActiveNote}
      >
        <ListItemIcon>
          <img
            src={"./assets/note-icon.png"}
            width={30}
            alt={"note icon"}
            loading="lazy"
          />
        </ListItemIcon>
        {isOpen ? (
          <Grid container sx={{display: "flex", flexDirection: 'column'}}>
            <ListItemText primary={newTitle} />
            <ListItemText primary={newBody} />
          </Grid>
        ) : null}
      </ListItemButton>
    </ListItem>
  );
};
