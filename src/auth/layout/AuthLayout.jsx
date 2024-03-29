import { Button, Grid, TextField, Typography, Link } from '@mui/material'

export const AuthLayout = ({ children, title = ''}) => {
  return (
    <Grid 
      container
      spacing={0}
      direction="column"
      alignItems="center"
      textAlign="center"
      justifyContent="center"
      sx={{minHeight: '100vh', backgroundColor: 'primary.main', padding: 4}}
    >
        <Grid
            item
            className='box-sahdow'
            xs={ 3 }
            sx={{ 
                backgroundColor: 'white', 
                padding: 3, 
                borderRadius: 2,
                width: { sm: 450, md: 700 }
            }}
        >
            <Typography variant='h4' sx={{mb: 1, fontWeight: 'bold'}}>{ title }</Typography>

            { children }
        </Grid>

    </Grid>
  )
}
