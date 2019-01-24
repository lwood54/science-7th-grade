import React from 'react';

import Unit1_1Obj from '../Unit1_1Obj';
import NavigationBar from '../../../Navigation/NavigationBar/NavigationBar';

import cls from './Game1_1.module.css';

const game1_1 = props => {
    const quizletLink = Unit1_1Obj.vertMenuItems
        .map(item => {
            return item['Quizlet'];
        })
        .join('');
    const gameLink = Unit1_1Obj.vertMenuItems
        .map(item => {
            return item['Game'];
        })
        .join('');
    const homeLink = Unit1_1Obj.vertMenuItems
        .map(item => {
            return item['Home'];
        })
        .join('');
    return (
        <React.Fragment>
            <NavigationBar
                title={Unit1_1Obj.title}
                gameLink={gameLink}
                quizletLink={quizletLink}
                homeLink={homeLink}
            />
            <h1 className={cls.Title}>Game 1.1 Page</h1>
        </React.Fragment>
    );
};

export default game1_1;
