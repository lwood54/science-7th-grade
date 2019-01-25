import TEKS from '../TEKS';

const unit5_1Obj = {
    title: 'Unit 5.1',
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
            teksLabel: TEKS[10].teksLabel,
            teksContent: TEKS[10].teksContent,
            teksQuiz: TEKS[10].teksQuiz
        },
        {
            teksNum: TEKS[11].teksNum,
            teksLabel: TEKS[11].teksLabel,
            teksContent: TEKS[11].teksContent,
            teksQuiz: TEKS[11].teksQuiz
        }
    ],
    summary:
        'In this unit, we look at a range of environments from microhabitats to biomes and how biodiversity contributes to their sustainability.',
    vertMenuItems: [
        { Home: '/' },
        { 'Unit Page': '/unit5_1' },
        { Game: '/unit5_1/game5_1' },
        {
            Quizlet:
                'https://quizlet.com/275509969/unit-51-biomes-microhabitats-and-biodiversity-flash-cards/'
        }
    ]
};
export default unit5_1Obj;
