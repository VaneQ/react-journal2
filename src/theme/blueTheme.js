import { createTheme } from "@mui/material";
import { red } from '@mui/material/colors'

export const blueTheme = createTheme({
     palette: {
        primary: {
            main: '#0277BD'
        },
        secondary: {
            main: '#82B1FF'
        },
        error:{
            main: red.A400
        }
     }
})