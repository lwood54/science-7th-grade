import React from 'react';

import Unit2_2Obj from '../Unit2_2Obj';
import NavigationBar from '../../../Navigation/NavigationBar/NavigationBar';

import cls from '../../Game.module.css';

const game2_2 = props => {
    const quizletLink = Unit2_2Obj.vertMenuItems
        .map(item => {
            return item['Quizlet'];
        })
        .join('');
    // const gameLink = Unit2_2Obj.vertMenuItems
    //     .map(item => {
    //         return item['Game'];
    //     })
    //     .join('');
    const homeLink = Unit2_2Obj.vertMenuItems
        .map(item => {
            return item['Home'];
        })
        .join('');
    const unitMain = Unit2_2Obj.vertMenuItems
        .map(item => {
            return item['Unit Page'];
        })
        .join('');
    return (
        <React.Fragment>
            <NavigationBar
                title={Unit2_2Obj.title}
                quizletLink={quizletLink}
                homeLink={homeLink}
                unitMain={unitMain}
            />
            <h1 className={cls.Title}>Game 2.2 Page</h1>
        </React.Fragment>
    );
};

export default game2_2;
