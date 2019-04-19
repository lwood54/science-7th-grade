const obj7_8C = {
        teksNum: '7.8 C',
        teksLabel: 'Groundwater and Surface Water',
        teksContent: 'Model the effects of human activity on groundwater and surface water in a watershed.',
        teksQuiz: '/quiz7_8C',
        questions: [
                {
                        text: '__________ is the land area that drains to a common river or stream.',
                        answers: [
                                { wrong1: 'water table' },
                                { wrong2: 'aquifer' },
                                { wrong3: 'groundwater' },
                                { correct: 'watershed' }
                        ],
                        image: ''
                },
                {
                        text: 'What is the best description of groundwater.',
                        answers: [
                                {
                                        wrong1:
                                                'It is water that is found ontop of the ground, like lakes, rivers, and streams.'
                                },
                                { wrong2: 'Water that forms from plants on the ground.' },
                                { wrong3: 'It is water that is has been mixed up into many pieces.' },
                                { correct: 'It is the water that has soaked into the ground.' }
                        ],
                        image: ''
                },
                {
                        text:
                                'Which of the following is a problem that increased pavement and concrete in an ecosystem will result in?',
                        answers: [
                                { wrong1: 'An increase in local vegetation.' },
                                { wrong2: 'A decrease in pollution.' },
                                { wrong3: 'An increase in the rate of precipitation.' },
                                { correct: 'An increase in runoff and erosion.' }
                        ],
                        image: require('./images/runoff.JPG')
                },
                {
                        text: 'What must be true for the water table to remain at the same level?',
                        answers: [
                                {
                                        wrong1:
                                                'The rate of recharge must be greater than the rate of discharge.'
                                },
                                {
                                        wrong2:
                                                'The rate of discharge must be greater than the rate of recharge.'
                                },
                                {
                                        wrong3:
                                                'The water table will remain the same regardless of discharge rates.'
                                },
                                { correct: 'The rate of recharge must be the same as the rate of discharge.' }
                        ],
                        image: require('./images/water_table.png') // leave as an empty string if there is no image needed
                },
                {
                        text:
                                'Why is it better to increase the amount of water that soaks into the ground and becomes groundwater?',
                        answers: [
                                { wrong1: 'Because it makes the land swell up and become more useful.' },
                                {
                                        wrong2:
                                                'Because it increases runoff and carries trash to one useful position.'
                                },
                                {
                                        wrong3:
                                                'Because lakes and rivers are too full, so we might as well store water underground.'
                                },
                                {
                                        correct:
                                                'Because increased groundwater means reduced erosion, cleaner water, and reduced runoff, which reduces contamination.'
                                }
                        ],
                        image: require('./images/groundwater.png') // leave as an empty string if there is no image needed
                }
        ]
};

export default obj7_8C;
