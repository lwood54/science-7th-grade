import React from 'react';

import cls from './NewGameTemplate.module.css';

const CardDeck = props => {
        let cardsArray = [];
        let id = 0;
        const gameStuff = Object.keys(props);
        cardsArray = gameStuff.map(col => {
                if (col.includes('col')) {
                        return Object.keys(props[col]).map(item => {
                                id++;
                                console.log('col:', col);
                                if (item === 'image') {
                                        return (
                                                <div
                                                        className={cls.CardContainer}
                                                        key={id}
                                                        id={`${col}_${item}`}
                                                        onDragStart={props.startingDrag}
                                                        draggable
                                                >
                                                        <img
                                                                src={props[col][item]}
                                                                alt="game piece"
                                                                className={cls.Image}
                                                                draggable="false"
                                                        />
                                                </div>
                                        );
                                } else if (item === 'hint' || item === 'definition') {
                                        return (
                                                <div
                                                        key={id}
                                                        id={`${col}_${item}`}
                                                        className={cls.CardContainer}
                                                        onDragStart={props.startingDrag}
                                                        draggable
                                                >
                                                        <div className={cls.CardContent}>
                                                                {props[col][item]}
                                                        </div>
                                                </div>
                                        );
                                }
                                return null;
                        });
                }
                return null;
        });
        console.log(cardsArray);
        return <div className={cls.CardStackLocation}>{cardsArray}</div>;
};

export default CardDeck;
