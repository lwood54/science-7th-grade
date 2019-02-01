import React from 'react';
import Paper from '@material-ui/core/Paper';

import Unit1_2Obj from './Unit1_2Obj';
import NavigationBar from '../../../Navigation/NavigationBar/NavigationBar';
import cls from './Unit1_2.module.css';

const unit1_2 = props => {
        // search for keys this way instead of hard coding array index because I may change that in the future.
        const quizletLink = Unit1_2Obj.vertMenuItems
                .map(item => {
                        return item['Quizlet'];
                })
                .join('');
        const gameLink = Unit1_2Obj.vertMenuItems
                .map(item => {
                        return item['Game'];
                })
                .join('');
        const homeLink = Unit1_2Obj.vertMenuItems
                .map(item => {
                        return item['Home'];
                })
                .join('');
        return (
                <React.Fragment>
                        <NavigationBar
                                title={Unit1_2Obj.title}
                                gameLink={gameLink}
                                quizletLink={quizletLink}
                                homeLink={homeLink}
                                TEKSArray={Unit1_2Obj.TEKS}
                        />
                        <Paper className={cls.ContentContainer}>
                                <h1>{Unit1_2Obj.title}</h1>
                                <p>
                                        It's probably better to just customize
                                        each page
                                </p>
                        </Paper>
                </React.Fragment>
        );
};

export default unit1_2;
