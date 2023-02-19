import { Link as RouterLink } from 'react-router-dom' 
import { AppRegistration, Google, Login } from '@mui/icons-material'
import { Button, Grid, TextField, Typography, Link } from '@mui/material'
import { AuthLayout } from '../layout/AuthLayout'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from '../../hooks'

export const RegisterPage = () => {
  const { status } = useSelector( state => state.auth );
  const dispatch = useDispatch();

  const formData = {
    displayName: 'Martinsito Brito',
    email: 'journalApp@gmail.com',
    password: '1234567'
  }

  const formValidations = {
    email: [ (value) => value.includes('@'), 'Email must have the @ symbol'],
    password: [ (value) => value.length >= 6, 'Password must have at least 6 characters'],
    displayName: [ (value) => value.length >= 1, 'Name is required'],
  }

  const { displayName, displayNameValid, email, emailValid, password, passwordValid, onInputChange, formState, isFormValid } = useForm( formData );
  
  const onSubmit = ( event ) => {
    event.preventDefault();
    console.log( formState );
  }

  return (
    <AuthLayout 
      title='Register'
    >
      <form onSubmit={ onSubmit }>
          <Grid container >
            <Grid item xs={ 12 } sx={{ mt: 2}}>
              <TextField 
                label="Full Name"
                type="text"
                placeholder="Martinsito Brito"
                fullWidth
                name='displayName'
                value={ displayName }
                onChange={ onInputChange }
              />
            </Grid>

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
            
            <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <Button 
                type='submit'
                variant='contained' 
                fullWidth
              >
                <AppRegistration />
                <Typography sx={{ ml: 1 }}>Create Account</Typography>

              </Button>

            </Grid>

            <Grid container direction='row' justifyContent='end' sx={{ mt: 2 }}>
              <Typography sx={{ mr: 1}}>Do you have an account?</Typography>
              <Link component={ RouterLink } color='inherit' to="/auth/login">Login</Link>
            </Grid>
          </Grid>
        </form>
    </AuthLayout>
  )
}
