const obj7_5A = {
        teksNum: '7.5 A',
        teksLabel: 'Photosynthesis',
        teksContent:
                'recognize that radiant energy from the Sun is transformed into chemical energy through the process of photosynthesis',
        teksQuiz: '/quiz7_5A',
        questions: [
                {
                        text:
                                'What is the name of the process that converts sunlight (radiant energy) into chemical energy (glucose)?',
                        answers: [
                                { wrong1: 'Cellular Respiration' },
                                { wrong2: 'Osmosis' },
                                { wrong3: 'Photokinesis' },
                                { correct: 'Photosynthesis' }
                        ],
                        image: require('./images/plant.jpg')
                },
                {
                        text:
                                'Identify the type of energy conversion taking place during photosynthesis.',
                        answers: [
                                { wrong1: 'chemical to radiant' },
                                { wrong2: 'radiant to kinetic' },
                                { wrong3: 'chemical to kinetic' },
                                { correct: 'radiant to chemical' }
                        ],
                        image: require('./images/photosynthDiagram.jpg')
                },
                {
                        text:
                                'Which of the following is the initial source of energy for most organisms on Earth?',
                        answers: [
                                { wrong1: 'glucose' },
                                { wrong2: 'chemical energy' },
                                { wrong3: 'producers' },
                                { correct: 'radiant energy' }
                        ],
                        image: ''
                }
        ]
};

export default obj7_5A;
