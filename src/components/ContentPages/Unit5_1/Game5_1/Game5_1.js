import React from 'react';

import Unit5_1Obj from '../Unit5_1Obj';
import NavigationBar from '../../../Navigation/NavigationBar/NavigationBar';

import cls from '../../Game.module.css';

const game5_1 = props => {
    const quizletLink = Unit5_1Obj.vertMenuItems
        .map(item => {
            return item['Quizlet'];
        })
        .join('');
    // const gameLink = Unit5_1Obj.vertMenuItems
    //     .map(item => {
    //         return item['Game'];
    //     })
    //     .join('');
    const homeLink = Unit5_1Obj.vertMenuItems
        .map(item => {
            return item['Home'];
        })
        .join('');
    const unitMain = Unit5_1Obj.vertMenuItems
        .map(item => {
            return item['Unit Page'];
        })
        .join('');
    return (
        <React.Fragment>
            <NavigationBar
                title={Unit5_1Obj.title}
                quizletLink={quizletLink}
                homeLink={homeLink}
                unitMain={unitMain}
            />
            <h1 className={cls.Title}>Game 5.1 Page</h1>
        </React.Fragment>
    );
};

export default game5_1;
