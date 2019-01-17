import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import cls from './NavItems.module.css';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const NavItems = props => {
    return (
        <AppBar position="fixed" color="primary" className={cls.NavBar}>
            <IconButton
                className={cls.IconButton}
                color="inherit"
                aria-label="Menu"
            >
                <MenuIcon onClick={props.menuClicked} />
            </IconButton>
        </AppBar>
    );
};

export default NavItems;
