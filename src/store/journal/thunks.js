import { Firestore, collection, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { addNewEmptyNote, savingNewNote, setActiveNote, setNotes, setSaving } from "./journalSlice";
import { loadNotes } from "../../helpers";

export const startNewNote = () => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;

        dispatch( savingNewNote() );

        const newNote = {
            title: '',
            body: '',
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