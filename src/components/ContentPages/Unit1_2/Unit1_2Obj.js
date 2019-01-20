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
            teksContent: TEKS[0].teksContent,
            ssLink: TEKS[0].ssLink
        },
        {
            teksNum: TEKS[2].teksNum,
            teksContent: TEKS[2].teksContent,
            ssLink: TEKS[2].ssLink
        },
        {
            teksNum: TEKS[3].teksNum,
            teksContent: TEKS[3].teksContent,
            ssLink: TEKS[3].ssLink
        },
        {
            teksNum: TEKS[4].teksNum,
            teksContent: TEKS[4].teksContent,
            ssLink: TEKS[4].ssLink
        },
        {
            teksNum: TEKS[21].teksNum,
            teksContent: TEKS[21].teksContent,
            ssLink: TEKS[21].ssLink
        }
    ],
    summary:
        'In this unit, we look at how and why energy transformations take place within living systems.',
    vertMenuItems: [
        { Home: '/' },
        { 'Unit Main Page': '/unit1_2' },
        { 'Digital Review': '/unit1_2/dig_rev_1_2' },
        { 'Mini Quiz': '/unit1_2/mini_quiz_1_2' },
        {
            'Quizlet Card Set':
                'https://quizlet.com/317790663/18-19-unit-12-energy-in-living-systems-flash-cards/'
        }
    ]
};
console.log(TEKS);
export default unit1_2Obj;
