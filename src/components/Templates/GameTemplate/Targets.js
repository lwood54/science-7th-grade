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

        const appendChild = (targetID, dragEl, status) => {
                if (status === 'correct') {
                        targets.forEach(target => {
                                // This strategy may not allow React to track DOM changes, but
                                // there are no more important changes ontop of these child elements
                                if (target.ref.current.id === targetID) {
                                        target.ref.current.appendChild(dragEl);
                                        target.ref.current.style.backgroundColor = '#00897b';
                                        dragEl.setAttribute('draggable', false);
                                        dragEl.classList.add(cls.Correct);
                                }
                        });
                } else if (status === 'incorrect') {
                        targets.forEach(target => {
                                // WRONG BOX
                                if (target.ref.current.id === targetID) {
                                        target.ref.current.appendChild(dragEl);
                                        target.ref.current.style.backgroundColor = '#ba000d';
                                }
                        });
                        // props.handleIncorrect();
                }
        };
        const handleDragOver = e => {
                e.preventDefault();
        };
        const handleDrop = e => {
                if (!e.target.id.includes('target')) {
                        return false;
                } else if (e.target.children.length > 0) {
                        // if the drag target already has a child, it's a no go
                        return false;
                } else {
                        let dragItemID = e.dataTransfer.getData('text');
                        let dragEl = document.getElementById(dragItemID);
                        let targetID = e.target.id;
                        if (dragItemID.includes('col1')) {
                                if (
                                        targetID === 'target0' ||
                                        targetID === 'target1' ||
                                        targetID === 'target2'
                                ) {
                                        // FIX THIS, IT WORKED ONCE, THEN I UPDATED BELOW AND IT WENT
                                        // BACK TO DOING WHAT IT WAS DOING
                                        props.handleCorrect();
                                        // appendChild when CORRECT
                                        appendChild(targetID, dragEl, 'correct');
                                } else {
                                        props.handleIncorrect();
                                        appendChild(targetID, dragEl, 'incorrect');
                                }
                        } else if (dragItemID.includes('col2')) {
                                if (
                                        targetID === 'target3' ||
                                        targetID === 'target4' ||
                                        targetID === 'target5'
                                ) {
                                        // appendChild when CORRECT
                                        appendChild(targetID, dragEl, 'correct');
                                } else {
                                        appendChild(targetID, dragEl, 'incorrect');
                                }
                        } else if (dragItemID.includes('col3')) {
                                if (
                                        targetID === 'target6' ||
                                        targetID === 'target7' ||
                                        targetID === 'target8'
                                ) {
                                        // appendChild when CORRECT
                                        appendChild(targetID, dragEl, 'correct');
                                } else {
                                        appendChild(targetID, dragEl, 'incorrect');
                                }
                        } else if (dragItemID.includes('col4')) {
                                if (
                                        targetID === 'target9' ||
                                        targetID === 'target10' ||
                                        targetID === 'target11'
                                ) {
                                        // appendChild when CORRECT
                                        appendChild(targetID, dragEl, 'correct');
                                } else {
                                        appendChild(targetID, dragEl, 'incorrect');
                                }
                        } else if (dragItemID.includes('col5')) {
                                if (
                                        targetID === 'target12' ||
                                        targetID === 'target13' ||
                                        targetID === 'target14'
                                ) {
                                        // appendChild when CORRECT
                                        appendChild(targetID, dragEl, 'correct');
                                } else {
                                        appendChild(targetID, dragEl, 'incorrect');
                                }
                        }
                }
        };
        for (let i = 0; i < 15; i++) {
                targets.push(
                        <div
                                id={`target${i}`}
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
        );
};

export default Targets;
