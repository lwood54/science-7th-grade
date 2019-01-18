import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import MenuItems from './MenuItems/MenuItems';
import cls from './MainMenu.module.css';

const MainMenu = props => {
    return (
        <div>
            <Drawer open={props.openedMenu} onClose={props.toggleMenu}>
                <div
                    onClick={props.toggleMenu}
                    onKeyDown={props.toggleMenu}
                    className={cls.Drawer}
                >
                    <MenuItems />
                </div>
            </Drawer>
        </div>
    );
};

export default MainMenu;
