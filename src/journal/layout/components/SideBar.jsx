import { TurnedInNot } from '@mui/icons-material'
import { Grid, Drawer, Box, Toolbar, Typography, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

export const SideBar = ({ drawerWith = 240 }) => {

    const { displayName  } = useSelector( state => state.auth )
  
    return (
    <Box
        component="nav"
        sx={{ width: {sm: drawerWith }, flexShrink:{ sm:0} }}
    >
        <Drawer
            variant="permanent"
            open
            sx={{
                display: {xs: 'block'},
                '& .MuiDrawer-paper': { boxSizing: "border-box", width: drawerWith}
            }}
        >


            <Toolbar>
                <Typography
                    variant="h6" 
                    noWrap
                    component="div">
                    { displayName }
                </Typography>
            </Toolbar>
            <Divider/>

            <List>
                {
                    ["tomo1","tomo2","tomo3","tomo4"].map( text => (
                        <ListItem key={text} disablePadding >
                            <ListItemButton>
                                <ListItemIcon>
                                    <TurnedInNot/>
                                </ListItemIcon>
                                <Grid container>
                                    <ListItemText primary={text}/>
                                    <ListItemText secondary={ 'lorem impson asdasdasdsadasdas' }/>
                                </Grid>
                            </ListItemButton>
                        </ListItem>
                    ))
                }
            </List>

        </Drawer>

    </Box>
  )
}
