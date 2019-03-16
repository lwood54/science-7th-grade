const obj7_5B = {
        teksNum: '7.5 B',
        teksLabel: 'Food Chains and Webs',
        teksContent:
                'Diagram the flow of energy through living systems, including food chains, food webs, and energy pyramids.',
        teksQuiz: '/quiz7_5B',
        questions: [
                {
                        text: 'What do the arrows in a food chain or web represent?',
                        answers: [
                                {
                                        wrong1: 'The  arrows point from the predators to the prey.'
                                },
                                {
                                        wrong2: "It isn't an arrow, it's a line."
                                },
                                {
                                        wrong3:
                                                'It represents organisms that share similar traits in an ecosystem.'
                                },
                                {
                                        correct:
                                                'The arrows represent the direction that energy flows in an ecosystem.'
                                }
                        ],
                        image: require('./images/foodweb.jpg')
                },
                {
                        text: 'Which of the following best describes energy?',
                        answers: [
                                { wrong1: 'The force applied on an object.' },
                                { wrong2: 'The movement from one place to another.' },
                                { wrong3: 'Power of moving objects.' },
                                { correct: 'The ability to do work.' }
                        ],
                        image: '' // leave as an empty string if there is no image needed
                },
                {
                        text:
                                'A __________ is a simple model that shows a direct energy relationship betwen organisms in an ecosystem.',
                        answers: [
                                { wrong1: 'plant' },
                                { wrong2: 'primary consumer' },
                                { wrong3: 'food web' },
                                { correct: 'food chain' }
                        ],
                        image: require('./images/basic_foodchain.png') // leave as an empty string if there is no image needed
                },
                {
                        text:
                                'What is the initial energy source (either directly or indirectly) of almost all life on Earth?',
                        answers: [
                                { wrong1: 'hope' },
                                { wrong2: 'batteries' },
                                { wrong3: 'Plants' },
                                { correct: 'Light' }
                        ],
                        image: '' // leave as an empty string if there is no image needed
                },
                {
                        text: 'Identify the energy source for primary consumers.',
                        answers: [
                                { wrong1: 'secondary consumers' },
                                { wrong2: 'tertiary consumers' },
                                { wrong3: 'decmoposers' },
                                { correct: 'producers' }
                        ],
                        image: '' // leave as an empty string if there is no image needed
                },
                {
                        text: 'How much energy is passed on at each step in a food chain or web?',
                        answers: [
                                { wrong1: '90 %' },
                                { wrong2: '100 %' },
                                { wrong3: '25 %' },
                                { correct: '10 %' }
                        ],
                        image: require('./images/energy_pyramid.png') // leave as an empty string if there is no image needed
                },
                {
                        text:
                                'If only 10% of the energy is passed on, what happens to 90% of the energy at each level?!',
                        answers: [
                                { wrong1: 'It is provided to decomposers' },
                                { wrong2: 'It is passed on to the predator.' },
                                { wrong3: '90% is passed on and 10% is lost as heat into the atmosphere.' },
                                { correct: 'It is used by the organism or lost as heat into the atmosphere.' }
                        ],
                        image: require('./images/tertiary_bird.jpg') // leave as an empty string if there is no image needed
                },
                {
                        text: 'What is the name of consumers that eat secondary consumers?',
                        answers: [
                                { wrong1: 'primary consumers' },
                                { wrong2: 'producers' },
                                { wrong3: 'secondary consumers' },
                                { correct: 'tertiary consumers' }
                        ],
                        image: require('./images/lione_hunt.jpg') // leave as an empty string if there is no image needed
                },
                {
                        text:
                                'In this food web, what will most likely happen to the fox population if the grasshoppers are wiped out by disease?',
                        answers: [
                                { wrong1: 'The fox population will be unaffected.' },
                                {
                                        wrong2:
                                                'The rabbit population will decrease because the fox will eat more of them.'
                                },
                                {
                                        wrong3:
                                                'The thrush population will decrease because its food source disappears.'
                                },
                                {
                                        correct:
                                                'The fox population will decrease because 2 sources of food depend on the grasshoppers.'
                                }
                        ],
                        image: require('./images/food-web2.png') // leave as an empty string if there is no image needed
                },
                {
                        text:
                                'What is the best explanation as to the difference between food chains and food webs?',
                        answers: [
                                {
                                        wrong1:
                                                'They are different names for the same thing, a relationship between organisms.'
                                },
                                {
                                        wrong2:
                                                'Food webs are simple models that show direct relationships between organisms.'
                                },
                                { wrong3: 'Food chains do not show tertiary consumer levels.' },
                                {
                                        correct:
                                                'Food webs are more complex models and show direct and indirect relationships.'
                                }
                        ],
                        image: '' // leave as an empty string if there is no image needed
                }
        ]
};

export default obj7_5B;
