import { Firestore, collection, deleteDoc, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { addNewEmptyNote, changeMenu, deleteNoteById, noteUpdated, savingNewNote, setActiveNote, setNotes, setPhotosToActiveNotes, setSaving } from "./journalSlice";
import { loadNotes, uploadFiles } from "../../helpers";
import { Savings } from "@mui/icons-material";

export const startNewNote = () => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;

        dispatch( savingNewNote() );

        const newNote = {
            title: 'Note',
            body: '',
            imageUrls: [],
            date: new Date().getTime(),
        }

        const newDoc = doc( collection(  FirebaseDB, `${ uid }/journal/notes`));
        const resp = await setDoc( newDoc, newNote);

        newNote.id = newDoc.id;

        dispatch( addNewEmptyNote( newNote) );
        dispatch( setActiveNote( newNote) );

    }
}

export const getNotes = () => {
    return async( dispatch, getState ) => {
        const { uid } = getState().auth;
        if( !uid ) throw new Error("The UID of the user does not exist");

        const notes = await loadNotes(uid);
        dispatch( setNotes(notes) );
    }
}


export const startSaveNote = () => {
    return async( dispatch, getState ) => {

        dispatch( setSaving() );

        const { uid } = getState().auth;
        const { active:note } = getState().journal;

        const noteToFirestore = { ...note };
        delete noteToFirestore.id;

        const docRef = doc( FirebaseDB, `${ uid }/journal/notes/${ note.id }`);
        await setDoc( docRef, noteToFirestore, { merge: true } );

        dispatch( noteUpdated( note ) );
    }
}

export const startUploadingFiles = (files = []) => {
    return async (dispatch ) => {
        dispatch( setSaving() );

        const filePromises = [];
        for (const file of files) {
            filePromises.push( uploadFiles( file ) );
        }

        const photosUrls = await Promise.all( filePromises );
        
        dispatch( setPhotosToActiveNotes( photosUrls ));
    }
}

export const startDeletingNote = () => {
    return async(dispatch, getState) => {
        const { uid } = getState().auth;
        const { active: note } = getState().journal;

        const docRef = doc( FirebaseDB, `${ uid }/journal/notes/${ note.id }`);
        await deleteDoc(docRef);

        dispatch( deleteNoteById( note.id ) );
    }
}

export const changeSideBarMenu = (size = 240) => {
    return async (dispatch) => {
        dispatch( changeMenu(size) );
    }
}