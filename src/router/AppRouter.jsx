import React, { useEffect } from 'react'
import JournalApp from '../JournalApp'
import { JournalRoutes } from '../journal/routes/JournalRoutes'
import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { Navigate, Route, Routes } from 'react-router-dom'
import { CheckingAuth } from '../ui'
import { useDispatch, useSelector } from 'react-redux'
import { onAuthStateChanged } from 'firebase/auth'
import { FirebaseApp, FirebaseAuth } from '../firebase/config'
import { logIn, logOut } from '../store/auth/authSlice'

export const AppRouter = () => {
  const { status } = useSelector( state => state.auth );
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged( FirebaseAuth, async( user ) => {
      if( !user ) return dispatch( logOut() );

      const { uid, email, displayName, photoURL } = user;

      dispatch( logIn( { uid, email, displayName, photoURL } ));
    }, []);
  }, [])

  

  if( status === 'checking'){
    return <CheckingAuth />
  }

  return (
    <Routes>
        {
          (status === 'authenticated') 
          ? <Route path="/*" element={ <JournalRoutes /> } />
          : <Route path="/auth/*" element={ <AuthRoutes /> } />
        }

        <Route path="/*" element={ <Navigate to='/auth/login' /> }/>
    </Routes>
  )
}
