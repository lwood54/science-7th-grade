// use React's Hooks to remake GameTemplate with a functional component
// tryout useRef()
// try React.lazy()
// try to import cards and targets as separate components again since
// we can use hooks like useEffect to update the DOM while change occurs.
// useEffect to monitor drag and drop? changes in DOM?
import React, { useState } from 'react';

import cls from './GameTemplate.module.css';

const NewGameTemplate = () => {
        const [correctAnswers, setCorrectAnswers] = useState(0); // initial state of 0 is only used during first render
        const [incorrectAnswers, setIncorrectAnswers] = useState(0);
        const [targets, setTargets] = useState([]);
        const [cards, setCards] = useState([]);
        const [isRoundOver, setIsRoundOver] = useState(false);
        const [dragClickId, setDragClickId] = useState(null);

        const handleCorrect = () => {
                setCorrectAnswers(correctAnswers + 1);
        };
        const handleIncorrect = () => {
                setIncorrectAnswers(incorrectAnswers + 1);
        };

        return (
                <div>
                        <h1 className={cls.Title}>New Game Template</h1>
                        <div className={cls.IncorrectScore}>
                                <h2>Incorrect</h2>
                                <h4 className={cls.scoreText}>{incorrectAnswers}</h4>
                        </div>
                        <div className={cls.CorrectScore}>
                                <h2>Correct</h2>
                                <h4 className={cls.scoreText}>{correctAnswers}</h4>
                        </div>
                        <button onClick={handleCorrect}>Increase Correct Score</button>
                        <button onClick={handleIncorrect}>Increase Incorrect Score</button>
                </div>
        );
};

export default NewGameTemplate;
