import React from 'react';

import cls from './NewGameTemplate.module.css';

const CardDeck = props => {
        let cardsArray = [];
        const gameStuff = Object.keys(props);
        cardsArray = gameStuff.map(col => {
                return Object.keys(props[col]).map(item => {
                        if (item === 'image') {
                                return (
                                        <div
                                                className={cls.CardContainer}
                                                key={props[col][item]}
                                                id={props[col][item]}
                                                onDragStart={props.startingDrag}
                                                draggable
                                        >
                                                <img
                                                        src={props[col][item]}
                                                        alt="game piece"
                                                        className={cls.Image}
                                                />
                                        </div>
                                );
                        } else if (item === 'hint' || item === 'definition') {
                                return (
                                        <div
                                                key={props[col][item]}
                                                id={props[col][item]}
                                                className={cls.CardContainer}
                                                onDragStart={props.startingDrag}
                                                draggable
                                        >
                                                <div className={cls.CardContent}>{props[col][item]}</div>
                                        </div>
                                );
                        }
                        return null;
                });
        });
        return (
                <div style={{ width: '220px', margin: '0 auto', border: '2px solid black' }}>
                        {cardsArray}
                </div>
        );
};

export default CardDeck;
