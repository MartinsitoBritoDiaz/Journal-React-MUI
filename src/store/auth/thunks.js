import { singInWithGoogle } from "../../firebase/providers";
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

        if( !result.ok ) dispatch( logOut( result.errorMessage ) );

        dispatch( logIn( result ) );
    }
}