import React from 'react';

import cls from './GameTemplate.module.css';

const gameBoard = props => {
        return (
                <div>
                        <div className={cls.gameBoard}>
                                <div className={cls.col1}>
                                        <h4>{props.col1Heading}</h4>
                                        <div
                                                className={[cls.targetCol1, cls.dropZone].join(' ')}
                                                id={cls.targCol1Row1}
                                        />
                                        <div
                                                className={[cls.targetCol1, cls.dropZone].join(' ')}
                                                id={cls.targCol1Row2}
                                        />
                                        <div
                                                className={[cls.targetCol1, cls.dropZone].join(' ')}
                                                id={cls.targCol1Row3}
                                        />
                                </div>
                                <div className={cls.col2}>
                                        <h4>{props.col2Heading}</h4>
                                        <div
                                                className={[cls.targetCol2, cls.dropZone].join(' ')}
                                                id={cls.targCol2Row1}
                                        />
                                        <div
                                                className={[cls.targetCol2, cls.dropZone].join(' ')}
                                                id={cls.targCol2Row2}
                                        />
                                        <div
                                                className={[cls.targetCol2, cls.dropZone].join(' ')}
                                                id={cls.targCol2Row3}
                                        />
                                </div>
                                <div className={cls.col3}>
                                        <h4>{props.col3Heading}</h4>
                                        <div
                                                className={[cls.targetCol3, cls.dropZone].join(' ')}
                                                id={cls.targCol3Row1}
                                        />
                                        <div
                                                className={[cls.targetCol3, cls.dropZone].join(' ')}
                                                id={cls.targCol3Row2}
                                        />
                                        <div
                                                className={[cls.targetCol3, cls.dropZone].join(' ')}
                                                id={cls.targCol3Row3}
                                        />
                                </div>

                                <div className={cls.col4}>
                                        <h4>{props.col1Heading}</h4>
                                        <div
                                                className={[cls.targetCol4, cls.dropZone].join(' ')}
                                                id={cls.targCol4Row1}
                                        />
                                        <div
                                                className={[cls.targetCol4, cls.dropZone].join(' ')}
                                                id={cls.targCol4Row2}
                                        />
                                        <div
                                                className={[cls.targetCol4, cls.dropZone].join(' ')}
                                                id={cls.targCol4Row3}
                                        />
                                </div>
                                <div className={cls.col5}>
                                        <h4>{props.col1Heading}</h4>
                                        <div
                                                className={[cls.targetCol5, cls.dropZone].join(' ')}
                                                id={cls.targCol5Row1}
                                        />
                                        <div
                                                className={[cls.targetCol5, cls.dropZone].join(' ')}
                                                id={cls.targCol5Row2}
                                        />
                                        <div
                                                className={[cls.targetCol5, cls.dropZone].join(' ')}
                                                id={cls.targCol5Row3}
                                        />
                                </div>
                        </div>
                </div>
        );
};

export default gameBoard;
