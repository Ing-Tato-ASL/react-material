import { createTheme } from '@mui/material/styles'
import { pink, red } from '@mui/material/colors';

const theme = createTheme({
    palette: {
        primary: {
            main: pink[500]
        },
        secondary: {
            main: red[500]
        }
    }
});

export default theme;