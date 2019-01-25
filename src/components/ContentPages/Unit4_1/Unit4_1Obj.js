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
            teksLabel: TEKS[13].teksLabel,
            teksContent: TEKS[13].teksContent,
            teksQuiz: TEKS[13].teksQuiz
        },
        {
            teksNum: TEKS[14].teksNum,
            teksLabel: TEKS[14].teksLabel,
            teksContent: TEKS[14].teksContent,
            teksQuiz: TEKS[14].teksQuiz
        },
        {
            teksNum: TEKS[15].teksNum,
            teksLabel: TEKS[15].teksLabel,
            teksContent: TEKS[15].teksContent,
            teksQuiz: TEKS[15].teksQuiz
        },
        {
            teksNum: TEKS[16].teksNum,
            teksLabel: TEKS[16].teksLabel,
            teksContent: TEKS[16].teksContent,
            teksQuiz: TEKS[16].teksQuiz
        }
    ],
    summary:
        'In this unit, we learn how to use dichotomous keys. We also observe and understand the factors that influence natural selection.',
    vertMenuItems: [
        { Home: '/' },
        { 'Unit Page': '/unit4_1' },
        { Game: '/unit4_1/game4_1' },
        {
            Quizlet:
                'https://quizlet.com/260458413/natural-selection-selective-breeding-and-adaptations-unit-41-flash-cards/'
        }
    ]
};
export default unit4_1Obj;
