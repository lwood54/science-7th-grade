// use React's Hooks to remake GameTemplate with a functional component
// tryout useRef()
// try React.lazy()
// try to import cards and targets as separate components again since
// we can use hooks like useEffect to update the DOM while change occurs.
// useEffect to monitor drag and drop? changes in DOM?
import React, { useState, useEffect, useRef } from 'react';

import Targets from './Targets';
import Cards from './Cards';
import cls from './GameTemplate.module.css';

const NewGameTemplate = props => {
        const [correct, setCorrect] = useState(0);
        const handleCorrect = () => {
                console.log('is correct triggering?');
                setCorrect(correct + 1);
        };
        const [incorrect, setIncorrect] = useState(0);
        const handleIncorrect = () => {
                console.log('is incorrect triggering?');
                setIncorrect(incorrect + 1);
        };
        return (
                <div className={cls.NewGameContainer}>
                        <h1 className={cls.NewTitle}>New Game Template</h1>
                        <Targets
                                game={props.game}
                                handleCorrect={handleCorrect}
                                handleIncorrect={handleIncorrect}
                        />
                        <Cards game={props.game} />
                        <button onClick={handleCorrect}>CORRECT</button>
                        <button onClick={handleIncorrect}>INCORRECT</button>
                        <div className={cls.CorrectScore}>{correct}</div>
                        <div className={cls.IncorrectScore}>{incorrect}</div>
                </div>
        );
};

export default NewGameTemplate;
