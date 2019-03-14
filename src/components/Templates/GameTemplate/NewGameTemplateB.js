import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Slide from '@material-ui/core/Slide';
// import Paper from '@material-ui/core/Paper';
import NavigationBar from '../../Navigation/NavigationBar/NavigationBar';
import useTargets from './Targets';
import useCards from './Cards';
import cls from './GameTemplate.module.css';
import victory_royale from './victory_royale.gif';
const Transition = props => {
        return <Slide direction="up" {...props} />;
};

const NewGameTemplateB = props => {
        console.log('NewGameTemplateB is running');
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
                let score = Math.round(((correct - incorrect) / correct) * 100);
                if (score > 0) {
                        setCalculatedScore(score);
                } else {
                        setCalculatedScore(0);
                }
        };

        // Goes through all targets and counts the number of targets with
        // children. So when all 15 targets have a child node, the round is over.
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

        // adds 1 every time card is dropped in correct target
        const handleCorrect = () => {
                setCorrect(correct + 1);
        };

        // adds 1 every time card is dropped in incorrect target
        const handleIncorrect = () => {
                setIncorrect(incorrect + 1);
        };

        // this will monitor side effects and re-check the round status
        // every time correct or incorrect state changes
        useEffect(() => {
                checkRoundStatus();
        }, [correct, incorrect]);

        // take in event target ID and use it to find and return targetRef
        // navigates through the ref created by React.createRef used for targets
        // loop through the children to access the target, then compare it with
        // the id identified through the dropEvent
        // this returns a mutable target ref
        const getTargetEl = evTargetID => {
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

        // take in event card ID and use it to find and return cardRef
        // navigate through the array of cards until the event id matches
        // the ref, then return the mutable cardElement ref
        const getCardEl = evCardID => {
                let cardChildren = cardsRef.current.children;
                for (let i = 0; i < cardChildren.length; i++) {
                        let cardElement = cardChildren[i];
                        if (evCardID === cardElement.id) {
                                return cardElement;
                        }
                }
                // this is needed when a card had been dropped on an incorrect target and
                // needs to be accessed by navigating the targets ref tree because the
                // card is now a child of the target
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

        // initial mount and render of targets, actively monitors as targets change
        const [targets, setTargets] = useState([]);
        useEffect(() => {
                let newTargets = useTargets(handleDragOver, handleDrop);
                setTargets(newTargets);
        }, [targets]);

        // initial mount and render of cards, will not change upon re-render
        const [cards, setCards] = useState([]);
        useEffect(() => {
                setCards(useCards(props.game2, handleDrag, shuffleArray));
        }, []);

        // identify trigger to restart section, can be switched when
        // button 'try section again' is clicked on dialog window
        const [canRestart, setCanRestart] = useState(false);
        const removeCards = () => {
                for (let k = 0; k < targetsRef.current.children.length; k++) {
                        for (let j = 0; j < targetsRef.current.children[k].children.length; j++) {
                                let nestedCards = targetsRef.current.children[k].children[j].children;
                                if (nestedCards[0]) {
                                        let removedChild = targetsRef.current.children[k].children[
                                                j
                                        ].removeChild(nestedCards[0]);
                                        targetsRef.current.children[k].children[j].classList.remove(
                                                cls.CorrectTarget,
                                                cls.IncorrectTarget
                                        );
                                        removedChild.classList.remove(cls.Correct, cls.Incorrect);
                                        removedChild.setAttribute('draggable', true);
                                        cardsRef.current.appendChild(removedChild);
                                }
                        }
                }
        };

        useEffect(() => {
                if (canRestart) {
                        // console.log('canRestart is running');
                        let shuffledCards = shuffleArray(useCards(props.game2, handleDrag, shuffleArray));
                        setCards(shuffledCards);
                        setTargets(useTargets(handleDragOver, handleDrop));
                        setCanRestart(false);
                        setIsRoundOver(false);
                        setCorrect(0);
                        setIncorrect(0);
                        setCalculatedScore(0);
                }
        }, [canRestart]);
        const handleRestart = () => {
                removeCards();
                setCanRestart(true);
        };

        const restart = (
                <Button onClick={handleRestart} variant="contained" color="primary">
                        Try section again
                </Button>
        );
        const restartGame = (
                <Link to={`${navGame}b`} className={cls.Link}>
                        <Button variant="contained" color="primary">
                                Try Game Again!
                        </Button>
                </Link>
        );
        const unitPage = (
                <Link to={navUnit} className={cls.Link}>
                        <Button variant="contained" color="primary">
                                Leave to Unit Page
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
                                                                You won with a score of {calculatedScore}
                                                                !!! Great job!!! What would you like to do
                                                                next?
                                                        </h2>
                                                        <img
                                                                src={victory_royale}
                                                                className={cls.Image}
                                                                alt="victory royale"
                                                        />
                                                </div>
                                        ) : (
                                                <h2>
                                                        Sorry, you got a score of {calculatedScore}. What
                                                        would you like to do?
                                                </h2>
                                        )}
                                </DialogContent>
                                <DialogActions>
                                        {calculatedScore >= 70 ? restartGame : restart}
                                        {unitPage}
                                </DialogActions>
                        </Dialog>
                        <div className={cls.NewGameContainer}>
                                <div className={cls.NewGameBoard} ref={targetsRef}>
                                        <div className={cls.NewCol}>
                                                <h1 className={cls.NewColTitle}>
                                                        {props.game2.col1.heading}
                                                </h1>
                                                {targets[0]}
                                                {targets[1]}
                                                {targets[2]}
                                        </div>
                                        <div className={cls.NewCol}>
                                                <h1 className={cls.NewColTitle}>
                                                        {props.game2.col2.heading}
                                                </h1>
                                                {targets[3]}
                                                {targets[4]}
                                                {targets[5]}
                                        </div>
                                        <div className={cls.NewCol}>
                                                <h1 className={cls.NewColTitle}>
                                                        {props.game2.col3.heading}
                                                </h1>
                                                {targets[6]}
                                                {targets[7]}
                                                {targets[8]}
                                        </div>
                                        <div className={cls.NewCol}>
                                                <h1 className={cls.NewColTitle}>
                                                        {props.game2.col4.heading}
                                                </h1>
                                                {targets[9]}
                                                {targets[10]}
                                                {targets[11]}
                                        </div>
                                        <div className={cls.NewCol}>
                                                <h1 className={cls.NewColTitle}>
                                                        {props.game2.col5.heading}
                                                </h1>
                                                {targets[12]}
                                                {targets[13]}
                                                {targets[14]}
                                        </div>
                                </div>

                                <div className={cls.NewCardDeckContainer}>
                                        <div className={cls.CorrectScore}>
                                                <h3>Correct</h3>
                                                <h4 className={cls.scoreText}>{correct}</h4>
                                        </div>
                                        <div className={cls.NewCardStackLocation} ref={cardsRef}>
                                                {cards}
                                        </div>
                                        <div className={cls.IncorrectScore}>
                                                <h3>Incorrect</h3>
                                                <h4 className={cls.scoreText}>{incorrect}</h4>
                                        </div>
                                </div>
                        </div>
                </div>
        );
};

export default NewGameTemplateB;
