import React from 'react';
import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Menu } from '@mui/icons-material';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
	menuButton: {
		marginRight: theme.spacing(2)
	},
	title: {
		flexGrow: 1
	},
	appBar: {
		width: `calc(100% - ${drawerWidth}px)!important`,
		marginLeft: drawerWidth
	}
}));

const Navbar = () => {
  	const classes = useStyles();

  	return (
      	<AppBar className={classes.appBar}>
        	<Toolbar>
				<IconButton
					color='inherit'
					aria-label='menu'
					className={classes.menuButton}>
					<Menu />
				</IconButton>
        		<Typography variant='h6' className={classes.title}>
        			Bluuweb
        		</Typography>
				<Button variant='text' color='inherit'>
					Login
				</Button>
        	</Toolbar>
      	</AppBar>
  	)
};

export default Navbar;