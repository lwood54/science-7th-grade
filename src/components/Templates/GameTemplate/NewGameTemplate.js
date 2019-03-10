// use React's Hooks to remake GameTemplate with a functional component
// tryout useRef()
// try React.lazy()
// try to import cards and targets as separate components again since
// we can use hooks like useEffect to update the DOM while change occurs.
// useEffect to monitor drag and drop? changes in DOM?
import React, { useState, useEffect, useRef } from 'react';

import Targets from './Targets';
import Cards from './Cards';
import cls from './GameTemplate.module.css';

const NewGameTemplate = props => {
        return (
                <div className={cls.NewGameContainer}>
                        <h1 className={cls.Title}>New Game Template</h1>
                        <Targets game={props.game} />
                        <Cards game={props.game} />
                </div>
        );
};

export default NewGameTemplate;
