import React from 'react';
import Paper from '@material-ui/core/Paper';

import Unit2_2Obj from './Unit2_2Obj';
import NavigationBar from '../../Navigation/NavigationBar/NavigationBar';
import cls from '../UnitPage.module.css';

const unit2_2 = props => {
    // search for keys this way instead of hard coding array index because I may change that in the future.
    const quizletLink = Unit2_2Obj.vertMenuItems
        .map(item => {
            return item['Quizlet'];
        })
        .join('');
    const gameLink = Unit2_2Obj.vertMenuItems
        .map(item => {
            return item['Game'];
        })
        .join('');
    const homeLink = Unit2_2Obj.vertMenuItems
        .map(item => {
            return item['Home'];
        })
        .join('');
    return (
        <React.Fragment>
            <NavigationBar
                title={Unit2_2Obj.title}
                gameLink={gameLink}
                quizletLink={quizletLink}
                homeLink={homeLink}
                TEKSArray={Unit2_2Obj.TEKS}
            />
            <Paper className={cls.ContentContainer}>
                <h1>{Unit2_2Obj.title}</h1>
                <p>It's probably better to just customize each page</p>
            </Paper>
        </React.Fragment>
    );
};

export default unit2_2;
