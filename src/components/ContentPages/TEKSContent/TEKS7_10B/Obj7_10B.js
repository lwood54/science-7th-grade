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

const obj7_10B = {
        teksNum: '7.10 B',
        teksLabel: 'Biodiversity and Sustainability',
        teksContent: 'Describe how biodiversity contributes to the sustainability of an ecosystem.',
        teksQuiz: '/quiz7_10B',
        questions: [
                {
                        text: 'What is biodiveristy?',
                        answers: [
                                { wrong1: 'It means lots of clean water.' },
                                { wrong2: 'It means that an ecosystem is balanced and can keep going.' },
                                { wrong3: 'It describes the local climate and range of precipitation.' },
                                {
                                        correct:
                                                'It describes the amount of different living organisms in an environment.'
                                }
                        ],
                        image: require('./images/biodiversity.jpg') // leave empty string if there is no image needed
                },
                {
                        text: 'Why is a biome with higher biodiversity more sustainable?',
                        answers: [
                                { wrong1: 'They are unconnected factors in a biome.' },
                                {
                                        wrong2:
                                                'The lower biodiversity means that there is not as much competition, so it is easier for animals to live.'
                                },
                                {
                                        wrong3:
                                                'It is the opposite, lower biodiversity is better more sustainability because of resources.'
                                },
                                {
                                        correct:
                                                'Increased biodiversity means more genetic variation and adaptability in the face of a changing environment and limited resources.'
                                }
                        ],
                        image: require('./images/pitcher_plant.jpg') // leave empty string if there is no image needed
                },
                {
                        text:
                                'Which of the follwing is an example of an adaptation that has helped an animal deal with limited food in a desert?',
                        answers: [
                                {
                                        wrong1:
                                                'Large, broad leaves on plants to help handle excess radiant energy.'
                                },
                                {
                                        wrong2:
                                                'Extremely colorful birds that are competing for mates and space.'
                                },
                                {
                                        wrong3:
                                                'Insects that are so specialized they can only be found on one species of tree.'
                                },
                                { correct: "A camel's hump stores fat for later use." }
                        ],
                        image: '' // leave empty string if there is no image needed
                },
                {
                        text:
                                'Which of the following is a desert adaptation that has increased a plants ability to get water?',
                        answers: [
                                {
                                        wrong1:
                                                'The needles on a cactus prevent animals from eating it and taking stored water.'
                                },
                                {
                                        wrong2:
                                                'The waxy covering on many desert plants help prevent water loss.'
                                },
                                {
                                        wrong3:
                                                'Large broad leaves help store water in big pitcher like structures.'
                                },
                                {
                                        correct:
                                                'A broad, shallow root structures reaching out in many directions helps soak up quickly evaporating water.'
                                }
                        ],
                        image: '' // leave empty string if there is no image needed
                },
                {
                        text:
                                'Why are many organisms in a tropical rainforest extremely specialized in how they get their energy and resources?',
                        answers: [
                                { wrong1: 'They get bored and have nothing better to do.' },
                                {
                                        wrong2:
                                                'Their environment has limited water and food, so they must compete for every dorp.'
                                },
                                {
                                        wrong3:
                                                'They are not very specialized overall and could survive anywhere.'
                                },
                                {
                                        correct:
                                                'Because there is such a great variety of life, that organisms are able to meet their needs with specialized adaptations.'
                                }
                        ],
                        image: require('./images/camouflaged.jpg') // leave empty string if there is no image needed
                }
        ]
};

export default obj7_10B;
