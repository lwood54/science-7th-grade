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

// export const GameStatusContext = React.createContext({ roundStats: false, handleRoundOver: () => {} });

const NewGameTemplate = props => {
        const navHome = props.vertMenuItems[0]['Home'];
        const navUnit = props.vertMenuItems[1]['Unit Page'];
        const navGame = props.vertMenuItems[2]['Game'];
        const navQuizlet = props.vertMenuItems[3]['Quizlet'];
        const [isRoundOver, setIsRoundOver] = useState(false);
        const [correct, setCorrect] = useState(0);
        const [incorrect, setIncorrect] = useState(0);
        const handleRoundOver = () => {
                console.log('handleRoundOver inside NewGameTemplate is TRIGGERED');
                setIsRoundOver(true);
        };
        const handleCorrect = () => {
                console.log('handleCorrect() RAN');
                setCorrect(correct + 1);
        };
        const handleIncorrect = () => {
                console.log('handleIncorrect() RAN');
                setIncorrect(incorrect + 1);
        };
        const handleDragOver = e => {
                e.preventDefault();
        };
        const [targetID, setTargetID] = useState(null);
        const [dragID, setDragID] = useState(null);
        const handleDrop = e => {
                setTargetID(e.target.id);
                console.log('target: ', e.target.id);
                setDragID(e.dataTransfer.getData('text'));
                console.log('dragItem: ', e.dataTransfer.getData('text'));
        };
        useEffect(() => {
                if (targetID && dragID) {
                        document.getElementById(targetID).appendChild(document.getElementById(dragID));
                        return () => {
                                setDragID(null);
                                setTargetID(null);
                        };
                }
        }, [targetID, dragID]);
        return (
                <div style={{ width: '100%' }}>
                        <NavigationBar
                                title={props.title}
                                quizletLink={navQuizlet}
                                homeLink={navHome}
                                unitMain={navUnit}
                        />
                        <div className={cls.NewGameContainer}>
                                <h1 className={cls.NewTitle}>New Game Template</h1>
                                <Targets {...props} handleDragOver={handleDragOver} handleDrop={handleDrop} />
                                <Cards game={props.game} />
                                <div>
                                        <h3>Correct</h3>
                                        <div className={cls.CorrectScore}>{correct}</div>
                                        <h3>Incorrect</h3>
                                        <div className={cls.IncorrectScore}>{incorrect}</div>
                                </div>
                                {isRoundOver ? <h3>ROUND OVER!</h3> : <h3>KEEP GOING!</h3>}
                        </div>
                </div>
        );
};

export default NewGameTemplate;
