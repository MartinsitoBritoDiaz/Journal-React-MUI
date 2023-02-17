import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
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