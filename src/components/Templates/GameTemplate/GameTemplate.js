import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import NavigationBar from '../../Navigation/NavigationBar/NavigationBar';

import GameBoard from './GameBoard';
import CardDeck from './CardDeck';

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
                container: (
                        <div
                                id="container"
                                style={{ height: '100px', width: '150px', border: '2px solid black' }}
                        />
                ),
                addItem: (
                        <p id="add_item" style={{ height: '50px', width: '100px', border: '2px solid red' }}>
                                I have been added.
                        </p>
                )
        };

        appendChild = () => {
                const container = document.getElementById('container');
                const addItem = document.getElementById('add_item');
        };

        componendDidUpdate() {
                console.log('componentDidUpdate???');
        }

        handleDrag = event => {
                event.dataTransfer.setData('text', event.target.id);
        };
        handleDragOver = event => {
                event.preventDefault();
        };

        setCorrect(targ, dragElement) {
                targ.style.backgroundColor = '#00897b';
                dragElement.style.backgroundColor = '#00897b';
                dragElement.style.color = 'white';
                dragElement.setAttribute('draggable', false);
                dragElement.style.boxShadow = 'none';
                dragElement.style.cursor = 'not-allowed';
        }

        setWrong(targ, dragElement) {
                targ.style.backgroundColor = '#ba000d';
                dragElement.style.boxShadow = '2px 2px 4px black';
        }

        // mouseOver = ev => {
        //         ev.target.style.transform = 'scale(1.1)';
        //         ev.target.style.transition = 'all 0.3s';
        // };

        // mouseOut = ev => {
        //         ev.target.style.transform = 'scale(1.0)';
        //         ev.target.style.transition = 'all 0.1s';
        // };

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

        handleDrop = event => {
                console.log('game: ', this.props.game);
                if (!event.target.classList[0].includes('Target')) {
                        return false;
                } else {
                        let parentClasses = event.target.parentNode.classList;
                        let parentEntries = Object.entries(parentClasses)[0][1];
                        let data = event.dataTransfer.getData('text');
                        // let targ = event.target;
                        let dragItem = document.getElementById(data);
                        let dataIndex3 = parseInt(data.split('')[3]);
                        if (parentEntries.includes('col5')) {
                                if (dataIndex3 === 5) {
                                        this.updateCorrect();
                                } else {
                                        this.updateWrong();
                                }
                        } else if (parentEntries.includes('col4')) {
                                if (dataIndex3 === 4) {
                                        this.updateCorrect();
                                } else {
                                        this.updateWrong();
                                }
                        } else if (parentEntries.includes('col3')) {
                                if (dataIndex3 === 3) {
                                        this.updateCorrect();
                                } else {
                                        this.updateWrong();
                                }
                        } else if (parentEntries.includes('col2')) {
                                if (dataIndex3 === 2) {
                                        this.updateCorrect();
                                } else {
                                        this.updateWrong();
                                }
                        } else if (parentEntries.includes('col1')) {
                                if (dataIndex3 === 1) {
                                        this.updateCorrect();
                                } else {
                                        this.updateWrong();
                                }
                        }
                }
        };

        // handleDrop = event => {
        //         if (event.target.children.length > 0) {
        //                 return false;
        //         } else if (!event.target.classList[0].includes('Target')) {
        //                 return false;
        //         } else {
        //                 let parentClasses = event.target.parentNode.classList;
        //                 let parentEntries = Object.entries(parentClasses)[0][1];
        //                 try {
        //                         event.preventDefault();
        //                         let data = event.dataTransfer.getData('text');
        //                         let targ = event.target;
        //                         let dragItem = document.getElementById(data);
        //                         targ.appendChild(document.getElementById(data));
        //                         let dataIndex3 = parseInt(data.split('')[3]);
        //                         if (parentEntries.includes('col5')) {
        //                                 if (dataIndex3 === 5) {
        //                                         let updtCorrect = this.state.correctAnswers;
        //                                         updtCorrect += 1;
        //                                         console.log(updtCorrect);
        //                                         this.setState({ correctAnswers: updtCorrect });
        //                                         // this.setCorrect(targ, dragItem);
        //                                 } else {
        //                                         this.setWrong(targ, dragItem);
        //                                 }
        //                         } else if (parentEntries.includes('col4')) {
        //                                 if (dataIndex3 === 4) {
        //                                         this.setCorrect(targ, dragItem);
        //                                 } else {
        //                                         this.setWrong(targ, dragItem);
        //                                 }
        //                         } else if (parentEntries.includes('col3')) {
        //                                 if (dataIndex3 === 3) {
        //                                         this.setCorrect(targ, dragItem);
        //                                 } else {
        //                                         this.setWrong(targ, dragItem);
        //                                 }
        //                         } else if (parentEntries.includes('col2')) {
        //                                 if (dataIndex3 === 2) {
        //                                         this.setCorrect(targ, dragItem);
        //                                 } else {
        //                                         this.setWrong(targ, dragItem);
        //                                 }
        //                         } else if (parentEntries.includes('col1')) {
        //                                 if (dataIndex3 === 1) {
        //                                         this.setCorrect(targ, dragItem);
        //                                 } else {
        //                                         this.setWrong(targ, dragItem);
        //                                 }
        //                         }
        //                 } catch (err) {
        //                         console.log('error: ', err);
        //                 }
        //         }
        // };

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
                                <h1 onClick={this.appendChild} className={cls.Title}>
                                        {this.props.title} Review Game
                                </h1>
                                <div>
                                        <button onClick={this.appendChild}>append</button>
                                        {this.state.container}
                                        {this.state.addItem}
                                </div>

                                <GameBoard
                                        draggingOver={this.handleDragOver}
                                        droppedOn={this.handleDrop}
                                        {...this.props.game}
                                />
                                <div className={cls.CardDeckContainer}>
                                        <CardDeck startingDrag={this.handleDrag} {...this.props.game} />
                                </div>
                        </div>
                );
        }
}

export default GameTemplate;
