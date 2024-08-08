import React from 'react';
import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Menu } from '@mui/icons-material';

const useStyles = makeStyles(theme => ({
	offset: theme.mixins.toolbar,
	menuButton: {
		marginRight: theme.spacing(2)
	},
	title: {
		flexGrow: 1
	}
}));

const Navbar = () => {
  	const classes = useStyles();

  	return (
    	<div>
      		<AppBar>
        		<Toolbar>
					<IconButton color='inherit' aria-label='menu' className={classes.menuButton}>
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
      		<div className={classes.offset}></div>
    	</div>
  	)
};

export default Navbar;