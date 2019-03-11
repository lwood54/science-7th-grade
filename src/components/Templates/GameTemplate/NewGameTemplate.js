// use React's Hooks to remake GameTemplate with a functional component
// tryout useRef()
// try React.lazy()
// try to import cards and targets as separate components again since
// we can use hooks like useEffect to update the DOM while change occurs.
// useEffect to monitor drag and drop? changes in DOM?
import React, { useState, useEffect, useRef } from 'react';

import NavigationBar from '../../Navigation/NavigationBar/NavigationBar';
import Targets from './Targets';
import Cards from './Cards';
import cls from './GameTemplate.module.css';

import GameStatusContext from './gameStatus-context';

const NewGameTemplate = props => {
        const navHome = props.vertMenuItems[0]['Home'];
        const navUnit = props.vertMenuItems[1]['Unit Page'];
        const navGame = props.vertMenuItems[2]['Game'];
        const navQuizlet = props.vertMenuItems[3]['Quizlet'];
        const [isRoundOver, setIsRoundOver] = useState(false);
        const handleRoundOver = () => {
                console.log('handleRoundOver inside NewGameTemplate is TRIGGERED');
                setIsRoundOver(true);
        };
        return (
                <div style={{ width: '100%' }}>
                        <NavigationBar
                                title={props.title}
                                quizletLink={navQuizlet}
                                homeLink={navHome}
                                unitMain={navUnit}
                        />
                        <GameStatusContext.Provider
                                value={{ roundStatus: isRoundOver, handleRoundOver: handleRoundOver }}
                        >
                                <div className={cls.NewGameContainer}>
                                        <h1 className={cls.NewTitle}>New Game Template</h1>
                                        <Targets game={props.game} handleRoundOver={handleRoundOver} />
                                        <Cards game={props.game} />
                                        <h3>Round is over: {isRoundOver + ''}</h3>
                                </div>
                        </GameStatusContext.Provider>
                </div>
        );
};

export default NewGameTemplate;
