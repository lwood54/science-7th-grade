import React, { Component } from 'react';

import NavigationBar from '../../Navigation/NavigationBar/NavigationBar';
// import GameBoard from './GameBoard';
import NewGameBoard from './NewGameBoard';
import CardDeck from './CardDeck';

// import cls from './GameTemplate.module.css';
import cls from './NewGameTemplate.module.css';

// need to import game object that will be passed in the props
// and used for rendering the cards and column headings.

class GameTemplate extends Component {
        handleDrag = event => {
                event.dataTransfer.setData('text', event.target.id);
                console.log('event.target.id: ', event.target.id);
        };
        handleDragOver = event => {
                event.preventDefault();
                console.log('Allowing Drop');
        };

        handleDrop = event => {
                event.preventDefault();
                let data = event.dataTransfer.getData('text');
                event.target.appendChild(document.getElementById(data));
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
                                <h1 className={cls.Title}>{this.props.title} Review Game</h1>

                                <NewGameBoard
                                        draggingOver={this.handleDragOver}
                                        droppedOn={this.handleDrop}
                                        {...this.props.game}
                                />
                                <div className={cls.CardDeckContainer}>
                                        <CardDeck startingDrag={this.handleDrag} {...this.props.game} />
                                </div>
                                <div
                                        id="dragItem1"
                                        className={cls.DragItem}
                                        onDragStart={this.handleDrag}
                                        draggable
                                >
                                        <span className={cls.textBox}>DRAG</span>
                                </div>
                                <div
                                        className={cls.DropBox}
                                        onDragOver={this.handleDragOver}
                                        onDrop={this.handleDrop}
                                />
                        </div>
                );
        }
}

export default GameTemplate;
