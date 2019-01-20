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
            teksContent: TEKS[6].teksContent,
            ssLink: TEKS[6].ssLink
        },
        {
            teksNum: TEKS[7].teksNum,
            teksContent: TEKS[7].teksContent,
            ssLink: TEKS[7].ssLink
        }
    ],
    summary:
        'In this unit, we look how weathering, erosion, and deposition affect an ecosystem. We will also look at the human impact on ground water and watersheds.',
    vertMenuItems: [
        { Home: '/' },
        { 'Unit Main Page': '/unit6_1' },
        { 'Digital Review': '/unit6_1/dig_rev_6_1' },
        { 'Mini Quiz': '/unit6_1/mini_quiz_6_1' },
        {
            'Quizlet Card Set':
                'https://quizlet.com/287611603/unit-61-weathering-erosion-deposition-and-watersheds-flash-cards/'
        }
    ]
};
export default unit6_1Obj;
