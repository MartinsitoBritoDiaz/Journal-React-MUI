import { Link as RouterLink } from 'react-router-dom' 
import { Google } from '@mui/icons-material'
import { Button, Grid, TextField, Typography, Link } from '@mui/material'
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks'
import { checkingAuthentication, startGoogleSignIn } from '../../store/auth/thunks'
import { useDispatch, useSelector } from 'react-redux'
import { useMemo } from 'react'


export const LoginPage = () => {
  const { status } = useSelector( state => state.auth );
  const dispatch = useDispatch();

  const formData = {
    email: 'journalApp@gmail.com',
    password: '1234567'
  }
  const { email, password, onInputChange } = useForm( formData );

  const isAuthenticating = useMemo( () => status === 'checking', [ status ]);

  const onSubmit = ( event ) => {
    event.preventDefault();
    dispatch( checkingAuthentication() );
    console.log( { email, password } );
  }

  const onGoogleSignIn = () => {
    dispatch( startGoogleSignIn() );
    console.log('OnGoogleSignIn');
  }



  return (
    <AuthLayout 
      title='Login'
    >
      <form onSubmit={ onSubmit }>
          <Grid container >
            <Grid item xs={ 12 } sx={{ mt: 2}}>
              <TextField 
                label="Email"
                type="email"
                placeholder="email@gmail.com"
                fullWidth
                name='email'
                value={ email }
                onChange={ onInputChange }
              />
            </Grid>

            <Grid item xs={ 12 } sx={{ mt: 2}}>
              <TextField 
                label="Password"
                type="password"
                placeholder="Password"
                fullWidth
                name='password'
                value={ password }
                onChange={ onInputChange }
              />
            </Grid>

            <Grid container spacing={2} sx={{mb: 2, mt: 1}}>
              <Grid item xs={ 12 } sm={ 6 }>
                <Button 
                  disabled={ isAuthenticating }
                  variant='outlined' 
                  fullWidth 
                  type='submit'>
                  Login
                </Button>
              </Grid>

              <Grid item xs={ 12 } sm={ 6 }>
                <Button 
                  disabled={ isAuthenticating }
                  variant='outlined' 
                  fullWidth 
                  onClick={ onGoogleSignIn }>
                  <Google />
                  <Typography sx={{ ml: 1}}>Google</Typography>
                </Button>
              </Grid>
            </Grid> 

            <Grid container direction='row' justifyContent='end'>
                <Link component={ RouterLink } color='inherit' to="/auth/register">
                  Create an account
                </Link>
            </Grid>
          </Grid>
        </form>
    </AuthLayout>
  )
}
 