import React from 'react';

import cls from './GameTemplate.module.css';

const GameBoard = props => {
        const targets = (
                <React.Fragment>
                        <div
                                className={cls.Target}
                                onDragOver={props.draggingOver}
                                onDrop={props.droppedOn}
                        />
                        <div
                                className={cls.Target}
                                onDragOver={props.draggingOver}
                                onDrop={props.droppedOn}
                        />
                        <div
                                className={cls.Target}
                                onDragOver={props.draggingOver}
                                onDrop={props.droppedOn}
                        />
                </React.Fragment>
        );
        return (
                <div className={cls.GameBoard}>
                        <div className={cls.col1}>
                                <h1 className={cls.colTitle}>{props.col1.heading}</h1>
                                {targets}
                        </div>
                        <div className={cls.col2}>
                                <h1 className={cls.colTitle}>{props.col2.heading}</h1>
                                {targets}
                        </div>
                        <div className={cls.col3}>
                                <h1 className={cls.colTitle}>{props.col3.heading}</h1>
                                {targets}
                        </div>
                        <div className={cls.col4}>
                                <h1 className={cls.colTitle}>{props.col4.heading}</h1>
                                {targets}
                        </div>
                        <div className={cls.col5}>
                                <h1 className={cls.colTitle}>{props.col5.heading}</h1>
                                {targets}
                        </div>
                </div>
        );
};

export default GameBoard;
