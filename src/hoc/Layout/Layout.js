import React, { Component } from 'react';

class Layout extends Component {
    render() {
        return (
            <div>
                <div style={{ marginTop: '70px' }} {...this.props}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Layout;
