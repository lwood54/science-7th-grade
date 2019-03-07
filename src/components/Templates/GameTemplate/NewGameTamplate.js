import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
// import Dialog from '@material-ui/core/Dialog';
// import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';
// import Slide from '@material-ui/core/Slide';
// import Paper from '@material-ui/core/Paper';

import NavigationBar from '../../Navigation/NavigationBar/NavigationBar';
import './NewGameTemplate.module.css';

import cls from './NewGameTemplate.module.css';

class NewGameTemplate extends Component {
        targetRef = React.createRef();
        targetRef2 = React.createRef();

        handleDrag = e => {
                console.log('handleDrag: ', e.target.id);
                e.dataTransfer.setData('text', e.target.id);
        };

        handleDragOver = e => {
                e.preventDefault();
                // console.log('handleDragOver: ', e);
        };

        handleDrop = e => {
                console.log('handleDrop: ', e.target.className);
                e.preventDefault();
                let targetId = e.target.id;
                let cardId = e.dataTransfer.getData('text');
                console.log('e.target.id: ', e.target.id);
                console.log(this.targetRef.id);
                // console.log('cardId: ', cardId);
                // let target = document.getElementById(this.targetRef.current.id);
                // target.appendChild(document.getElementById(cardId));
        };

        render() {
                const navHome = this.props.vertMenuItems[0]['Home'];
                const navUnit = this.props.vertMenuItems[1]['Unit Page'];
                const navGame = this.props.vertMenuItems[2]['Game'];
                const navQuizlet = this.props.vertMenuItems[3]['Quizlet'];
                const nextSection = (
                        <Link to={`${navGame}b`} className={cls.Link}>
                                <Button variant="contained" color="primary">
                                        Move on to Section 2
                                </Button>
                        </Link>
                );
                return (
                        <div style={{ minWidth: '100vw', minHeight: '100vh', backgroundColor: '#ffecb3' }}>
                                <NavigationBar
                                        title={this.props.title}
                                        quizletLink={navQuizlet}
                                        homeLink={navHome}
                                        unitMain={navUnit}
                                />
                                <div className={cls.GameBoard}>
                                        <div
                                                ref={el => (this.targetRef = el)}
                                                className={cls.Target1}
                                                id="target1"
                                                onDrop={this.handleDrop}
                                                onDragOver={this.handleDragOver}
                                        />
                                        <div
                                                ref={el => (this.targetRef = el)}
                                                className={cls.Target2}
                                                id="target2"
                                                onDrop={this.handleDrop}
                                                onDragOver={this.handleDragOver}
                                        />
                                        <div
                                                className={cls.Moveable1}
                                                id="moveable1"
                                                onDragStart={this.handleDrag}
                                                draggable
                                        />
                                </div>
                        </div>
                );
        }
}

export default NewGameTemplate;
