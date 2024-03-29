import { createSlice } from "@reduxjs/toolkit";

export const journalSlice = createSlice({
  name: "journal",
  initialState: {
    drawerWidth: 240,
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
    deleteNoteById: (state, action) => {
      state.active = null;
      state.notes = state.notes.filter( note => note.id !== action.payload );
    },
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
    setPhotosToActiveNotes: (state, action ) => {
      state.active.imageUrls = [ ...state.active.imageUrls, ...action.payload ];
      state.isSaving = false;
    }
    ,
    setSaving: (state) => {
      state.isSaving = true;
      state.messageSaved = '';
    },
    clearNoteLogOut: (state) => {
      state.isSaving = false;
      state.messageSaved = '';
      state.active = null,
      state.notes = []
    },
    changeMenu: (state, action) => {
      state.drawerWidth = action.payload;
    }
  },
});

// Action creators are generated for each case reducer function
export const {
  addNewEmptyNote,
  clearNoteLogOut,
  changeMenu,
  deleteNoteById,
  noteUpdated,
  savingNewNote,
  setActiveNote,
  setNotes,
  setPhotosToActiveNotes,
  setSaving,
} = journalSlice.actions;
