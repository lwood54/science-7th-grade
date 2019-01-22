import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import cls from './NavItems.module.css';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';

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
                <div style={{ width: '100%', margin: 'auto' }}>
                    {props.title}
                </div>
                {props.gameLink ? <Link to={props.gameLink}>Game</Link> : null}
                {props.quizletLink ? (
                    <a href={props.quizletLink}>Quizlet</a>
                ) : null}
            </Toolbar>
        </AppBar>
    );
};

export default NavItems;
