import React from 'react';

import cls from './GameTemplate.module.css';

const shuffleArray = array => {
        // copy array to manipulate
        let arrayCopy = [...array];
        let mixedArray = [];
        // loop through copy until no elements left
        while (arrayCopy.length > 0) {
                let randNum = Math.floor(Math.random() * arrayCopy.length);
                // add removed elements to mixedArray as looping occurs
                mixedArray.push(arrayCopy.splice(randNum, 1)[0]);
        }
        return mixedArray;
};

const CardDeck = props => {
        let cardsArray = [];
        let id = 0;
        const gameStuff = Object.keys(props);
        cardsArray = gameStuff.map(col => {
                if (col.includes('col')) {
                        return Object.keys(props[col]).map(item => {
                                id++;
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
        let allCards = [];
        cardsArray.forEach(item => {
                if (Array.isArray(item)) {
                        item.forEach(card => {
                                allCards.push(card);
                        });
                } else {
                        allCards.push(item);
                }
        });
        let shuffledCards = shuffleArray(allCards);
        return <div className={cls.CardStackLocation}>{shuffledCards}</div>;
};

export default CardDeck;
