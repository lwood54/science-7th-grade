import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Slide from '@material-ui/core/Slide';
import Paper from '@material-ui/core/Paper';
import NavigationBar from '../../Navigation/NavigationBar/NavigationBar';
// import Targets from './Targets';
// import Cards from './Cards';
import cls from './GameTemplate.module.css';
import keep_going from './keep_going.gif';
const Transition = props => {
        return <Slide direction="up" {...props} />;
};

const useCards = (game, handleDrag, shuffleArray) => {
        let newCards = [];
        // copy the game object so this can be manipulated and used to update state
        let gameCopy = { ...game };
        // create an array of columns (keys) that can be iterated and used to
        // access their values
        let arrayOfCols = Object.keys(gameCopy);
        // chose a forEach because I did not want a return on every loop
        arrayOfCols.forEach(col => {
                let itemsArray = Object.keys(gameCopy[col]);
                itemsArray.forEach(item => {
                        if (item === 'image') {
                                // add an image card to the array
                                newCards.push(
                                        <div
                                                className={cls.NewCard}
                                                key={`${col}_${item}`}
                                                id={`${col}_${item}`}
                                                onDragStart={handleDrag}
                                                draggable
                                                // onClick={this.handleCardClick}
                                        >
                                                <img
                                                        src={gameCopy[col][item]}
                                                        alt="game piece"
                                                        className={cls.Image}
                                                        draggable="false"
                                                />
                                        </div>
                                );
                        } else if (item === 'hint' || item === 'definition') {
                                // excluding the heading key/value, add cards
                                // to the card array and set their properties
                                newCards.push(
                                        <div
                                                key={`${col}_${item}`}
                                                id={`${col}_${item}`}
                                                className={cls.NewCard}
                                                onDragStart={handleDrag}
                                                draggable
                                                // onClick={this.handleCardClick}
                                        >
                                                {gameCopy[col][item]}
                                        </div>
                                );
                        }
                });
        });
        let shuffledCards = shuffleArray(newCards);
        return shuffledCards;
};

const NewGameTemplate = props => {
        const navHome = props.vertMenuItems[0]['Home'];
        const navUnit = props.vertMenuItems[1]['Unit Page'];
        const navGame = props.vertMenuItems[2]['Game'];
        const navQuizlet = props.vertMenuItems[3]['Quizlet'];
        const targetsRef = useRef();
        const cardsRef = useRef();
        const [isRoundOver, setIsRoundOver] = useState(false);
        const [correct, setCorrect] = useState(0);
        const [incorrect, setIncorrect] = useState(0);
        const [calculatedScore, setCalculatedScore] = useState(0);

        const updateScore = () => {
                console.log('updateScore() is running');
                setCalculatedScore(Math.round(((correct - incorrect) / correct) * 100));
        };
        let freshCards = [];
        let freshTargets = [];

        const checkRoundStatus = () => {
                let targetsWithCardsCount = 0;
                for (let k = 0; k < targetsRef.current.children.length; k++) {
                        for (let j = 0; j < targetsRef.current.children[k].children.length; j++) {
                                let nestedCards = targetsRef.current.children[k].children[j].children;
                                if (nestedCards[0]) {
                                        targetsWithCardsCount++;
                                }
                        }
                }
                if (targetsWithCardsCount === 15) {
                        updateScore();
                        setIsRoundOver(true);
                }
        };

        const handleCorrect = () => {
                setCorrect(correct + 1);
        };

        const handleIncorrect = () => {
                setIncorrect(incorrect + 1);
        };

        useEffect(() => {
                checkRoundStatus();
        }, [correct, incorrect]);

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
                for (let i = 0; i < cardChildren.length; i++) {
                        let cardElement = cardChildren[i];
                        if (evCardID === cardElement.id) {
                                return cardElement;
                        }
                }
                for (let k = 0; k < targetsRef.current.children.length; k++) {
                        for (let j = 0; j < targetsRef.current.children[k].children.length; j++) {
                                let nestedCards = targetsRef.current.children[k].children[j].children;
                                if (nestedCards[0]) {
                                        if (nestedCards[0].id === evCardID) {
                                                return nestedCards[0];
                                        }
                                }
                        }
                }
        };

        const shuffleArray = array => {
                // copy array to manipulate
                let arrayCopy = [...array];
                let mixedArray = [];
                // loop through copy until no elements left
                while (arrayCopy.length > 0) {
                        let randNum = Math.floor(Math.random() * arrayCopy.length);
                        // add removed elements to mixedArray as looping occurs
                        mixedArray.push(arrayCopy.splice(randNum, 1)[0]);
                }
                return mixedArray;
        };

        const handleDrag = e => {
                e.dataTransfer.setData('text', e.target.id);
        };

        const handleDragOver = e => {
                e.preventDefault();
        };

        const handleDrop = e => {
                let eTargetID = e.target.id;
                let eTargetID3 = eTargetID.split('')[3];
                let eCardID = e.dataTransfer.getData('text');
                // console.log('eCardID: ', props.children);
                let eCardID3 = eCardID.split('')[3];
                let targetEl = null;
                let cardEl = null;
                if (eTargetID3 === eCardID3) {
                        //find when target ref = event target
                        targetEl = getTargetEl(eTargetID);
                        cardEl = getCardEl(eCardID);
                        targetEl.appendChild(cardEl);
                        cardEl.setAttribute('draggable', false);
                        cardEl.classList.add(cls.Correct);
                        targetEl.classList.add(cls.CorrectTarget);
                        handleCorrect();
                } else {
                        targetEl = getTargetEl(eTargetID);
                        cardEl = getCardEl(eCardID);
                        targetEl.appendChild(cardEl);
                        targetEl.classList.add(cls.IncorrectTarget);
                        cardEl.classList.add(cls.Incorrect);
                        handleIncorrect();
                }
        };

        const [targets, setTargets] = useState([]);
        useEffect(() => {
                let newTargets = [];
                for (let i = 1; i < 6; i++) {
                        for (let k = 1; k < 4; k++) {
                                newTargets.push(
                                        <div
                                                id={`col${i}_target${k}`}
                                                key={`col${i}_target${k}`}
                                                className={cls.NewTarget}
                                                onDragOver={handleDragOver}
                                                onDrop={handleDrop}
                                        />
                                );
                        }
                }
                freshTargets = [...newTargets];
                setTargets([...newTargets]);
        }, [targets]);

        const [cards, setCards] = useState([]);
        useEffect(() => {
                setCards(useCards(props.game, handleDrag, shuffleArray));
        }, []);
        // useEffect(() => {
        // let newCards = [];
        // // copy the game object so this can be manipulated and used to update state
        // let gameCopy = { ...props.game };
        // // create an array of columns (keys) that can be iterated and used to
        // // access their values
        // let arrayOfCols = Object.keys(gameCopy);
        // // chose a forEach because I did not want a return on every loop
        // arrayOfCols.forEach(col => {
        //         let itemsArray = Object.keys(gameCopy[col]);
        //         itemsArray.forEach(item => {
        //                 if (item === 'image') {
        //                         // add an image card to the array
        //                         newCards.push(
        //                                 <div
        //                                         className={cls.NewCard}
        //                                         key={`${col}_${item}`}
        //                                         id={`${col}_${item}`}
        //                                         onDragStart={handleDrag}
        //                                         draggable
        //                                         // onClick={this.handleCardClick}
        //                                 >
        //                                         <img
        //                                                 src={gameCopy[col][item]}
        //                                                 alt="game piece"
        //                                                 className={cls.Image}
        //                                                 draggable="false"
        //                                         />
        //                                 </div>
        //                         );
        //                 } else if (item === 'hint' || item === 'definition') {
        //                         // excluding the heading key/value, add cards
        //                         // to the card array and set their properties
        //                         newCards.push(
        //                                 <div
        //                                         key={`${col}_${item}`}
        //                                         id={`${col}_${item}`}
        //                                         className={cls.NewCard}
        //                                         onDragStart={handleDrag}
        //                                         draggable
        //                                         // onClick={this.handleCardClick}
        //                                 >
        //                                         {gameCopy[col][item]}
        //                                 </div>
        //                         );
        //                 }
        //         });
        // });
        // let shuffledCards = shuffleArray(newCards);
        //         freshCards = [...newCards];
        //         setCards([...shuffledCards]);
        // }, []);
        const [canRestart, setCanRestart] = useState(false);
        const removeCards = () => {
                let recoveryCardDeck = [];
                for (let k = 0; k < targetsRef.current.children.length; k++) {
                        for (let j = 0; j < targetsRef.current.children[k].children.length; j++) {
                                let nestedCards = targetsRef.current.children[k].children[j].children;
                                if (nestedCards[0]) {
                                        cardsRef.current.appendChild(nestedCards[0]);
                                        console.log('cardRef.current: ', cardsRef.current);
                                        /*
                                                CURRENT PROBLEM: find a way to reset cards array
                                                it is keeping refs and not letting me remove and add a new
                                                deck in its place, I am not able to iterate through and pull out
                                                by ref either, or at least I can't take those and make a new
                                                deck yet.
                                        */
                                        // recoveryCardDeck.push(nestedCards[0]);
                                }
                        }
                }
                // console.log('recoveryCardDeck: ', recoveryCardDeck);

                // let newCards = shuffleArray(React.cloneElement(cards));
                // console.log('newCards in removeCards: ', newCards);
                // return newCards;
        };
        useEffect(() => {
                if (canRestart) {
                        // console.log('canRestart is running');
                        // let shuffledCards = shuffleArray(removeCards());
                        // setCards(shuffledCards);
                        // setCanRestart(false);
                }
                // return () => {
                //         // console.log('cleanup function running');
                //         // useCards(props.game, handleDrag, shuffleArray);
                //         setCanRestart(false);
                // };
        }, [canRestart]);
        const handleRestart = () => {
                // this currently works, but it is not using React and I lose
                // speed. I would prefer to reset the cards array and have it re-render;
                // look into removing refs or resetting refs
                window.location.reload();
                // setCanRestart(true);
                // setTargets(freshTargets);
                // setIsRoundOver(false);
                // setCorrect(0);
                // setIncorrect(0);
                // setCalculatedScore(0);
        };

        const restart = (
                <Button onClick={handleRestart} variant="contained" color="primary">
                        Try section again
                </Button>
        );
        const nextSection = (
                <Link to={`${navGame}b`} className={cls.Link}>
                        <Button variant="contained" color="primary">
                                Move on to Section 2
                        </Button>
                </Link>
        );

        return (
                <div style={{ width: '100%' }}>
                        <NavigationBar
                                title={props.title}
                                quizletLink={navQuizlet}
                                homeLink={navHome}
                                unitMain={navUnit}
                        />
                        <Dialog
                                open={isRoundOver}
                                TransitionComponent={Transition}
                                keepMounted
                                aria-labelledby="alert-dialog-slide-title"
                                aria-describedby="alert-dialog-slide-description"
                        >
                                <DialogContent>
                                        {calculatedScore >= 70 ? (
                                                <div className={cls.VictoryContainer}>
                                                        <h2>
                                                                You passed this section with a score of{' '}
                                                                {calculatedScore}!!! Great job!!!
                                                        </h2>
                                                        <img
                                                                src={keep_going}
                                                                className={cls.Image}
                                                                alt="keep going Homer Simpson"
                                                        />
                                                </div>
                                        ) : (
                                                <h2>
                                                        Sorry, you got a score of {calculatedScore}. Go ahead
                                                        and retry this section.
                                                </h2>
                                        )}
                                </DialogContent>
                                <DialogActions>
                                        {restart}
                                        {calculatedScore >= 70 ? nextSection : null}
                                </DialogActions>
                        </Dialog>
                        <div className={cls.NewGameContainer}>
                                <h1 className={cls.NewTitle}>New Game Template</h1>
                                <div className={cls.NewGameBoard} ref={targetsRef}>
                                        <div className={cls.NewCol}>
                                                <h1 className={cls.NewColTitle}>{props.game.col1.heading}</h1>
                                                {targets[0]}
                                                {targets[1]}
                                                {targets[2]}
                                        </div>
                                        <div className={cls.NewCol}>
                                                <h1 className={cls.NewColTitle}>{props.game.col2.heading}</h1>
                                                {targets[3]}
                                                {targets[4]}
                                                {targets[5]}
                                        </div>
                                        <div className={cls.NewCol}>
                                                <h1 className={cls.NewColTitle}>{props.game.col3.heading}</h1>
                                                {targets[6]}
                                                {targets[7]}
                                                {targets[8]}
                                        </div>
                                        <div className={cls.NewCol}>
                                                <h1 className={cls.NewColTitle}>{props.game.col4.heading}</h1>
                                                {targets[9]}
                                                {targets[10]}
                                                {targets[11]}
                                        </div>
                                        <div className={cls.NewCol}>
                                                <h1 className={cls.NewColTitle}>{props.game.col5.heading}</h1>
                                                {targets[12]}
                                                {targets[13]}
                                                {targets[14]}
                                        </div>
                                </div>
                                <div className={cls.NewCardDeckContainer}>
                                        <div className={cls.NewCardStackLocation} ref={cardsRef}>
                                                {cards}
                                        </div>
                                </div>
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
