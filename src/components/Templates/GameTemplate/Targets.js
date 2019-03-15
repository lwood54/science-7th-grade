import React from 'react';

import cls from './GameTemplate.module.css';

const useTargets = (handleDragOver, handleDrop, handleTargetClick) => {
        let newTargets = [];
        for (let i = 1; i < 6; i++) {
                for (let k = 1; k < 4; k++) {
                        newTargets.push(
                                <div
                                        id={`col${i}_target${k}`}
                                        key={`col${i}_target${k}`}
                                        className={cls.NewTarget}
                                        onDragOver={handleDragOver}
                                        onDrop={handleDrop}
                                        onClick={handleTargetClick}
                                />
                        );
                }
        }
        return newTargets;
};

export default useTargets;
