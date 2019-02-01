import React from 'react';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';

import NotesSevenTenC from '../../TEKSContent/TEKS7_10C/Notes7_10C';

import Unit4_2Obj from './Unit4_2Obj';
import NavigationBar from '../../../Navigation/NavigationBar/NavigationBar';

import cls from '../UnitPage.module.css';

const unit4_2 = props => {
        // search for keys this way instead of hard coding array index because I may change that in the future.
        const quizletLink = Unit4_2Obj.vertMenuItems
                .map(item => {
                        return item['Quizlet'];
                })
                .join('');
        const gameLink = Unit4_2Obj.vertMenuItems
                .map(item => {
                        return item['Game'];
                })
                .join('');
        const homeLink = Unit4_2Obj.vertMenuItems
                .map(item => {
                        return item['Home'];
                })
                .join('');
        return (
                <div>
                        <NavigationBar
                                title={Unit4_2Obj.title}
                                gameLink={gameLink}
                                quizletLink={quizletLink}
                                homeLink={homeLink}
                                TEKSArray={Unit4_2Obj.TEKS}
                        />
                        <Paper className={cls.ContentContainer}>
                                <h1 className={cls.TEKSTitle}>
                                        {Unit4_2Obj.TEKS[1].teksNum}
                                </h1>
                                <Link
                                        to={Unit4_2Obj.TEKS[0].teksQuiz}
                                        className={cls.TEKS}
                                >
                                        <p style={{ marginTop: '0' }}>
                                                {Unit4_2Obj.TEKS[1].teksContent}
                                        </p>
                                </Link>
                                <h2 className={cls.Heading}>
                                        Catastrophic Events
                                </h2>
                        </Paper>
                        <NotesSevenTenC />
                </div>
        );
};

export default unit4_2;
