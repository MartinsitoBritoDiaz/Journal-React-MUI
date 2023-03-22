import { createSlice } from "@reduxjs/toolkit";

export const journalSlice = createSlice({
  name: "journal",
  initialState: {
    isSaving: false,
    messageSaved: "",
    notes: [],
    active: null,
    // active: {
    //     id: 'ABC123',
    //     title: '',
    //     body: '',
    //     date: 1234567,
    //     imageUrls: [],
    // }
  },
  reducers: {
    savingNewNote: (state) => {
      state.isSaving = true;
    },
    addNewEmptyNote: (state, action) => {
      state.notes.push(action.payload);
      state.isSaving = false;
    },
    setActiveNote: (state, action) => {
      state.active = action.payload;
      state.messageSaved = '';
    },
    setNotes: (state, action) => {
      state.notes = action.payload;
    },
    deleteNote: (state, action) => {},
    noteUpdated: (state, action) => {
        state.isSaving = false;
        state.notes = state.notes.map( note => {
            if(note.id == action.payload.id){
                return action.payload;
            }

            return note;
        })    

        state.messageSaved = ` ${action.payload.title} successfully updated`
    },
    setSaving: (state) => {
      state.isSaving = true;
      state.messageSaved = '';
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  savingNewNote,
  addNewEmptyNote,
  setActiveNote,
  setNotes,
  deleteNote,
  noteUpdated,
  setSaving,
} = journalSlice.actions;
