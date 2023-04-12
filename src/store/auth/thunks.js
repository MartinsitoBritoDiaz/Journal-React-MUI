import { logOutFirebase, loginWithEmailPassword, registerUserwithEmailPassword, singInWithGoogle } from "../../firebase/providers";
import { clearNoteLogOut } from "../journal/journalSlice";
import { checkingCredentials, logIn, logOut } from "./authSlice";

export const checkingAuthentication = ( email, password ) => {
    return async( dispatch ) => {
        dispatch( checkingCredentials() );
    }
}

export const startGoogleSignIn = ( email, password ) => {
    return async( dispatch ) => {
        dispatch( checkingCredentials() );
        const result = await singInWithGoogle();
        // console.log(result)
        if( !result.ok ) return dispatch( logOut( result.errorMessage ) );

        dispatch( logIn( result ) );
    }
}

export const startRegisteringUserWithEmailPassword = ({ email, password, displayName }) => {
    return async( dispatch) => {
        dispatch( checkingCredentials() );

        const { ok, uid, photoURL, errorMessage } = await registerUserwithEmailPassword( { email, password, displayName } );
    
        if( !ok ) return dispatch( logOut( { errorMessage } ) );

        dispatch( logIn( { uid, displayName, email, photoURL } ) );

    }
}

export const startLogInUserWithEmailPassword = ({ email, password }) => {
    return async( dispatch ) => {
        dispatch( checkingCredentials() );
        
        const { ok, uid, photoURL, displayName, errorMessage } = await loginWithEmailPassword( { email, password } );

        if( !ok ) return dispatch( logOut( { errorMessage } ));

        dispatch( logIn( {uid, email, photoURL, displayName } ));
    }
}

export const startLogOut = () => {
    return async( dispatch ) => {
        try {
            await logOutFirebase();

            dispatch( clearNoteLogOut() );
            dispatch( logOut() );

        } catch (error) {
            return {
                error
            }
        }

        
    }
}