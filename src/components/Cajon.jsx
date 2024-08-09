import React from 'react';
import { makeStyles } from '@mui/styles';
import { Divider, Drawer } from '@mui/material';
import Listas from './Listas';

const drawerWidth = 240;

const estilos = makeStyles(theme => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0
    },
    drawerPaper: {
        width: drawerWidth
    },
    toolbar: theme.mixins.toolbar
}));

const Cajon = () => {
    const classes = estilos();

    return (
        <Drawer
            className={classes.drawer}
            variant='permanent'
            classes={{
                paper: classes.drawerPaper
            }}
            anchor='left'>
            <div className={classes.toolbar} />
            <Divider />
            <Listas />
        </Drawer>
    )
}

export default Cajon;
