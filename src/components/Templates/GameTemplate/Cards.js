import React, { useState } from 'react';

import cls from './GameTemplate.module.css';

const Cards = React.forwardRef((props, ref) => {
        const handleDrag = e => {
                e.dataTransfer.setData('text', e.target.id);
        };
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

        let cards = [];
        // copy the game object so this can be manipulated and used to update state
        let gameCopy = { ...props.game };
        // create an array of columns (keys) that can be iterated and used to
        // access their values
        let arrayOfCols = Object.keys(gameCopy);
        // chose a forEach because I did not want a return on every loop
        arrayOfCols.forEach(col => {
                let itemsArray = Object.keys(gameCopy[col]);
                itemsArray.forEach(item => {
                        if (item === 'image') {
                                // add an image card to the array
                                cards.push(
                                        <div
                                                className={cls.NewCard}
                                                key={`${col}_${item}`}
                                                id={`${col}_${item}`}
                                                onDragStart={handleDrag}
                                                draggable
                                                // onClick={this.handleCardClick}
                                        >
                                                <img
                                                        src={gameCopy[col][item]}
                                                        alt="game piece"
                                                        className={cls.Image}
                                                        draggable="false"
                                                />
                                        </div>
                                );
                        } else if (item === 'hint' || item === 'definition') {
                                // excluding the heading key/value, add cards
                                // to the card array and set their properties
                                cards.push(
                                        <div
                                                key={`${col}_${item}`}
                                                id={`${col}_${item}`}
                                                className={cls.NewCard}
                                                onDragStart={handleDrag}
                                                draggable
                                                // onClick={this.handleCardClick}
                                        >
                                                {gameCopy[col][item]}
                                        </div>
                                );
                        }
                });
        });
        let shuffledCards = shuffleArray(cards);
        return (
                <div className={cls.NewCardDeckContainer}>
                        <div className={cls.NewCardStackLocation} ref={ref}>
                                {shuffledCards}
                        </div>
                </div>
        );
});

export default Cards;
