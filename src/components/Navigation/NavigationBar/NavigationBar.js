import React, { Component } from 'react';

import NavItems from '../NavItems/NavItems';
import MainMenu from '../../UI/MainMenu/MainMenu';

export class NavigationBar extends Component {
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
                                <NavItems
                                        menuClicked={this.toggleMenuHandler}
                                        title={this.props.title}
                                        gameLink={this.props.gameLink}
                                        quizletLink={this.props.quizletLink}
                                        homeLink={this.props.homeLink}
                                        unitMain={this.props.unitMain}
                                        isHomePage={this.props.isHomePage}
                                />
                                <MainMenu
                                        openedMenu={this.state.menuIsOpen}
                                        toggleMenu={this.toggleMenuHandler}
                                />
                        </div>
                );
        }
}

export default NavigationBar;
