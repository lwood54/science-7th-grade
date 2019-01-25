import TEKS from '../TEKS';

const unit6_1Obj = {
    title: 'Unit 6.1',
    subtitle: 'Weathering, Erosion, Deposition, Ground Water, and Watersheds',
    pageExtension: '/unit6_1',
    imageLocation: '/static/images/cards/erosion.jpg',
    imgTitle: 'erosion',
    vocabList: [
        'weathering',
        'erosion',
        'deposition',
        'chemical weathering',
        'mechanical weathering',
        'sediment',
        'abrasion',
        'oxidation',
        'ground water',
        'watershed'
    ],
    TEKS: [
        {
            teksNum: TEKS[6].teksNum,
            teksLabel: TEKS[6].teksLabel,
            teksContent: TEKS[6].teksContent,
            teksQuiz: TEKS[6].teksQuiz
        },
        {
            teksNum: TEKS[7].teksNum,
            teksLabel: TEKS[7].teksLabel,
            teksContent: TEKS[7].teksContent,
            teksQuiz: TEKS[7].teksQuiz
        }
    ],
    summary:
        'In this unit, we look how weathering, erosion, and deposition affect an ecosystem. We will also look at the human impact on ground water and watersheds.',
    vertMenuItems: [
        { Home: '/' },
        { 'Unit Page': '/unit6_1' },
        { Game: '/unit6_1/game6_1' },
        {
            Quizlet:
                'https://quizlet.com/287611603/unit-61-weathering-erosion-deposition-and-watersheds-flash-cards/'
        }
    ]
};
export default unit6_1Obj;
