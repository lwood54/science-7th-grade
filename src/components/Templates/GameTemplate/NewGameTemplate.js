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
import cls from './NewGameTemplate.module.css';
import keep_going from './keep_going.gif';
const Transition = props => {
        return <Slide direction="up" {...props} />;
};

const NewGameTemplate = props => {
        console.log('NewGameTemplate RENDERED');
        const navHome = props.vertMenuItems[0]['Home'];
        const navUnit = props.vertMenuItems[1]['Unit Page'];
        const navGame = props.vertMenuItems[2]['Game'];
        const navQuizlet = props.vertMenuItems[3]['Quizlet'];
        // create a ref hook for targets and cards that can be accessed at a deeper level
        // when a card is dropped on a target
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
                        // this prevents students from trying to score a -400
                        setCalculatedScore(0);
                }
        };

        // Goes through all targets and counts the number of targets with
        // children. So when all 15 targets have a child node, the round is over.
        const checkRoundStatus = () => {
                // set counter to 0
                let targetsWithCardsCount = 0;
                // loop through target columns
                for (let k = 0; k < targetsRef.current.children.length; k++) {
                        // loop through targets
                        for (let j = 0; j < targetsRef.current.children[k].children.length; j++) {
                                // check children of targets
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
        // navigates through the ref created by useRef hook used for targets
        // loop through the children to access the target, then compare it with
        // the id identified through the dropEvent
        // this returns a mutable target ref
        const getTargetEl = evTargetID => {
                // access ref object that can be mutated
                let targetChildren = targetsRef.current.children;
                // loop columns
                for (let i = 0; i < 5; i++) {
                        // loop children aka targets within columns
                        for (let k = 1; k < 4; k++) {
                                // target column @ target square
                                let targetEl = targetChildren[i].children[k];
                                if (evTargetID === targetEl.id) {
                                        // returns mutable ref using targetRef traversal
                                        return targetEl;
                                }
                        }
                }
        };

        // take in event card ID and use it to find and return cardRef
        // navigate through the array of cards until the event id matches
        // the ref, then return the mutable cardElement ref
        const getCardEl = evCardID => {
                // set mutable ref
                let cardChildren = cardsRef.current.children;
                // loop through card stack, whose length will change
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
                // provides the target id (which will be a card that is being dragged)
                // NOTE: event target is not the same thing as a game board target
                e.dataTransfer.setData('text', e.target.id);
        };

        const handleDragOver = e => {
                e.preventDefault();
        };

        const handleDrop = e => {
                // if the game target does not have children
                if (!e.target.children.length > 0) {
                        let eTargetID = e.target.id;
                        let eTargetID3 = eTargetID.split('')[3]; // basically gets column number
                        let eCardID = e.dataTransfer.getData('text');
                        let eCardID3 = eCardID.split('')[3]; // gets pre-labeled column number match
                        let targetEl = getTargetEl(eTargetID); // get mutable target ref
                        let cardEl = getCardEl(eCardID); // get mutable card ref
                        targetEl.appendChild(cardEl); // add card to target
                        // check if target column matches card column
                        if (eTargetID3 === eCardID3) {
                                cardEl.setAttribute('draggable', false); // change card to not be draggable
                                cardEl.classList.remove(cls.clicked); // remove clicked styling
                                cardEl.classList.add(cls.Correct); // add correct styling
                                targetEl.classList.add(cls.CorrectTarget); // add correct target styling
                                handleCorrect(); // update correct count
                        } else {
                                // if card is dropped in wrong target
                                targetEl.classList.add(cls.IncorrectTarget);
                                cardEl.classList.remove(cls.clicked);
                                cardEl.classList.add(cls.Incorrect);
                                handleIncorrect();
                        }
                } else {
                        return;
                }
        };

        const [dragClickId, setDragClickId] = useState(null);
        // this is used for touch screens, click instead of drag
        const handleTargetClick = e => {
                // if the target does not have any children &
                // if there is a valid id stored in dragClickId state
                if (!e.target.children.length > 0 && dragClickId) {
                        let eTargetID = e.target.id;
                        let eTargetID3 = eTargetID.split('')[3];
                        // had to access id with state instead of data transfer when using click
                        let eCardID = dragClickId;
                        let eCardID3 = eCardID.split('')[3]; // access column number
                        let targetEl = getTargetEl(eTargetID); // get mutable target using refs
                        let cardEl = getCardEl(eCardID); // get mutable card using refs
                        targetEl.appendChild(cardEl); // add the card to the target
                        setDragClickId(null); // resets dragClickId in state
                        if (eTargetID3 === eCardID3) {
                                cardEl.setAttribute('draggable', false);
                                cardEl.classList.remove(cls.clicked);
                                cardEl.classList.add(cls.Correct);
                                targetEl.classList.add(cls.CorrectTarget);
                                handleCorrect();
                        } else {
                                // when INCORRECT drop
                                targetEl.classList.add(cls.IncorrectTarget);
                                cardEl.classList.remove(cls.clicked);
                                cardEl.classList.add(cls.Incorrect);
                                handleIncorrect();
                        }
                } else {
                        return;
                }
        };

        const handleCardClick = e => {
                // sets cardID to e.target.id if test, or looks to parent div if img w/ no id
                let cardID = null;
                if (e.target.id) {
                        cardID = e.target.id;
                        if (cardID.split('')[3] !== e.target.parentNode.id.split('')[3]) {
                                let clickedCard = getCardEl(cardID);
                                clickedCard.classList.remove(cls.Incorrect);
                                clickedCard.classList.add(cls.clicked);
                                setDragClickId(cardID);
                                return;
                        } else {
                                return;
                        }
                } else if (e.target.parentNode.id) {
                        // this is if it is a card with an image instead of text
                        // must check for parent div of image that has the id
                        cardID = e.target.parentNode.id;
                        if (cardID.split('')[3] !== e.target.parentNode.parentNode.id.split('')[3]) {
                                let clickedCard = getCardEl(cardID);
                                clickedCard.classList.remove(cls.Incorrect);
                                clickedCard.classList.add(cls.clicked);
                                setDragClickId(cardID);
                        }
                }
        };

        // initial mount and render of targets, actively monitors correct/incorrect/dragClickId
        // having it monitor targets resulted in infinite loop because of rerendering gameboard
        const [targets, setTargets] = useState([]);
        useEffect(() => {
                // generates new targets using imported targets creator function
                let newTargets = useTargets(handleDragOver, handleDrop, handleTargetClick);
                setTargets(newTargets);
        }, [correct, incorrect, dragClickId]); // changed [targets] (which caused infinite re-render)

        // initial mount and render of cards, will not change upon re-render
        const [cards, setCards] = useState([]);
        useEffect(() => {
                setCards(useCards(props.game, handleDrag, handleCardClick, shuffleArray));
        }, []);

        // identify trigger to restart section, can be switched when
        // button 'try section again' is clicked on dialog window
        const [canRestart, setCanRestart] = useState(false);
        const removeCards = () => {
                // loops through and removes each child/card from each target
                // when reset is requested
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
                                        // once removed, then it has to be re-added back to the card deck
                                        cardsRef.current.appendChild(removedChild);
                                }
                        }
                }
        };

        useEffect(() => {
                if (canRestart) {
                        let shuffledCards = shuffleArray(
                                useCards(props.game, handleDrag, handleCardClick, shuffleArray)
                        );
                        setCards(shuffledCards);
                        setTargets(useTargets(handleDragOver, handleDrop, handleTargetClick));
                        setCanRestart(false);
                        setIsRoundOver(false);
                        setCorrect(0);
                        setIncorrect(0);
                        setCalculatedScore(0);
                }
        }, [canRestart]); // monitors effect when canRestart changes status
        const handleRestart = () => {
                removeCards();
                setCanRestart(true);
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

export default NewGameTemplate;
