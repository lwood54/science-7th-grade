import Obj7_5B from '../../TEKSContent/TEKS7_5B/Obj7_5B';

const unit5_2Obj = {
        title: 'Unit 5.2',
        subtitle: 'Food Webs and Energy Pyramids',
        pageExtension: '/unit5_2',
        imageLocation: '/static/images/cards/cheetah.jpg',
        imgTitle: 'cheetah',
        vocabList: [
                'food chain',
                'food web',
                'energy pyramid',
                'producer',
                'consumer',
                'predator',
                'prey',
                'herbivore',
                'carnivore',
                'primary consumer',
                'secondary consumer'
        ],
        TEKS: [
                {
                        teksNum: Obj7_5B.teksNum,
                        teksLabel: Obj7_5B.teksLabel,
                        teksContent: Obj7_5B.teksContent,
                        teksQuiz: Obj7_5B.teksQuiz
                }
        ],
        summary:
                'In this unit, we look at the relationshiop between organisms that live together in an ecosystem and how energy is passed between them.',
        vertMenuItems: [
                { Home: '/' },
                { 'Unit Page': '/unit5_2' },
                { Game: '/unit5_2/game5_2' },
                {
                        Quizlet:
                                'https://quizlet.com/280032865/unit-53-ecology-and-energy-transfer-flash-cards/'
                }
        ],
        game: {
                col1: {
                        heading: 'Food Chain',
                        hint: 'Simple relationship model between predator, prey, and other organisms',
                        image: require('./images/food_chain.jpg'),
                        definition: 'Simple model of organisms each dependent on the next as a source of food'
                },
                col2: {
                        heading: 'Food Web',
                        hint: 'A more complex model of energy flow in an ecosystem',
                        image: require('./images/food_web.jpg'),
                        definition: 'A system of interlocking and interdependent food chains'
                },
                col3: {
                        heading: 'Energy Pyramid',
                        hint: 'A triangle showing available energy',
                        image: require('./images/energy_pyramid.jpg'),
                        definition: 'A graphical model of energy flow and availability in a community'
                },
                col4: {
                        heading: 'Primary Consumer',
                        hint: 'We like eating plants!',
                        image: require('./images/primary_consumer.jpg'),
                        definition: 'An organism that gets its energy by eating producers'
                },
                col5: {
                        heading: 'Secondary Consumer',
                        hint: 'We like eating things that eat plants!',
                        image: require('./images/secondary_consumer.jpg'),
                        definition:
                                '2nd level consumers: feed on primary consumers / can be carnivores or omnivores'
                }
        },
        game2: {
                col1: {
                        heading: 'Tertiary Consumer',
                        hint: 'Lions, Bears, Great White Sharks, etc',
                        image: require('./images/tertiary_consumer.jpg'),
                        definition:
                                'A carnivore at the topmost level in a food chain that feeds on other carnivores'
                },
                col2: {
                        heading: 'Decomposer',
                        hint: 'Mushrooms, Bacteria, Earthworms, etc',
                        image: require('./images/decomposer.jpg'),
                        definition: 'Organisms like fungus that break down dead organic material'
                },
                col3: {
                        heading: 'Producer',
                        hint: 'We are also known as plants and autotrophs!',
                        image: require('./images/leaves.jpg'),
                        definition: 'Organisms that take in energy from the Sun & make food by Photosynthesis'
                },
                col4: {
                        heading: 'Energy',
                        hint: 'This is required by all living things',
                        image: require('./images/wind_mills.jpg'),
                        definition: 'All organisms compete for this, it is required for ALL life'
                },
                col5: {
                        heading: 'Decay',
                        hint: 'This is what decomposers do to dead organic matter',
                        image: require('./images/decay.jpg'),
                        definition: 'This is the action of rotting or decomposing organic matter'
                }
        }
};
export default unit5_2Obj;
