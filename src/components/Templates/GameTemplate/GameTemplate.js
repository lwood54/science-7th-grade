import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Slide from '@material-ui/core/Slide';
import Paper from '@material-ui/core/Paper';

import NavigationBar from '../../Navigation/NavigationBar/NavigationBar';

// import GameBoard from "./GameBoard";
// import CardDeck from "./CardDeck";

import cls from './GameTemplate.module.css';

import keep_going from './keep_going.gif';

// need to import game object that will be passed in the props
// and used for rendering the cards and column headings.

const Transition = props => {
        return <Slide direction="up" {...props} />;
};

class GameTemplate extends Component {
        state = {
                correctAnswers: 0,
                wrongAnswers: 0,
                targets: [],
                cards: [],
                roundOver: false,
                dragClickId: null,
                incorrectCards: []
        };

        updateScore = () => {
                const { correctAnswers, wrongAnswers } = this.state;
                return Math.round(((correctAnswers - wrongAnswers) / correctAnswers) * 100);
        };

        handleRestart = () => {
                let cards = this.createFreshDeck();
                let targets = this.createTargets();
                // { cards } is short for cards: cards
                this.setState({
                        cards,
                        targets,
                        correctAnswers: 0,
                        wrongAnswers: 0,
                        roundOver: false,
                        incorrectCards: [],
                        dragClickId: null
                });
        };

        // there may be a better shuffle system than this, but it works pretty well
        shuffleArray = array => {
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

        handleCardClick = ev => {
                if (ev.target.id) {
                        ev.target.style.transform = 'scale(1.05)';
                        ev.target.style.backgroundColor = '#0288d1';
                        this.setState({ dragClickId: ev.target.id });
                } else if (ev.target.parentNode.id) {
                        ev.target.parentNode.style.transform = 'scale(1.05)';
                        ev.target.parentNode.style.backgroundColor = '#0288d1';
                        this.setState({ dragClickId: ev.target.parentNode.id });
                }
        };

        handleTargetClick = ev => {
                // if the event target does not have class Target, then it's a no go
                if (!ev.target.classList[0].includes('Target')) {
                        return false;
                } else if (ev.target.children.length > 0) {
                        // if the drag target already has a child, it's a no go
                        return false;
                } else {
                        if (this.state.dragClickId !== null) {
                                // if we are good to go, then pass the event target and drag
                                // item ids to the appendChild function
                                ev.preventDefault();
                                let targetId = ev.target.id;
                                let cardId = this.state.dragClickId;
                                this.appendChild(targetId, cardId);
                                this.setState({ dragClickId: null });
                        }
                }
        };

        createFreshDeck = () => {
                // is there a better location to create the card deck and target arrays?
                let cards = [];
                // copy the game object so this can be manipulated and used to update state
                let gameCopy = { ...this.props.game };
                // create an array of columns (keys) that can be iterated and used to
                // access their values
                let arrayOfCols = Object.keys(gameCopy);
                // chose a forEach because I did not want a return on every loop
                arrayOfCols.forEach(col => {
                        let itemsArray = Object.keys(gameCopy[col]);
                        itemsArray.forEach(item => {
                                if (item === 'image') {
                                        // add an image card to the array
                                        cards.push(
                                                <div
                                                        className={cls.CardContainer}
                                                        key={`${col}_${item}`}
                                                        id={`${col}_${item}`}
                                                        onDragStart={this.handleDrag}
                                                        draggable
                                                        onClick={this.handleCardClick}
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
                                        cards.push(
                                                <div
                                                        key={`${col}_${item}`}
                                                        id={`${col}_${item}`}
                                                        className={cls.CardContainer}
                                                        onDragStart={this.handleDrag}
                                                        draggable
                                                        onClick={this.handleCardClick}
                                                >
                                                        <div className={cls.CardContent}>
                                                                {gameCopy[col][item]}
                                                        </div>
                                                </div>
                                        );
                                }
                        });
                });
                let shuffledCards = this.shuffleArray(cards);
                return shuffledCards;
        };

        createTargets = () => {
                let targets = [];
                // creating an array of targets. Using a for loop so I can
                // define id's by position in 2 different loops
                for (let i = 1; i <= 5; i++) {
                        for (let j = 1; j <= 3; j++) {
                                targets.push(
                                        <div
                                                className={cls.Target}
                                                onDragOver={this.handleDragOver}
                                                onDrop={this.handleDrop}
                                                id={`col${i}_target${j}`}
                                                key={`col${i}_target${j}`}
                                                onClick={this.handleTargetClick}
                                        />
                                );
                        }
                }
                return targets;
        };

        componentDidMount() {
                window.scrollTo(0, 0);
                let cards = this.createFreshDeck();
                let targets = this.createTargets();
                this.setState({
                        targets: targets,
                        cards: cards
                });
        }

        handleDrag = event => {
                // transfer data when dragging
                event.dataTransfer.setData('text', event.target.id);
        };

        handleDragOver = event => {
                // prevent default dragover behavior
                event.preventDefault();
        };

        updateCorrect() {
                let updtCorrect = this.state.correctAnswers;
                updtCorrect += 1;
                this.setState({ correctAnswers: updtCorrect });
        }

        updateWrong() {
                let updtWrong = this.state.wrongAnswers;
                updtWrong += 1;
                this.setState({ wrongAnswers: updtWrong });
        }

        appendChild = (targetId, cardId) => {
                // copying these arrays from state in order to manipulate and update state later
                let targetsCopy = [...this.state.targets];
                let cardsCopy = [...this.state.cards];
                let incorrectCardsCopy = [...this.state.incorrectCards];
                // getting the index position 3 value because that has the column number identified
                let targetIdIndex3 = targetId.split('')[3];
                let cardIdIndex3 = cardId.split('')[3];
                // on the drop event, if the target and drag item both have the same column number
                if (targetIdIndex3 === cardIdIndex3) {
                        this.updateCorrect();
                        // loop with forEach because I don't want a return on every item
                        // the goal here is to locate the correct target element in the state
                        // then find the correct card element from the array in state
                        // then append the card into the target
                        targetsCopy.forEach((target, i) => {
                                // looking through the the target in the target array from state
                                // that matches the target being dropped on
                                if (target.props.id === targetId) {
                                        // looking through the card array from state, find the
                                        // card that matches the drag item
                                        cardsCopy.forEach((card, k) => {
                                                // if id from card in state matches drag item
                                                if (card.props.id === cardId) {
                                                        // replace the target element with
                                                        // the card element by passing the
                                                        // props.children
                                                        // make sure to be aware of other props in div
                                                        targetsCopy.splice(
                                                                i,
                                                                1,
                                                                <div
                                                                        {...target.props}
                                                                        key={target.props.id}
                                                                        className={[
                                                                                target.props.className,
                                                                                cls.Correct
                                                                        ].join(' ')}
                                                                        draggable="false"
                                                                >
                                                                        {card.props.children}
                                                                </div>
                                                        );
                                                        // the .join(" ") technique allows me
                                                        // to add multiple classes
                                                        cardsCopy.splice(k, 1);
                                                }
                                        });
                                        // while still matching target drop element with the
                                        // target array from state, we have to find the card
                                        // in props.children if it was already placed on a target,
                                        // but was wrong
                                        if (incorrectCardsCopy.length > 0) {
                                                targetsCopy.forEach((target, i) => {
                                                        // if the target element has children
                                                        if (target.props.children) {
                                                                // if the target child has an id = to drarg item id
                                                                // then it's the correct card, we need to remove
                                                                // it from it's current spot, the data transfer is
                                                                // already taking care of getting the cards info
                                                                if (
                                                                        target.props.children.props.id ===
                                                                        cardId
                                                                ) {
                                                                        // replace the old target and child
                                                                        // with a new empty target, make sure
                                                                        // to keep the WrongTarget class
                                                                        targetsCopy.splice(
                                                                                i,
                                                                                1,
                                                                                <div
                                                                                        onDragOver={
                                                                                                this
                                                                                                        .handleDragOver
                                                                                        }
                                                                                        onDrop={
                                                                                                this
                                                                                                        .handleDrop
                                                                                        }
                                                                                        onClick={
                                                                                                this
                                                                                                        .handleTargetClick
                                                                                        }
                                                                                        id={target.props.id}
                                                                                        key={target.props.id}
                                                                                        className={[
                                                                                                cls.Target,
                                                                                                cls.WrongTarget
                                                                                        ].join(' ')}
                                                                                />
                                                                        );
                                                                }
                                                        }
                                                });
                                                // probably unecessary, but keeping and updating an
                                                // incorrect card array to use as reference if any are still
                                                // out of location
                                                incorrectCardsCopy.forEach((card, x) => {
                                                        if (card.props.id === cardId) {
                                                                targetsCopy.splice(
                                                                        i,
                                                                        1,
                                                                        <div
                                                                                {...target.props}
                                                                                key={target.props.id}
                                                                                className={[
                                                                                        target.props
                                                                                                .className,
                                                                                        cls.Correct
                                                                                ].join(' ')}
                                                                                draggable="false"
                                                                        >
                                                                                {card.props.children}
                                                                        </div>
                                                                );
                                                                incorrectCardsCopy.splice(x, 1);
                                                                // how to handle taking away and adding it
                                                                // also need to search wrong card stack when
                                                                // dropped on correct target
                                                        }
                                                });
                                        }
                                }
                        });
                } else {
                        // basically have to repeat the steps above that were for a correct item in target drop
                        // this would be a great place to refactor. I may come back later and make this cleaner
                        this.updateWrong();
                        targetsCopy.forEach((target, i) => {
                                if (target.props.id === targetId) {
                                        cardsCopy.forEach((card, k) => {
                                                if (card.props.id === cardId) {
                                                        targetsCopy.splice(
                                                                i,
                                                                1,
                                                                <div
                                                                        {...target.props}
                                                                        key={target.props.id}
                                                                        className={[
                                                                                target.props.className,
                                                                                cls.WrongTarget
                                                                        ].join(' ')}
                                                                >
                                                                        {card}
                                                                </div>
                                                        );
                                                        let wrongCard = cardsCopy.splice(k, 1);
                                                        incorrectCardsCopy.push(wrongCard[0]);
                                                }
                                        });
                                        // still matching the target spot as correct with drag item target
                                        // now we need to still append the child, but provide classes
                                        // that show wrong
                                        if (incorrectCardsCopy.length > 0) {
                                                targetsCopy.forEach((target, i) => {
                                                        if (target.props.children) {
                                                                // we look here if the card is already a child
                                                                // of another target, find it in order to remove
                                                                if (
                                                                        target.props.children.props.id ===
                                                                        cardId
                                                                ) {
                                                                        targetsCopy.splice(
                                                                                i,
                                                                                1,
                                                                                <div
                                                                                        onDragOver={
                                                                                                this
                                                                                                        .handleDragOver
                                                                                        }
                                                                                        onDrop={
                                                                                                this
                                                                                                        .handleDrop
                                                                                        }
                                                                                        onClick={
                                                                                                this
                                                                                                        .handleTargetClick
                                                                                        }
                                                                                        id={target.props.id}
                                                                                        key={target.props.id}
                                                                                        className={[
                                                                                                cls.Target,
                                                                                                cls.WrongTarget
                                                                                        ].join(' ')}
                                                                                />
                                                                        );
                                                                }
                                                        }
                                                });
                                                // update incorrect cards array
                                                incorrectCardsCopy.forEach((card, x) => {
                                                        if (card.props.id === cardId) {
                                                                targetsCopy.splice(
                                                                        i,
                                                                        1,
                                                                        <div
                                                                                {...target.props}
                                                                                key={target.props.id}
                                                                                className={[
                                                                                        target.props
                                                                                                .className,
                                                                                        cls.WrongTarget
                                                                                ].join(' ')}
                                                                        >
                                                                                {card}
                                                                        </div>
                                                                );
                                                                let wrongCard = incorrectCardsCopy.splice(
                                                                        x,
                                                                        1
                                                                );
                                                                // how to handle taking away and adding it
                                                                // also need to search wrong card stack when
                                                                // dropped on correct target
                                                                incorrectCardsCopy.push(wrongCard[0]);
                                                        }
                                                });
                                        }
                                }
                        });
                }
                // update state with all the manipulated arrays
                this.setState({
                        targets: targetsCopy,
                        cards: cardsCopy,
                        roundOver: cardsCopy.length <= 0,
                        incorrectCards: incorrectCardsCopy
                });
        };

        handleDrop = ev => {
                // if the event target does not have class Target, then it's a no go
                if (!ev.target.classList[0].includes('Target')) {
                        return false;
                } else if (ev.target.children.length > 0) {
                        // if the drag target already has a child, it's a no go
                        return false;
                } else {
                        // if we are good to go, then pass the event target and drag
                        // item ids to the appendChild function
                        ev.preventDefault();
                        let targetId = ev.target.id;
                        let cardId = ev.dataTransfer.getData('text');
                        this.appendChild(targetId, cardId);
                }
                this.setState({ dragClickId: null });
        };

        render() {
                const quizletLink = this.props.vertMenuItems
                        .map(item => {
                                return item['Quizlet'];
                        })
                        .join('');
                const homeLink = this.props.vertMenuItems
                        .map(item => {
                                return item['Home'];
                        })
                        .join('');
                const unitMain = this.props.vertMenuItems
                        .map(item => {
                                return item['Unit Page'];
                        })
                        .join('');
                const gameLink = this.props.vertMenuItems
                        .map(item => {
                                return item['Game'];
                        })
                        .join('');
                const restart = (
                        <Button onClick={this.handleRestart} variant="contained" color="primary">
                                Try section again
                        </Button>
                );
                const nextSection = (
                        <Link to={`${gameLink}b`} className={cls.Link}>
                                <Button variant="contained" color="primary">
                                        Move on to Section 2
                                </Button>
                        </Link>
                );

                let score = this.updateScore();
                return (
                        <div style={{ width: '100%' }}>
                                <NavigationBar
                                        title={this.props.title}
                                        quizletLink={quizletLink}
                                        homeLink={homeLink}
                                        unitMain={unitMain}
                                />
                                <Dialog
                                        open={this.state.roundOver}
                                        TransitionComponent={Transition}
                                        keepMounted
                                        aria-labelledby="alert-dialog-slide-title"
                                        aria-describedby="alert-dialog-slide-description"
                                >
                                        <DialogContent>
                                                {score >= 70 ? (
                                                        <div className={cls.VictoryContainer}>
                                                                <h2>
                                                                        You passed this section with a score
                                                                        of {score}!!! Great job!!!
                                                                </h2>
                                                                <img
                                                                        src={keep_going}
                                                                        className={cls.Image}
                                                                        alt="keep going Homer Simpson"
                                                                />
                                                        </div>
                                                ) : (
                                                        <h2>
                                                                Sorry, you got a score of {score}. Go ahead
                                                                and retry this section.
                                                        </h2>
                                                )}
                                        </DialogContent>
                                        <DialogActions>
                                                {restart}
                                                {score >= 70 ? nextSection : null}
                                        </DialogActions>
                                </Dialog>
                                <div className={cls.GameBoard}>
                                        <div className={cls.Col}>
                                                <h1 className={cls.colTitle}>
                                                        {this.props.game.col1.heading}
                                                </h1>
                                                {this.state.targets[0]}
                                                {this.state.targets[1]}
                                                {this.state.targets[2]}
                                        </div>
                                        <div className={cls.Col}>
                                                <h1 className={cls.colTitle}>
                                                        {this.props.game.col2.heading}
                                                </h1>
                                                {this.state.targets[3]}
                                                {this.state.targets[4]}
                                                {this.state.targets[5]}
                                        </div>
                                        <div className={cls.Col}>
                                                <h1 className={cls.colTitle}>
                                                        {this.props.game.col3.heading}
                                                </h1>
                                                {this.state.targets[6]}
                                                {this.state.targets[7]}
                                                {this.state.targets[8]}
                                        </div>
                                        <div className={cls.Col}>
                                                <h1 className={cls.colTitle}>
                                                        {this.props.game.col4.heading}
                                                </h1>
                                                {this.state.targets[9]}
                                                {this.state.targets[10]}
                                                {this.state.targets[11]}
                                        </div>
                                        <div className={cls.Col}>
                                                <h1 className={cls.colTitle}>
                                                        {this.props.game.col5.heading}
                                                </h1>
                                                {this.state.targets[12]}
                                                {this.state.targets[13]}
                                                {this.state.targets[14]}
                                        </div>
                                </div>
                                <div className={cls.CardDeckContainer}>
                                        <div className={cls.CardStackLocation}>{this.state.cards}</div>
                                        <div className={cls.IncorrectScore}>
                                                <h2>Incorrect</h2>
                                                <h4 className={cls.scoreText}>{this.state.wrongAnswers}</h4>
                                        </div>
                                        <div className={cls.CorrectScore}>
                                                <h2>Correct</h2>
                                                <h4 className={cls.scoreText}>{this.state.correctAnswers}</h4>
                                        </div>
                                </div>
                                <Paper className={cls.ScreenSizeMessage}>
                                        <h1>
                                                This game is best played with a screen width of at least 700
                                                px.
                                        </h1>
                                        <h3>Try turning your device or changing to a wider device.</h3>
                                </Paper>
                        </div>
                );
        }
}

export default GameTemplate;
