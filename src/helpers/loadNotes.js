import { collection, getDocs } from "firebase/firestore/lite";
import { FirebaseDB } from "../firebase/config";

export const loadNotes = async (uid = "") => {
  if (!uid) throw new Error("The UID of the user does not exist");

  const collectionRef = collection(FirebaseDB, `${uid}/journal/notes`);
  const data = await getDocs(collectionRef);

  const notes = [];

  data.forEach((doc) => {
    notes.push({ id: doc.id, ...doc.data() })
  });

  return notes;
};
