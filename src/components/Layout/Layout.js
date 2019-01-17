import React, { Component } from 'react';
import NavItems from '../Navigation/NavItems/NavItems';
import MainMenu from '../UI/MainMenu/MainMenu';

import cls from './Layout.module.css';

class Layout extends Component {
    state = {
        menuIsOpen: false
    };

    toggleMenuHandler = () => {
        const currentMenuOpen = this.state.menuIsOpen;
        this.setState({
            menuIsOpen: !currentMenuOpen
        });
    };

    render() {
        return (
            <div>
                <NavItems menuClicked={this.toggleMenuHandler} />
                <MainMenu
                    openedMenu={this.state.menuIsOpen}
                    toggleMenu={this.toggleMenuHandler}
                />
                <h1 className={cls.SectionHeading}>7th Grade Science</h1>
            </div>
        );
    }
}

export default Layout;
