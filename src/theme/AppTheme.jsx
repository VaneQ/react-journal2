import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'
import React from 'react'
import { blueTheme } from './blueTheme'
//import { purpleTheme } from './purpleTheme'

export const AppTheme = ({ children }) => {
  return (
        <ThemeProvider theme={ blueTheme } >
            <CssBaseline/>

            { children }
        </ThemeProvider>
  )
}
