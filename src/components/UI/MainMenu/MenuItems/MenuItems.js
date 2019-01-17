import React from 'react';
import List from '@material-ui/core/List';
import Button from '@material-ui/core/Button';
import cls from './MenuItems.module.css';

const menuItems = () => {
    const units = [
        'Unit 1.1',
        'Unit 1.2',
        'Unit 2.1',
        'Unit 2.2',
        'Unit 3.1',
        'Unit 4.1',
        'Unit 4.2',
        'Unit 5.1',
        'Unit 5.2',
        'Unit 6.1',
        'Unit 6.2'
    ];

    const items = units.map(unit => {
        return (
            <List className={cls.MenuItems}>
                <Button className={cls.Button}>{unit}</Button>
            </List>
        );
    });
    return <div>{items}</div>;
};

export default menuItems;
