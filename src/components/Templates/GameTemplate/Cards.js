import React from 'react';

import cls from './NewGameTemplate.module.css';

const useCards = (game, handleDrag, handleCardClick, shuffleArray) => {
        let newCards = [];
        // copy the game object so this can be manipulated and used to update state
        let gameCopy = { ...game };
        // create an array of columns (keys) that can be iterated and used to
        // access their values
        let arrayOfCols = Object.keys(gameCopy);
        // chose a forEach because I did not want a return on every loop
        arrayOfCols.forEach(col => {
                let itemsArray = Object.keys(gameCopy[col]);
                itemsArray.forEach(item => {
                        if (item === 'image') {
                                // add an image card to the array
                                newCards.push(
                                        <div
                                                className={cls.NewCard}
                                                key={`${col}_${item}`}
                                                id={`${col}_${item}`}
                                                onDragStart={handleDrag}
                                                draggable
                                                onClick={handleCardClick}
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
                                newCards.push(
                                        <div
                                                key={`${col}_${item}`}
                                                id={`${col}_${item}`}
                                                className={cls.NewCard}
                                                onDragStart={handleDrag}
                                                draggable
                                                onClick={handleCardClick}
                                        >
                                                {gameCopy[col][item].length < 80
                                                        ? gameCopy[col][item]
                                                        : console.log(
                                                                  `${col} : ${item} too long by ${gameCopy[
                                                                          col
                                                                  ][item].length - 80}`
                                                          )}
                                        </div>
                                );
                        }
                });
        });
        let shuffledCards = shuffleArray(newCards);
        return shuffledCards;
};

export default useCards;
