import React from 'react';

import Unit1_2Obj from '../Unit1_2Obj';
import NavigationBar from '../../../../Navigation/NavigationBar/NavigationBar';

import cls from '../../Game.module.css';

const game1_2 = props => {
        const quizletLink = Unit1_2Obj.vertMenuItems
                .map(item => {
                        return item['Quizlet'];
                })
                .join('');
        // const gameLink = Unit1_2Obj.vertMenuItems
        //     .map(item => {
        //         return item['Game'];
        //     })
        //     .join('');
        const homeLink = Unit1_2Obj.vertMenuItems
                .map(item => {
                        return item['Home'];
                })
                .join('');
        const unitMain = Unit1_2Obj.vertMenuItems
                .map(item => {
                        return item['Unit Page'];
                })
                .join('');
        return (
                <React.Fragment>
                        <NavigationBar
                                title={Unit1_2Obj.title}
                                quizletLink={quizletLink}
                                homeLink={homeLink}
                                unitMain={unitMain}
                        />
                        <h1 className={cls.Title}>Game 1.2 Page</h1>
                </React.Fragment>
        );
};

export default game1_2;
