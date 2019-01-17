import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import MenuItems from './MenuItems/MenuItems';

const MainMenu = props => {
    return (
        <div>
            <Drawer open={props.openedMenu} onClose={props.toggleMenu}>
                <div
                    tabIndex={0}
                    role="button"
                    onClick={props.toggleMenu}
                    onKeyDown={props.toggleMenu}
                >
                    <MenuItems />
                </div>
            </Drawer>
        </div>
    );
};

export default MainMenu;
