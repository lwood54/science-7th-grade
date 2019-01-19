import React from 'react';
import Button from '@material-ui/core/Button';
import PageList from '../../../ContentPages/PageList/PageList';
import cls from './MenuItems.module.css';
import { Link } from 'react-router-dom';

// returns an array of page objects from PageList
const pageList = PageList();

const menuItems = () => {
    const items = pageList.map(unit => {
        return (
            <Link to={unit.pageAddress}>
                <Button key={unit.unitName} className={cls.Button}>
                    {unit.unitName}
                </Button>
            </Link>
        );
    });

    return <div>{items}</div>;
};

export default menuItems;
