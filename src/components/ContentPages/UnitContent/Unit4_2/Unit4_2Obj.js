import Obj7_8A from '../../TEKSContent/TEKS7_8A/Obj7_8A';
import Obj7_10C from '../../TEKSContent/TEKS7_10C/Obj7_10C';

const unit4_2Obj = {
        title: 'Unit 4.2',
        subtitle: 'Ecological Succession and Catastrophic Events',
        pageExtension: '/unit4_2',
        imageLocation: '/static/images/cards/tornado.jpg',
        imgTitle: 'tornado',
        vocabList: [
                'Catastrophic Event',
                'Earthquake',
                'Tsunami',
                'Tornado',
                'Hurricane',
                'Deforestation',
                'Drought',
                'Ecological Succession',
                'Primary Succession',
                'Secondary Succession',
                'Pioneer Species',
                'Climax Community',
                'Lichens'
        ],
        TEKS: [
                {
                        teksNum: Obj7_8A.teksNum,
                        teksLabel: Obj7_8A.teksLabel,
                        teksContent: Obj7_8A.teksContent,
                        teksQuiz: Obj7_8A.teksQuiz
                },
                {
                        teksNum: Obj7_10C.teksNum,
                        teksLabel: Obj7_10C.teksLabel,
                        teksContent: Obj7_10C.teksContent,
                        teksQuiz: Obj7_10C.teksQuiz
                }
        ],
        summary:
                'In this unit, we look at how catastrophic events affect ecosystems. We will also observe and analyze the process that ecosystems go through to reach homeostasis.',
        vertMenuItems: [
                { Home: '/' },
                { 'Unit Page': '/unit4_2' },
                { Game: '/unit4_2/game4_2' },
                {
                        Quizlet:
                                'https://quizlet.com/267717343/unit-43-review-ecological-succession-and-catastrophic-events-flash-cards/'
                }
        ],
        game: {
                col1: {
                        heading: 'Microhabitat',
                        hint: 'A flowerbed in front of a school',
                        image: require('./images/microhabitat.jpg'),
                        definition:
                                'A habitat that is of small extent and is different from its surrounding habitat'
                },
                col2: {
                        heading: 'Tornado',
                        hint: 'Churning winds, top speed over 300 mph',
                        image: require('./images/tornado.jpg'),
                        definition:
                                'A destructive vortex of violently rotating winds having the appearance of a funnel-shaped cloud'
                },
                col3: {
                        heading: 'Flood',
                        hint: 'Excess water',
                        image: require('./images/flooding.jpg'),
                        definition: 'An overflowing of large amounts of water beyond its normal confines'
                },
                col4: {
                        heading: 'Earthquake',
                        hint: 'These are common along transform boundaries and can cause tsunamis',
                        image: require('./images/earthquake.jpg'),
                        definition:
                                'Sudden, violent shaking of the ground, usually due to slipping or colliding tectonic plates'
                },
                col5: {
                        heading: 'Hurricane',
                        hint: 'Churning winds, top speed over 160 mph',
                        image: require('./images/hurricane.jpg'),
                        definition:
                                'High velocity vortex that forms over warm ocean water and often causes flooding'
                }
        },
        game2: {
                col1: {
                        heading: 'Ecological Succession',
                        hint: 'A process of growth including different growth stages',
                        image: require('./images/microhabitat.jpg'),
                        definition: 'The gradual process by which an ecosystem changes and develops ovef time'
                },
                col2: {
                        heading: 'Primary Succession',
                        hint: 'Churning winds, top speed over 300 mph',
                        image: require('./images/tornado.jpg'),
                        definition:
                                'A destructive vortex of violently rotating winds having the appearance of a funnel-shaped cloud'
                },
                col3: {
                        heading: 'Secondary Succession',
                        hint: 'Excess water',
                        image: require('./images/flooding.jpg'),
                        definition: 'An overflowing of large amounts of water beyond its normal confines'
                },
                col4: {
                        heading: 'Lichens',
                        hint: 'These are common along transform boundaries and can cause tsunamis',
                        image: require('./images/earthquake.jpg'),
                        definition:
                                'Sudden, violent shaking of the ground, usually due to slipping or colliding tectonic plates'
                },
                col5: {
                        heading: 'Climax Community',
                        hint: 'Churning winds, top speed over 160 mph',
                        image: require('./images/hurricane.jpg'),
                        definition:
                                'High velocity vortex that forms over warm ocean water and often causes flooding'
                }
        }
};
export default unit4_2Obj;
