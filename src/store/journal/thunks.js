import { Firestore, collection, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { addNewEmptyNote, savingNewNote, setActiveNote, setSaving } from "./journalSlice";

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