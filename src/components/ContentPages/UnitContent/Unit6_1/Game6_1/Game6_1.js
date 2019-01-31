import React from 'react';

import Unit6_1Obj from '../Unit6_1Obj';
import NavigationBar from '../../../Navigation/NavigationBar/NavigationBar';

import cls from '../../Game.module.css';

const game6_1 = props => {
    const quizletLink = Unit6_1Obj.vertMenuItems
        .map(item => {
            return item['Quizlet'];
        })
        .join('');
    // const gameLink = Unit6_1Obj.vertMenuItems
    //     .map(item => {
    //         return item['Game'];
    //     })
    //     .join('');
    const homeLink = Unit6_1Obj.vertMenuItems
        .map(item => {
            return item['Home'];
        })
        .join('');
    const unitMain = Unit6_1Obj.vertMenuItems
        .map(item => {
            return item['Unit Page'];
        })
        .join('');
    return (
        <React.Fragment>
            <NavigationBar
                title={Unit6_1Obj.title}
                quizletLink={quizletLink}
                homeLink={homeLink}
                unitMain={unitMain}
            />
            <h1 className={cls.Title}>Game 6.1 Page</h1>
        </React.Fragment>
    );
};

export default game6_1;
