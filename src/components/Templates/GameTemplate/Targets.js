import React, { useState, useRef, useEffect } from 'react';

import cls from './GameTemplate.module.css';

const Targets = props => {
        // Targets need onDragOver() and onDrop().
        // create an array of Targets
        // Targets need a ref that can be tracked
        let targets = [];
        for (let i = 0; i < 5; i++) {
                for (let k = 0; k < 3; k++) {
                        targets.push(
                                <div
                                        id={`col${i}_target${k}`}
                                        key={`col${i}_target${k}`}
                                        className={cls.NewTarget}
                                        onDragOver={props.handleDragOver}
                                        onDrop={props.handleDrop}
                                />
                        );
                }
        }
        return (
                <div>
                        <div className={cls.NewGameBoard}>
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
                </div>
        );
};

export default Targets;
