import { Link as RouterLink } from 'react-router-dom' 
import { AppRegistration, Google, Login } from '@mui/icons-material'
import { Button, Grid, TextField, Typography, Link } from '@mui/material'
import { AuthLayout } from '../layout/AuthLayout'

export const RegisterPage = () => {
  return (
    <AuthLayout 
      title='Register'
    >
      <form>
          <Grid container >
            <Grid item xs={ 12 } sx={{ mt: 2}}>
              <TextField 
                label="Full Name"
                type="text"
                placeholder="Martinsito Brito"
                fullWidth

              />
            </Grid>

            <Grid item xs={ 12 } sx={{ mt: 2}}>
              <TextField 
                label="Email"
                type="email"
                placeholder="email@gmail.com"
                fullWidth

              />
            </Grid>

            <Grid item xs={ 12 } sx={{ mt: 2}}>
              <TextField 
                label="Password"
                type="password"
                placeholder="Password"
                fullWidth
              />
            </Grid>
            
            <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <Button 
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