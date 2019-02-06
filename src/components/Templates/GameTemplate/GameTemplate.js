import React, { Component } from 'react';

import NavigationBar from '../../Navigation/NavigationBar/NavigationBar';

// import GameBoard from "./GameBoard";
// import CardDeck from "./CardDeck";

import cls from './GameTemplate.module.css';

// need to import game object that will be passed in the props
// and used for rendering the cards and column headings.

class GameTemplate extends Component {
        /// WHAT MAY NEED TO HAPPEN FOR THIS TO WORK NOW ///
        // may have to store a list of the targets in state
        // store a list of cards in state
        // keep track when they are updated, remove card from array
        // when it has been dropped on correct div

        state = {
                correctAnswers: 0,
                wrongAnswers: 0,
                targets: [],
                cards: [],
                incorrectCards: []
        };

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

        componentDidUpdate() {}

        componentDidMount() {
                let cards = [];
                let gameCopy = { ...this.props.game };
                let arrayOfCols = Object.keys(gameCopy);
                arrayOfCols.forEach(col => {
                        let itemsArray = Object.keys(gameCopy[col]);
                        itemsArray.forEach(item => {
                                if (item === 'image') {
                                        cards.push(
                                                <div
                                                        className={cls.CardContainer}
                                                        key={`${col}_${item}`}
                                                        id={`${col}_${item}`}
                                                        onDragStart={this.handleDrag}
                                                        draggable
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
                                        cards.push(
                                                <div
                                                        key={`${col}_${item}`}
                                                        id={`${col}_${item}`}
                                                        className={cls.CardContainer}
                                                        onDragStart={this.handleDrag}
                                                        draggable
                                                >
                                                        <div className={cls.CardContent}>
                                                                {gameCopy[col][item]}
                                                        </div>
                                                </div>
                                        );
                                }
                        });
                });
                let targets = [];
                // arrayOfCols.forEach(col => {
                for (let i = 1; i <= 5; i++) {
                        for (let j = 1; j <= 3; j++) {
                                targets.push(
                                        <div
                                                className={cls.Target}
                                                onDragOver={this.handleDragOver}
                                                onDrop={this.handleDrop}
                                                id={`col${i}_target${j}`}
                                                key={`col${i}_target${j}`}
                                        />
                                );
                        }
                }
                console.log('targets: ', targets);
                let shuffledCards = this.shuffleArray(cards);
                this.setState({
                        targets: targets,
                        cards: shuffledCards
                });
        }

        handleDrag = event => {
                console.log('event.target.id: ', event.target.id);
                event.dataTransfer.setData('text', event.target.id);
        };
        handleDragOver = event => {
                console.log(event.target.id);
                event.preventDefault();
        };

        updateCorrect() {
                let updtCorrect = this.state.correctAnswers;
                updtCorrect += 1;
                console.log('CORRECT: ', updtCorrect);
                this.setState({ correctAnswers: updtCorrect });
        }

        updateWrong() {
                let updtWrong = this.state.wrongAnswers;
                updtWrong += 1;
                console.log('WRONG: ', updtWrong);
                this.setState({ wrongAnswers: updtWrong });
        }

        appendChild = (targetId, cardId) => {
                let targetsCopy = [...this.state.targets];
                let cardsCopy = [...this.state.cards];
                let incorrectCardsCopy = [...this.state.incorrectCards];
                console.log('incorrectCardsCopy: ', incorrectCardsCopy);
                console.log('targetId: ', targetId);
                console.log('cardId: ', cardId);
                let targetIdIndex3 = targetId.split('')[3];
                // console.log("targetIdIndex3: ", targetIdIndex3);
                let cardIdIndex3 = cardId.split('')[3];
                // console.log("cardIdIndex3: ", cardIdIndex3);
                if (targetIdIndex3 === cardIdIndex3) {
                        this.updateCorrect();
                        targetsCopy.forEach((target, i) => {
                                // console.log('target.props.id: ', target.props.id);
                                if (target.props.id === targetId) {
                                        console.log('this is the target!: ', target);
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
                                                                                cls.Correct
                                                                        ].join(' ')}
                                                                        draggable="false"
                                                                >
                                                                        {card.props.children}
                                                                </div>
                                                        );
                                                        cardsCopy.splice(k, 1);
                                                }
                                        });
                                        if (incorrectCardsCopy.length > 0) {
                                                targetsCopy.forEach((target, i) => {
                                                        if (target.props.children) {
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
                        this.updateWrong();
                        targetsCopy.forEach((target, i) => {
                                if (target.props.id === targetId) {
                                        console.log('this is the target!: ', target);
                                        console.log('target.props.children.', target.props.children);
                                        cardsCopy.forEach((card, k) => {
                                                if (card.props.id === cardId) {
                                                        console.log(
                                                                'INSIDE updateWrong. run when dropped wrong card?'
                                                        );
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
                                        if (incorrectCardsCopy.length > 0) {
                                                targetsCopy.forEach((target, i) => {
                                                        if (target.props.children) {
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
                                                console.log('incorrectCardsCopy: ', incorrectCardsCopy);
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

                this.setState({
                        targets: targetsCopy,
                        cards: cardsCopy,
                        incorrectCards: incorrectCardsCopy
                });
        };

        handleDrop = ev => {
                if (!ev.target.classList[0].includes('Target')) {
                        return false;
                } else if (ev.target.children.length > 0) {
                        console.log('already child present');
                        return false;
                } else {
                        ev.preventDefault();
                        let targetId = ev.target.id;
                        let cardId = ev.dataTransfer.getData('text');
                        console.log('INSIDE handleDrop: targetId: ', targetId);
                        console.log('INSIDE handleDrop: cardId: ', cardId);
                        this.appendChild(targetId, cardId);
                }
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
                // get the object to be rendered with heading at the top of a column
                // eventually i will need to have a stack of cards that include all of the
                // other parts of the clumn objects that will also have to be
                // drag n drop enabled, the targets will have to be a grid of empty boxes
                // const col1 = Object.entries(this.props.game.col1).map(item => item);
                return (
                        <div style={{ width: '100%' }}>
                                <NavigationBar
                                        title={this.props.title}
                                        quizletLink={quizletLink}
                                        homeLink={homeLink}
                                        unitMain={unitMain}
                                />
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
                                </div>
                        </div>
                );
        }
}

export default GameTemplate;

/*
<GameBoard
	draggingOver={this.handleDragOver}
        droppedOn={this.handleDrop}
        {...this.props.game}
/>
<h1 onClick={this.appendChild} className={cls.Title}>
        {this.props.title} Review Game
</h1>
<div>
        <button onClick={this.appendChild}>append</button>
        {this.state.targets}
        {this.state.cards}
</div>

<div className={cls.CardDeckContainer}>
        <CardDeck startingDrag={this.handleDrag} {...this.props.game} />
</div>
*/
