import TEKS from '../TEKS';

const unit1_2Obj = {
    title: 'Unit 1.2',
    subtitle: 'Energy Transformation in Living Systems',
    pageExtension: '/unit1_2',
    imageLocation: '/static/images/cards/seedling.jpg',
    imgTitle: 'seedling',
    vocabList: [
        'Phototropism',
        'Geotropism',
        'Turgor Pressure',
        'Potential Energy',
        'Kinetic Energy',
        'Radiant Energy',
        'Photosynthesis',
        'Cellular Respiration',
        'Reactant',
        'Product'
    ],
    TEKS: [
        {
            teksNum: TEKS[0].teksNum,
            teksLabel: TEKS[0].teksLabel,
            teksContent: TEKS[0].teksContent,
            teksQuiz: TEKS[0].teksQuiz
        },
        {
            teksNum: TEKS[2].teksNum,
            teksLabel: TEKS[2].teksLabel,
            teksContent: TEKS[2].teksContent,
            teksQuiz: TEKS[2].teksQuiz
        },
        {
            teksNum: TEKS[3].teksNum,
            teksLabel: TEKS[3].teksLabel,
            teksContent: TEKS[3].teksContent,
            teksQuiz: TEKS[3].teksQuiz
        },
        {
            teksNum: TEKS[4].teksNum,
            teksLabel: TEKS[4].teksLabel,
            teksContent: TEKS[4].teksContent,
            teksQuiz: TEKS[4].teksQuiz
        },
        {
            teksNum: TEKS[21].teksNum,
            teksLabel: TEKS[21].teksLabel,
            teksContent: TEKS[21].teksContent,
            teksQuiz: TEKS[21].teksQuiz
        }
    ],
    summary:
        'In this unit, we look at how and why energy transformations take place within living systems.',
    vertMenuItems: [
        { Home: '/' },
        { 'Unit Page': '/unit1_2' },
        { Game: '/unit1_2/game1_2' },
        {
            Quizlet:
                'https://quizlet.com/317790663/18-19-unit-12-energy-in-living-systems-flash-cards/'
        }
    ]
};
export default unit1_2Obj;
