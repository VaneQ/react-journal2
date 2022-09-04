import { DeleteOutline, SaveOutlined, UploadOutlined } from '@mui/icons-material'
import { Button, Grid, IconButton, TextField, Typography } from '@mui/material'
import React, { useEffect, useMemo } from 'react'
import { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.css'
import { useForm } from '../../hooks/useForm'
import { setActiveNote } from '../../store/journal/journalSlice'
import { startDeletingNote, startSavingNote, startUploadingFiles } from '../../store/journal/thunks'
import { ImageGallery } from '../layout/components'

export const NoteView = ({note}) => {

    const { activeNote, messageSaved, isSaving } = useSelector( state => state.journal )

    const dispatch = useDispatch();

    const { title, body, date, imageUrls, onInputChange, formState } = useForm( activeNote )

    const dateString = useMemo(() => {

        const newDate = new Date( date );
        return newDate.toUTCString();

    },[date])

    useEffect (() => {
      
        dispatch( setActiveNote(formState) )
    
    }, [formState])

    useEffect(() => {
        if( messageSaved.length > 0){
            Swal.fire( 'Done', messageSaved,'success' )
        }
    },[messageSaved])

    const fileInputRef = useRef()

    const onSaveNote = () => {
        dispatch( startSavingNote() );
    }

    const onFileInputChange = ({target}) => {
        if( target.files === 0 ) return;

         dispatch( startUploadingFiles(target.files) )
    }

    const onDelete = (() => {
        dispatch( startDeletingNote() );
    })
    

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
                { dateString }
            </Typography>
        </Grid>
        <Grid item>

            <input
                type="file" multiple
                onChange={ onFileInputChange }
                style={{ display:'none' }}
                ref={fileInputRef} 
            />

            <IconButton 
                 color="primary" 
                 disabled={ isSaving }
                 onClick={ () => fileInputRef.current.click() }
            >
                <UploadOutlined/>
            </IconButton>

            <Button disabled={ isSaving }  onClick={ onSaveNote }  color="primary" sx={{ padding:2 }} >
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
                label={ !!title ? '' : 'Title' }
                sx={{ border: "none", mb:1 }}
                name="title"
                value={title}
                onChange={ onInputChange }
            />

            <TextField 
                type="text"
                variant='filled'
                fullWidth
                multiline
                placeholder='Insert description'
                sx={{ border: "none", mb:1 }}
                minRows={4}
                name="body"
                value={body}
                onChange={ onInputChange }
            />

        </Grid>

        <Grid 
            container
            justifyContent="end"
        >
            <Button onClick={ onDelete } color="error" sx={{mt:2}}>
                <DeleteOutline />
                Delete
            </Button>

        </Grid>

        <ImageGallery images={imageUrls} />
    </Grid>
  )
}
