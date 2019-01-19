import React, { Component } from 'react';
import cls from './ContentBase.module.css';

export class ContentBase extends Component {
    render() {
        return (
            <div>
                <h1 className={cls.PageTitle}>{this.props.pageTitle}</h1>
            </div>
        );
    }
}

export default ContentBase;
