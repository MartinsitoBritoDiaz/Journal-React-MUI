import { StarOutline } from '@mui/icons-material'
import { Grid, Typography } from '@mui/material'
import React from 'react'

export const NothingSelectedView = () => {
  return (
    <Grid 
    
      className="animate__animated animate__fadeIn animate__faster"
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{minHeight: 'calc(100vh - 110px)', backgroundColor: 'primary.main', borderRadius: 5}}
    >
        <Grid item>
            <StarOutline sx={{ fontSize: 100, color: 'white' }} />
        </Grid>

        <Grid item >
            <Typography color='white' variant='h5'>Select or create a new entry </Typography>
        </Grid>
    </Grid>
  )
}
