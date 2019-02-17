/*
        {
                text: '',
                answers: [
                        {wrong1: ''},
                        {wrong2: ''},
                        {wrong3: ''},
                        {correct: ''}
                ],
                image: require('') // leave empty string if there is no image needed
        }
*/

const obj7_10A = {
        teksNum: '7.10 A',
        teksLabel: 'Biomes and Microhabitats',
        teksContent:
                'Observe and describe how different environments, including microhabitats in schoolyards and biomes, support different varieties of organisms.',
        teksQuiz: '/quiz7_10A',
        questions: [
                {
                        text:
                                'Which of the following biomes is extremely cold, can sometimes be considered a desert, and has a layer of permafrost?',
                        answers: [
                                {
                                        wrong1: 'Temperate Deciduous Forest'
                                },
                                {
                                        wrong2: 'Taiga or Coniferous Forest'
                                },
                                {
                                        wrong3: 'Tropical Grassland'
                                },
                                {
                                        correct: 'Tundra'
                                }
                        ],
                        image: ''
                },
                {
                        text:
                                'Which of the following best explains the difference between a temperate rainforest and a tropical rainforest?',
                        answers: [
                                { wrong1: 'They are the same things, just different names.' },
                                {
                                        wrong2:
                                                'Tropical Rainforest does not receive regular sunlight year round.'
                                },
                                {
                                        wrong3:
                                                'Temperate Rainforest does not receive enough rainfall in a year.'
                                },
                                {
                                        correct:
                                                'Temperate Rainforest get colder and they experience seasonal changes.'
                                }
                        ],
                        image: require('./images/temperate_rainforest.gif')
                },
                {
                        text: 'Which of the following is an abiotic factor that greatly influences a biome?',
                        answers: [
                                { wrong1: 'Plant life' },
                                { wrong2: 'Animal life' },
                                { wrong3: 'Microorganisms' },
                                { correct: 'Latitude' }
                        ],
                        image: require('./images/biomes_map.jpg')
                },
                {
                        text:
                                "Why don't tropical biomes have distinct seasons like summer, fall, winter, spring?",
                        answers: [
                                {
                                        wrong1:
                                                "Because the regions that have tropical forests don't celebrate seasons like we do."
                                },
                                { wrong2: 'They do have all 4 seasons, just like the biomes we live in do.' },
                                {
                                        wrong3:
                                                'Tropical regions do not receive enough water to maintain the seasons.'
                                },
                                {
                                        correct:
                                                'Tropical regions are generally located along the equator, where they receive uniform sunlight year round.'
                                }
                        ],
                        image: require('./images/tropical_rainforest.gif')
                },
                {
                        text:
                                'Which of the following abiotic factors plays the largest role in how many plants can be supported in a biome?',
                        answers: [
                                { wrong1: 'The amount of competition from other plants.' },
                                { wrong2: 'The amount of predators in a biome.' },
                                { wrong3: 'The amount of rocks and dirt available.' },
                                { correct: 'The amount of sunlight (radiant energy) present.' }
                        ],
                        image: require('./images/rainforest_sunlight.jpg') // leave empty string if there is no image needed
                },
                {
                        text:
                                'Which of the following is the best explanation about the difference between a tropical grassland and a tropical rainforest?',
                        answers: [
                                {
                                        wrong1:
                                                'Tropical grasslands do not receive as much sunlight year round as a tropical rainforest.'
                                },
                                {
                                        wrong2:
                                                'Tropical rainforests are more likely to experience the 4 seasons.'
                                },
                                {
                                        wrong3:
                                                'Tropical rainforests have rainy seasons and dry seasons, so do not receive as much annual rainfall.'
                                },
                                {
                                        correct:
                                                'Tropical grasslands have rainy seasons and dry seasons, so do not receive as much annual rainfall.'
                                }
                        ],
                        image: require('../../UnitContent/Unit5_1/images/gifs/rainforest.gif') // leave only empty string if there is no image needed
                },
                {
                        text: 'Identify the most important factor in defining a desert.',
                        answers: [
                                { wrong1: 'Too much sunlight makes it hot.' },
                                { wrong2: 'Not enough sunlight at night makes deserts very cold.' },
                                {
                                        wrong3:
                                                'Plants and animals with an abundance of spikes defines desert life.'
                                },
                                { correct: 'Receiving too little precipitation in a year.' }
                        ],
                        image: require('../../UnitContent/Unit5_1/images/gifs/desert.gif') // leave empty string if there is no image needed
                },
                {
                        text:
                                'A(n) __________ is smaller and different than its surrounding environment. They are important and can usually sustain themselves.',
                        answers: [
                                { wrong1: 'ecosystem' },
                                { wrong2: 'biome' },
                                { wrong3: 'smalliome' },
                                { correct: 'microhabitat' }
                        ],
                        image: '' // leave empty string if there is no image needed
                },
                {
                        text: 'Identify the microhabitat...',
                        answers: [
                                { wrong1: 'A garden with weeds infront of a school building.' },
                                { wrong2: 'A bunch of insects and microorganisms under a rock.' },
                                { wrong3: 'A pond in the middle of a coniferous forest.' },
                                { correct: 'All of the answers are examples of microhabitats.' }
                        ],
                        image: '' // leave empty string if there is no image needed
                },
                {
                        text: 'Identify the largest land biome on Earth.',
                        answers: [
                                { wrong1: 'Tropical Rainforest' },
                                { wrong2: 'Tropical Grassland' },
                                { wrong3: 'Temperate Deciduous Forests' },
                                { correct: 'Taiga or Coniferous Forests' }
                        ],
                        image: '' // leave empty string if there is no image needed
                }
        ]
};

export default obj7_10A;
