import { loginWithEmailPassword, logoutFirebase, signInWithGoogle, signInWithUserPassword } from "../../firebase/providers"
import { clearNotesLogout } from "../journal/journalSlice"
import { checkingCredentials, login, logout } from "./authSlice"


export const checkingAuthentication = ( email, password ) => {
    return async( dispatch ) => {

        dispatch(checkingCredentials())
    }
}

export const startGoogleSign = () => {
    return async( dispatch ) => {

        const result = await signInWithGoogle();

        if( !result.ok ) return dispatch( logout( result.errorMessage ) )

        dispatch( login( result ) )
    }
}

export const startCreatingUserPassword = ({ email, password, displayName}) => {
    return async(dispatch) => {

        dispatch(checkingCredentials())

        const { ok, uid, photoURL, errorMessage } = await signInWithUserPassword({ email, password, displayName });

        if( !ok ) return dispatch(logout({errorMessage}));

        dispatch(login({ uid, displayName, email, photoURL }));

    }
}

export const startLoginWithEmailPassword = ({ email, password }) => {
    return async(dispatch) => {

        const { ok, uid, photoUrl, errorMessage, displayName } = await loginWithEmailPassword({email, password});

        if( !ok ) return dispatch(logout({errorMessage}))

        dispatch(login({uid, displayName, email, photoUrl}));
    }
}

export const startLogout = () => {
    return async(dispatch) => {

        await logoutFirebase();
        dispatch( clearNotesLogout() );
        dispatch( logout({ errorMessage:null }) ); 

    }
}