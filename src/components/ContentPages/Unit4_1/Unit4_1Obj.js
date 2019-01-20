import TEKS from '../TEKS';

const unit4_1Obj = {
    title: 'Unit 4.1',
    subtitle: 'Natural Selection, Selective breeding, and Variation',
    pageExtension: '/unit4_1',
    imageLocation: '/static/images/cards/salamander.jpg',
    imgTitle: 'salamander',
    vocabList: [
        'adaptation',
        'variation',
        'internal stuctures',
        'gills',
        'xylem',
        'hollow',
        'natural selection',
        'selective breeding',
        'migration',
        'hibernation',
        'physiology'
    ],
    TEKS: [
        {
            teksNum: TEKS[13].teksNum,
            teksContent: TEKS[13].teksContent,
            ssLink: TEKS[13].ssLink
        },
        {
            teksNum: TEKS[14].teksNum,
            teksContent: TEKS[14].teksContent,
            ssLink: TEKS[14].ssLink
        },
        {
            teksNum: TEKS[15].teksNum,
            teksContent: TEKS[15].teksContent,
            ssLink: TEKS[15].ssLink
        },
        {
            teksNum: TEKS[16].teksNum,
            teksContent: TEKS[16].teksContent,
            ssLink: TEKS[16].ssLink
        }
    ],
    summary:
        'In this unit, we learn how to use dichotomous keys. We also observe and understand the factors that influence natural selection.',
    vertMenuItems: [
        { Home: '/' },
        { 'Unit Main Page': '/unit4_1' },
        { 'Digital Review': '/unit4_1/dig_rev_4_1' },
        { 'Mini Quiz': '/unit4_1/mini_quiz_4_1' },
        {
            'Quizlet Card Set':
                'https://quizlet.com/260458413/natural-selection-selective-breeding-and-adaptations-unit-41-flash-cards/'
        }
    ]
};
export default unit4_1Obj;
