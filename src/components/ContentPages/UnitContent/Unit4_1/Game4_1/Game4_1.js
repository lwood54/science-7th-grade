import React from 'react';

import Unit4_1Obj from '../Unit4_1Obj';
import NavigationBar from '../../../Navigation/NavigationBar/NavigationBar';

import cls from '../../Game.module.css';

const game4_1 = props => {
    const quizletLink = Unit4_1Obj.vertMenuItems
        .map(item => {
            return item['Quizlet'];
        })
        .join('');
    // const gameLink = Unit4_1Obj.vertMenuItems
    //     .map(item => {
    //         return item['Game'];
    //     })
    //     .join('');
    const homeLink = Unit4_1Obj.vertMenuItems
        .map(item => {
            return item['Home'];
        })
        .join('');
    const unitMain = Unit4_1Obj.vertMenuItems
        .map(item => {
            return item['Unit Page'];
        })
        .join('');
    return (
        <React.Fragment>
            <NavigationBar
                title={Unit4_1Obj.title}
                quizletLink={quizletLink}
                homeLink={homeLink}
                unitMain={unitMain}
            />
            <h1 className={cls.Title}>Game 4.1 Page</h1>
        </React.Fragment>
    );
};

export default game4_1;
