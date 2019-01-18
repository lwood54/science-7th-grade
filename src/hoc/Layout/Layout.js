import React, { Component } from "react";
import NavItems from "../../components/Navigation/NavItems/NavItems";
import MainMenu from "../../components/UI/MainMenu/MainMenu";

import cls from "./Layout.module.css";

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
    console.log(this.props.title);
    return (
      <div>
        <NavItems menuClicked={this.toggleMenuHandler} />
        <MainMenu
          openedMenu={this.state.menuIsOpen}
          toggleMenu={this.toggleMenuHandler}
        />
        <h1 className={cls.SectionHeading}>7th Grade Science</h1>
        {this.props.children}
      </div>
    );
  }
}

export default Layout;
