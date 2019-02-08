import Obj7_10A from '../../TEKSContent/TEKS7_10A/Obj7_10A';
import Obj7_10B from '../../TEKSContent/TEKS7_10B/Obj7_10B';

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
                        teksNum: Obj7_10A.teksNum,
                        teksLabel: Obj7_10A.teksLabel,
                        teksContent: Obj7_10A.teksContent,
                        teksQuiz: Obj7_10A.teksQuiz
                },
                {
                        teksNum: Obj7_10B.teksNum,
                        teksLabel: Obj7_10B.teksLabel,
                        teksContent: Obj7_10B.teksContent,
                        teksQuiz: Obj7_10B.teksQuiz
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
        ],
        game: {
                col1: {
                        heading: '',
                        hint: '',
                        image: '',
                        definition: ''
                },
                col2: {
                        heading: '',
                        hint: '',
                        image: '',
                        definition: ''
                },
                col3: {
                        heading: '',
                        hint: '',
                        image: '',
                        definition: ''
                },
                col4: {
                        heading: '',
                        hint: '',
                        image: '',
                        definition: ''
                },
                col5: {
                        heading: '',
                        hint: '',
                        image: '',
                        definition: ''
                }
        },
        game2: {
                col1: {
                        heading: '',
                        hint: '',
                        image: '',
                        definition: ''
                },
                col2: {
                        heading: '',
                        hint: '',
                        image: '',
                        definition: ''
                },
                col3: {
                        heading: '',
                        hint: '',
                        image: '',
                        definition: ''
                },
                col4: {
                        heading: '',
                        hint: '',
                        image: '',
                        definition: ''
                },
                col5: {
                        heading: '',
                        hint: '',
                        image: '',
                        definition: ''
                }
        }
};
export default unit5_1Obj;
