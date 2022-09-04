import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        isSaving: false,
        messageSaved: '',
        notes: [],
        //activeNote: null,
        activeNote: {
            id:'123',
            title: '',
            body:'',
            date:1234,
            imageUrls:[]
        }
    },
    reducers: {
        addNewEmptyNote: (state,  action ) => {
            state.notes.push( action.payload );
            state.isSaving = false;
        },

        setActiveNote: (state, action ) => {
            state.activeNote = action.payload;
            state.messageSaved = '';
        },

        setNotes: (state, action) => {
            state.notes = action.payload;
        },
        setSaving: (state, action) => {
            state.isSaving = true;
            state.messageSaved = '';
        },

        noteUpdated:(state,action) => {
            state.isSaving = false;
            state.notes = state.notes.map( note => {
               if(note.id === action.payload.id){
                    return action.payload;
               } 
                return note;
            })

            state.messageSaved = `${ action.payload.title}, updated`
        },
        deleteNoteById:(state,action) => {
            state.activeNote = null;
            state.notes = state.notes.filter( note => {
                if(note.id !== action.payload ) return note;
            })
        },
        savingNewNote: (state) => {
            state.isSaving = true;
        },
        setPhotosToActive: (state, action) => {
            state.activeNote.imageUrls = [ ...state.activeNote.imageUrls, ...action.payload];
            state.isSaving = false;
        },
        clearNotesLogout: (state,action) => {
            state.isSaving = false;
            state.messageSaved = '';
            state.notes = [];
            state.activeNote = null;
        }
    }
});

export const { 
        addNewEmptyNote, 
        setActiveNote, 
        setNotes, 
        setSaving,
        updateNote,
        deleteNoteById,
        savingNewNote,
        noteUpdated,
        setPhotosToActive,
        clearNotesLogout  } = journalSlice.actions;