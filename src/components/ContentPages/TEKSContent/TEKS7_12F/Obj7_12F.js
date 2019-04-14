const obj7_12F = {
        teksNum: '7.12 F',
        teksLabel: 'Cell Theory',
        teksContent: ' Recognize the components of cell theory.',
        teksQuiz: '/quiz7_12F',
        questions: [
                {
                        text: 'All cells come from _______ _______',
                        answers: [
                                { wrong1: 'identical cells' },
                                { wrong2: 'plant cells' },
                                { wrong3: 'animal cells' },
                                { correct: 'pre-existing cells' }
                        ],
                        image: ''
                },
                {
                        text: 'Which of the following is not part of cell theory?',
                        answers: [
                                { wrong1: 'Cells come from pre-existing cells' },
                                { wrong2: 'Cells are the basic unit of life.' },
                                { wrong3: 'All living things are made up of one or more cells.' },
                                { correct: 'All cells are a combination of 2 or more cells.' }
                        ],
                        image: require('./images/cells.jpg')
                },
                {
                        text: 'Robert Hooke first coined the term "cell" after looking at what?',
                        answers: [
                                { wrong1: 'a human hair' },
                                { wrong2: 'a section of onion' },
                                { wrong3: 'a piece of muscle tissue' },
                                { correct: 'a slice of cork' }
                        ],
                        image: require('./images/cork.jpg')
                },
                {
                        text:
                                'Mattias Schleiden and Theodor Schwann had 3 observations, 2 of which turned out to be correct and are now part of the cell theory. Which of the following is not the correct observation and is not a part of cell theory?',
                        answers: [
                                { wrong1: 'The cell is the basic unit of life in all living things.' },
                                { wrong2: 'All organisms are composed of one or more cells' },
                                { wrong3: 'Cells come from previous cells' },
                                {
                                        correct:
                                                'Cells form by free-cell formation, similar to the formation of crystals (spontaneous generation)'
                                }
                        ],
                        image: ''
                }
        ]
};

export default obj7_12F;
