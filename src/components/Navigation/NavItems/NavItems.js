import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import cls from './NavItems.module.css';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';

// NavItems contains the AppBar which is the parent to
// the IconButton, which when clicked calls the 'menuClicked' function being passed
// the 'menuClicked' function would  call the toggleMenuHandler in
// the Layout.js component
const NavItems = props => {
    return (
        <AppBar position="fixed" color="primary" className={cls.NavBar}>
            <Toolbar>
                <IconButton
                    className={cls.IconButton}
                    color="inherit"
                    aria-label="Menu"
                    onClick={props.menuClicked}
                >
                    <MenuIcon />
                </IconButton>
                <h3 style={{ width: '100%', margin: 'auto' }}>
                    Mr. Wood's Science Class
                </h3>
            </Toolbar>
        </AppBar>
    );
};

export default NavItems;
