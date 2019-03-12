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
        const targetsRef = useRef();
        const cardsRef = useRef();
        const [cardToAppend, setCardToAppend] = useState(null);
        // identify card to append, make a copy of it, append to target, remove from cardsArray
        const [isRoundOver, setIsRoundOver] = useState(false);
        const [correct, setCorrect] = useState(0);
        const [incorrect, setIncorrect] = useState(0);
        const checkRoundStatus = () => {
                if (correct === 3) {
                        setIsRoundOver(true);
                }
        };
        const handleCorrect = () => {
                console.log('handleCorrect() RAN');
                setCorrect(correct + 1);
        };
        const handleIncorrect = () => {
                console.log('handleIncorrect() RAN');
                setIncorrect(incorrect + 1);
        };
        useEffect(() => {
                checkRoundStatus();
        }, [correct]);
        const handleDragOver = e => {
                e.preventDefault();
        };

        const getTargetEl = evTargetID => {
                // take in event target ID and use it to find and return targetRef
                let targetChildren = targetsRef.current.children;
                for (let i = 0; i < 5; i++) {
                        for (let k = 1; k < 4; k++) {
                                let targetEl = targetChildren[i].children[k];
                                if (evTargetID === targetEl.id) {
                                        return targetEl;
                                }
                        }
                }
        };

        const getCardEl = evCardID => {
                // take in event card ID and use it to find and return cardRef
                let cardChildren = cardsRef.current.children;
                for (let i = 0; i < 15; i++) {
                        let cardElement = cardChildren[i];
                        // clone needs a react element and not the actual DOM
                        if (evCardID === cardElement.id) {
                                // clone element in order to append to target
                                // after it's been called
                                console.log('cardElement: ', cardElement);
                                //navigage the cards component and find element with ID
                                let clonedCardEl = React.cloneElement(/*need react element*/);
                                console.log('clonedCardEl: ', clonedCardEl);
                                return clonedCardEl;
                        }
                }
        };

        const handleDrop = e => {
                let targetChildren = targetsRef.current.children;
                let eTargetID = e.target.id;
                let eTargetID3 = eTargetID.split('')[3];
                let cardsChildren = cardsRef.current.children;
                let eCardID = e.dataTransfer.getData('text');
                // console.log('eCardID: ', props.children);
                let eCardID3 = eCardID.split('')[3];
                let targetEl = null;
                let cardEl = null;
                if (eTargetID3 === eCardID3) {
                        //find when target ref = event target
                        targetEl = getTargetEl(eTargetID);
                        cardEl = getCardEl(eCardID);
                        targetEl.style.backgroundColor = 'green';
                        targetEl.appendChild(cardEl);
                        console.log('targetEl: ', targetEl);
                        console.log('cardEl: ', cardEl);
                        handleCorrect();
                } else {
                        targetEl = getTargetEl(eTargetID);
                        targetEl.style.backgroundColor = 'red';
                        handleIncorrect();
                }
        };

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
                                <Targets
                                        ref={targetsRef}
                                        {...props}
                                        handleDragOver={handleDragOver}
                                        handleDrop={handleDrop}
                                />
                                <Cards game={props.game} ref={cardsRef} />
                                <h3>Correct</h3>
                                <div className={cls.CorrectScore}>{correct}</div>
                                <h3>Incorrect</h3>
                                <div className={cls.IncorrectScore}>{incorrect}</div>
                                {isRoundOver ? <h3>ROUND OVER!</h3> : <h3>KEEP GOING!</h3>}
                        </div>
                </div>
        );
};

export default NewGameTemplate;
