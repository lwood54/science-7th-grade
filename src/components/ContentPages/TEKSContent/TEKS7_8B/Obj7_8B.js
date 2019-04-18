const obj7_8B = {
        teksNum: '7.8 B',
        teksLabel: 'Weathering, Erosion, and Deposition',
        teksContent:
                'Analyze the effects of weathering, erosion, and deposition on the environment in ecoregions of Texas.',
        teksQuiz: '/quiz7_8B',
        questions: [
                {
                        text: 'Why are older mountains shorter and less jagged?',
                        answers: [
                                {
                                        wrong1:
                                                'Newer mountains were formed at a time when tectonic plates were moving with power.'
                                },
                                { wrong2: 'Older mountains were formed from deposition occurring.' },
                                {
                                        wrong3:
                                                'Younger mountains formed from tectonic plates colliding and increased levels of deposition.'
                                },
                                {
                                        correct:
                                                'Older mountains have experienced far more weathering and erosion over time.'
                                }
                        ],
                        image: require('./images/himalayan_mountains.jpg') // leave as an empty string if there is no image needed
                },
                {
                        text: 'Which of the following increases erosion?',
                        answers: [
                                { wrong1: 'An steeper gradient where water flows.' },
                                { wrong2: 'A lack of or removal of vegetation, leaving bare soil or dirt.' },
                                {
                                        wrong3:
                                                'Addition of paved surfaces, reducing locations water can be absorbed into the ground.'
                                },
                                { correct: 'All of these choices increases erosion.' }
                        ],
                        image: ''
                },
                {
                        text: 'Why would a faster moving river cause greater erosion?',
                        answers: [
                                {
                                        wrong1:
                                                'Because faster moving rivers are always more shallow, carrying more sediment.'
                                },
                                { wrong2: 'Faster moving rivers are always older.' },
                                { wrong3: 'Slower moving rivers are always older.' },
                                { correct: 'Faster moving rivers have more kinetic energy.' }
                        ],
                        image: require('./images/river.jpg')
                }
        ]
};

export default obj7_8B;
