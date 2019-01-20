import TEKS from '../TEKS';

const unit5_1Obj = {
    title: 'Unit 5.2',
    subtitle: 'Biomes and Biodiversity',
    pageExtension: '/unit5_1',
    imageLocation: '/static/images/cards/rainforest.jpeg',
    imgTitle: 'rainforest',
    vocabList: [
        'microhabitat',
        'biome',
        'ecosystem',
        'ecoregion',
        'species',
        'habitat',
        'biodiversity',
        'sustainability'
    ],
    TEKS: [
        {
            teksNum: TEKS[10].teksNum,
            teksContent: TEKS[10].teksContent,
            ssLink: TEKS[10].ssLink
        },
        {
            teksNum: TEKS[11].teksNum,
            teksContent: TEKS[11].teksContent,
            ssLink: TEKS[11].ssLink
        }
    ],
    summary:
        'In this unit, we look at a range of environments from microhabitats to biomes and how biodiversity contributes to their sustainability.',
    vertMenuItems: [
        { Home: '/' },
        { 'Unit Main Page': '/unit5_1' },
        { 'Digital Review': '/unit5_1/dig_rev_5_1' },
        { 'Mini Quiz': '/unit5_1/mini_quiz_5_1' },
        {
            'Quizlet Card Set':
                'https://quizlet.com/275509969/unit-51-biomes-microhabitats-and-biodiversity-flash-cards/'
        }
    ]
};
export default unit5_1Obj;
