import Obj7_11A from '../../TEKSContent/TEKS7_11A/Obj7_11A';
import Obj7_11B from '../../TEKSContent/TEKS7_11B/Obj7_11B';
import Obj7_11C from '../../TEKSContent/TEKS7_11C/Obj7_11C';
import Obj7_12A from '../../TEKSContent/TEKS7_12A/Obj7_12A';

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
                        teksNum: Obj7_11A.teksNum,
                        teksLabel: Obj7_11A.teksLabel,
                        teksContent: Obj7_11A.teksContent,
                        teksQuiz: Obj7_11A.teksQuiz
                },
                {
                        teksNum: Obj7_11B.teksNum,
                        teksLabel: Obj7_11B.teksLabel,
                        teksContent: Obj7_11B.teksContent,
                        teksQuiz: Obj7_11B.teksQuiz
                },
                {
                        teksNum: Obj7_11C.teksNum,
                        teksLabel: Obj7_11C.teksLabel,
                        teksContent: Obj7_11C.teksContent,
                        teksQuiz: Obj7_11C.teksQuiz
                },
                {
                        teksNum: Obj7_12A.teksNum,
                        teksLabel: Obj7_12A.teksLabel,
                        teksContent: Obj7_12A.teksContent,
                        teksQuiz: Obj7_12A.teksQuiz
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
export default unit4_1Obj;
