import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { FirebaseApp, FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const singInWithGoogle = async() => {
    try {
        const result = await signInWithPopup( FirebaseAuth, googleProvider );
       
        //Verificar credenciales
        // const credentials = GoogleAuthProvider.credentialFromResult( result );
        
        const { displayName, email, photoURL, uid} = result.user;

        return {
            ok: true,
            //User info
            displayName, email, photoURL, uid,
        }
    } catch (error) {
        const { message } = error;
        return {
            ok: false,
            errorMessage: message
        }
    }
}

export const registerUserwithEmailPassword = async({ email, password, displayName }) => {
    try {

        const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
        const { uid, photoURL } = resp.user;
        await updateProfile( FirebaseAuth.currentUser, { displayName });

        return {
            ok: true,
            uid, photoURL, email, displayName,
        }

    } catch (error) {
        return {
            ok: false,
            errorMessage: error.message
        }
    }
}

export const loginWithEmailPassword = async({ email, password }) => {
    try {
        const resp = await signInWithEmailAndPassword( FirebaseAuth, email, password ); 
        const { uid, photoURL, displayName } = resp.user;

        return {
            ok: true,
            uid, photoURL, email, displayName,
        }
    
    } catch (error) {
        return {
            ok: false,
            errorMessage: error.message,
        }
    }
}

export const logOutFirebase = async () => {
    return await FirebaseAuth.signOut();
}