import React from 'react';

import Unit3_1Obj from '../Unit3_1Obj';
import NavigationBar from '../../../../Navigation/NavigationBar/NavigationBar';

import cls from '../../Game.module.css';

const game3_1 = props => {
        const quizletLink = Unit3_1Obj.vertMenuItems
                .map(item => {
                        return item['Quizlet'];
                })
                .join('');
        // const gameLink = Unit3_1Obj.vertMenuItems
        //     .map(item => {
        //         return item['Game'];
        //     })
        //     .join('');
        const homeLink = Unit3_1Obj.vertMenuItems
                .map(item => {
                        return item['Home'];
                })
                .join('');
        const unitMain = Unit3_1Obj.vertMenuItems
                .map(item => {
                        return item['Unit Page'];
                })
                .join('');
        return (
                <React.Fragment>
                        <NavigationBar
                                title={Unit3_1Obj.title}
                                quizletLink={quizletLink}
                                homeLink={homeLink}
                                unitMain={unitMain}
                        />
                        <h1 className={cls.Title}>Game 3.1 Page</h1>
                </React.Fragment>
        );
};

export default game3_1;
