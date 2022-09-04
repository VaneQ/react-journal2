import { Box } from '@mui/material'
import React from 'react'
import { Navbar, SideBar } from './components';

const drawerWith = 240;

export const JournalLayout = ({ children }) => {
  return (
    <Box
        sx={{display:'flex'}}
        className="animate__animated animate__fadeIn animate__faster"
    >

        <Navbar drawerWith={ drawerWith} />

        <SideBar drawerWith={ drawerWith } />

        <Box 
            component='main'
            sx={{ flexGrow:1, p:4}}
        >
            {/**toolbar */}

            { children }

        </Box>

    </Box>
  )
}
