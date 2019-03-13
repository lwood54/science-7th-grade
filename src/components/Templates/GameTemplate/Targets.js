import React, { useState, useRef, useEffect } from 'react';

import cls from './GameTemplate.module.css';

const Targets = React.forwardRef((props, ref) => {
        // Targets need onDragOver() and onDrop().
        // create an array of Targets
        // Targets need a ref that can be tracked
        const col1Ref = useRef();
        const col2Ref = useRef();
        const col3Ref = useRef();
        const col4Ref = useRef();
        const col5Ref = useRef();
        let targets = [];
        for (let i = 1; i < 6; i++) {
                for (let k = 1; k < 4; k++) {
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
        console.log('targets in Targets: ', targets);
        return targets;
});

export default Targets;

// return (
//         <div className={cls.NewGameBoard} ref={ref}>
//                 <div className={cls.NewCol} ref={col1Ref}>
//                         <h1 className={cls.NewColTitle}>{props.game.col1.heading}</h1>
//                         {targets[0]}
//                         {targets[1]}
//                         {targets[2]}
//                 </div>
//                 <div className={cls.NewCol} ref={col2Ref}>
//                         <h1 className={cls.NewColTitle}>{props.game.col2.heading}</h1>
//                         {targets[3]}
//                         {targets[4]}
//                         {targets[5]}
//                 </div>
//                 <div className={cls.NewCol} ref={col3Ref}>
//                         <h1 className={cls.NewColTitle}>{props.game.col3.heading}</h1>
//                         {targets[6]}
//                         {targets[7]}
//                         {targets[8]}
//                 </div>
//                 <div className={cls.NewCol} ref={col4Ref}>
//                         <h1 className={cls.NewColTitle}>{props.game.col4.heading}</h1>
//                         {targets[9]}
//                         {targets[10]}
//                         {targets[11]}
//                 </div>
//                 <div className={cls.NewCol} ref={col5Ref}>
//                         <h1 className={cls.NewColTitle}>{props.game.col5.heading}</h1>
//                         {targets[12]}
//                         {targets[13]}
//                         {targets[14]}
//                 </div>
//         </div>
// );
