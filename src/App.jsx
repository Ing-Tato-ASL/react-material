import React from 'react';
import { Button, ThemeProvider } from '@mui/material';
import theme from './temaConfig'
import Navbar from './components/Navbar';
import Listas from './components/Listas';
import Oculto from './components/Oculto';


function App() {
    return (
        <ThemeProvider theme={theme}>
            <Navbar />
            <Button color='primary' variant='contained'>
                Botón 1
            </Button>
            <Button color='secondary' variant='contained'>
                Botón 2
            </Button>
            <Listas />
            <Oculto />
        </ThemeProvider>
    );
}

export default App;
