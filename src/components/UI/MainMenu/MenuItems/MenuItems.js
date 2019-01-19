import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import PageList from '../../../ContentPages/PageList/PageList';
import cls from './MenuItems.module.css';
import { Link } from 'react-router-dom';

// returns an array of page objects from PageList
const pageList = PageList();
const styles = theme => ({
    button: {
        color: '#008ba3'
    },
    somethingElse: {
        '&:hover': {
            color: '#73e8ff',
            backgroundColor: '#29b6f6'
        }
    }
});

const menuItems = props => {
    const { classes } = props;
    const items = pageList.map(unit => {
        return (
            <Link
                to={unit.pageAddress}
                className={cls.Link}
                key={unit.unitName} // REMINDER: key goes on the outside most element in array rendering
            >
                <Button
                    // can join multiple classes in an array and convert to string
                    className={[
                        cls.Button,
                        classes.button,
                        classes.somethingElse
                    ].join(' ')}
                >
                    {unit.unitName}
                </Button>
            </Link>
        );
    });

    return <div>{items}</div>;
};

export default withStyles(styles)(menuItems);
