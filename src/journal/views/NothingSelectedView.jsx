import { StarOutline } from '@mui/icons-material'
import { Grid, Typography } from '@mui/material'
import React from 'react'

export const NothingSelectedView = () => {
  return (
    <Grid
    container
    spacing={0}
    direction="column"
    alignItems="center"
    justifyContent="center"
    className="animate__animated animate__fadeIn animate__faster"
    sx={{ mt: 6,minHeight: 'calc(100vh - 110px)', backgroundColor: 'secondary.main', padding: 4, borderRadius: 5 }}
    >
        <Grid 
            item xs={12} >
            <StarOutline sx={{ fontSize: 100, color:'white' }} />
        </Grid>
        <Grid 
            item xs={12} >
           <Typography color="white" variant="h5">Select or create a record </Typography>
        </Grid>

     </Grid>
  )
}
