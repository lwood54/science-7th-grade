import React, { useRef, useEffect } from 'react';

import cls from './GameTemplate.module.css';

const Targets = props => {
        // Targets need onDragOver() and onDrop().
        // create an array of Targets
        // Targets need a ref that can be tracked
        let targetRefs = [];
        let targets = [];
        const target1 = useRef();
        targetRefs.push(target1);
        const target2 = useRef();
        targetRefs.push(target2);
        const target3 = useRef();
        targetRefs.push(target3);
        const target4 = useRef();
        targetRefs.push(target4);
        const target5 = useRef();
        targetRefs.push(target5);
        const target6 = useRef();
        targetRefs.push(target6);
        const target7 = useRef();
        targetRefs.push(target7);
        const target8 = useRef();
        targetRefs.push(target8);
        const target9 = useRef();
        targetRefs.push(target9);
        const target10 = useRef();
        targetRefs.push(target10);
        const target11 = useRef();
        targetRefs.push(target11);
        const target12 = useRef();
        targetRefs.push(target12);
        const target13 = useRef();
        targetRefs.push(target13);
        const target14 = useRef();
        targetRefs.push(target14);
        const target15 = useRef();
        targetRefs.push(target15);
        const handleDragOver = e => {
                e.preventDefault();
        };
        const handleDrop = e => {
                console.log(e.target.id);
        };
        for (let i = 0; i < 15; i++) {
                targets.push(
                        <div
                                id={i}
                                key={i}
                                ref={targetRefs[i]}
                                className={cls.NewTarget}
                                onDragOver={handleDragOver}
                                onDrop={handleDrop}
                        />
                );
        }
        return (
                <div className={cls.NewGameBoard}>
                        <div className={cls.NewCol}>
                                <h1 className={cls.colTitle}>{props.game.col1.heading}</h1>
                                {targets[0]}
                                {targets[1]}
                                {targets[2]}
                        </div>
                        <div className={cls.NewCol}>
                                <h1 className={cls.colTitle}>{props.game.col2.heading}</h1>
                                {targets[3]}
                                {targets[4]}
                                {targets[5]}
                        </div>
                        <div className={cls.NewCol}>
                                <h1 className={cls.colTitle}>{props.game.col3.heading}</h1>
                                {targets[6]}
                                {targets[7]}
                                {targets[8]}
                        </div>
                        <div className={cls.NewCol}>
                                <h1 className={cls.colTitle}>{props.game.col4.heading}</h1>
                                {targets[9]}
                                {targets[10]}
                                {targets[11]}
                        </div>
                        <div className={cls.NewCol}>
                                <h1 className={cls.colTitle}>{props.game.col5.heading}</h1>
                                {targets[12]}
                                {targets[13]}
                                {targets[14]}
                        </div>
                </div>
        );
};

export default Targets;
