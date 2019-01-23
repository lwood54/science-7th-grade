import React, { Component } from 'react';

import cls from './Layout.module.css';

class Layout extends Component {
    render() {
        return (
            <div>
                <div className={cls.CardContainer} {...this.props}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Layout;
