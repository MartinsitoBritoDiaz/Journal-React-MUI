import {
  DeleteOutline,
  SaveOutlined,
  UploadFileOutlined,
  UploadOutlined,
} from "@mui/icons-material";
import { Button, Grid, IconButton, TextField, Typography } from "@mui/material";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";
import { ImageGallery } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../hooks/useForm";
import { useEffect, useMemo, useRef } from "react";
import { setActiveNote } from "../../store/journal/journalSlice";
import { startDeletingNote, startSaveNote, startUploadingFiles } from "../../store/journal/thunks";

export const NoteView = () => {
  const dispatch = useDispatch();
  const fileUploadRef = useRef();

  const {
    active: note,
    messageSaved,
    isSaving,
  } = useSelector((state) => state.journal);

  const { body, title, date, onInputChange, formState } = useForm(note);

  const dateString = useMemo(() => {
    const currentDate = new Date(date);
    return new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
      currentDate
    );
  }, [date]);

  const onSaveNote = () => {
    dispatch(startSaveNote());
  };

  const onFileInputChange = ({ target }) => {
    if (target.files.length === 0) return;

    dispatch(startUploadingFiles(target.files));
  };

  const onDelete = () => {
    dispatch( startDeletingNote() );
  }
  useEffect(() => {
    if (messageSaved.length > 0) {
      Swal.fire("Note was updated", messageSaved, "success");
    }
  }, [messageSaved]);

  useEffect(() => {
    dispatch(setActiveNote(formState));
  }, [formState]);

  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ mb: 1, rowGap: "2rem" }}
      className="animate__animated animate__fadeIn animate__faster"
    >
      <Grid item>
        <Typography fontSize={39} fontWeight="light">
          {dateString}
        </Typography>
      </Grid>
      <Grid item sx={{ display: "flex" }}>
        <input
        
          disabled={isSaving}
          type="file"
          multiple
          ref={fileUploadRef}
          onChange={onFileInputChange}
          style={{ display: "none" }}
        />
        <IconButton
          disabled={isSaving}
          onClick={() => fileUploadRef.current.click()}
        >
          <UploadOutlined sx={{ color: "primary.main" }} />
        </IconButton>
        <Button
          disabled={isSaving}
          onClick={onSaveNote}
          color="primary"
          sx={{
            p: 1,
            px: 3,
            display: "flex",
            columnGap: "10px",
            backgroundColor: "primary.main",
            borderRadius: "1rem",
            color: "#fff",
            "&:hover": {
              backgroundColor: "secondary.main", // set your hover color here
            },
          }}
        >
          {/* <SaveOutlined sx={{ fontSize: 30, mr: 1 }} /> */}
          <span sx={{}}>Save</span>
        </Button>
      </Grid>

      <Grid container sx={{ rowGap: "2rem" }}>
        <TextField
          type="text"
          variant="outlined"
          fullWidth
          placeholder="Insert a title"
          label="Title"
          sx={{ border: "none", mb: 1 }}
          name="title"
          value={title}
          onChange={onInputChange}
        />

        <TextField
          type="text"
          variant="outlined"
          fullWidth
          multiline
          label="What happened today?"
          minRows={5}
          name="body"
          value={body}
          onChange={onInputChange}
        />
      </Grid>

      <Grid container justifyContent='end'>
        <Button
          onClick={onDelete}
        >
          <DeleteOutline />
          Delete
        </Button>
      </Grid>

      <ImageGallery images={note.imageUrls} />
    </Grid>
  );
};
