import { SaveOutlined } from '@mui/icons-material'
import { Button, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import { ImageGallery } from '../layout/components'

export const NoteView = () => {
  return (
    <Grid 
        container 
        direction="row"
        justifyContent="space-between"
        className="animate__animated animate__fadeIn animate__faster"
        sx={{ mb:1, mt: 5 }}
    >
        <Grid item>
            <Typography fontSize={ 39 } fontWeight="light">
                10 de Agosto de 1995
            </Typography>
        </Grid>
        <Grid item>
            <Button color="primary" sx={{ padding:2 }} >
                <SaveOutlined sx={{ fontSize: 30, mr: 1}} />
                    Save
            </Button>
        </Grid>

        <Grid 
            container
        >
            <TextField 
                type="text"
                variant='filled'
                fullWidth
                placeholder='New entry'
                label="Title"
                sx={{ border: "none", mb:1 }}
            />

            <TextField 
                type="text"
                variant='filled'
                fullWidth
                multiline
                placeholder='Insert description'
                sx={{ border: "none", mb:1 }}
                minRows={4}
            />

        </Grid>

        <ImageGallery/>
    </Grid>
  )
}
