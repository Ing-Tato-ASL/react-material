import React from 'react';
import { Button, Typography, useMediaQuery } from '@mui/material'
import { useTheme } from '@emotion/react';

const Oculto = (props) => {
    const theme = useTheme();
    const isXs = useMediaQuery(theme.breakpoints.only('xs'));
    const isSm = useMediaQuery(theme.breakpoints.only('sm'));
    const isMd = useMediaQuery(theme.breakpoints.only('md'));
    const isLg = useMediaQuery(theme.breakpoints.only('lg'));

    return (
        <div>
            <Typography variant='h6' color='initial'>
                Ancho: 
                {isXs && " Extra Small Screen"}
                {isSm && " Small Screen"}
                {isMd && " Medium Screen"}
                {isLg && " Large Screen"}
            </Typography>
            {
                !isXs && <Button variant='contained' color='primary'>xs</Button>
            }
        </div>
    )
}

export default Oculto;
