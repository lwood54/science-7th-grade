import Obj7_5A from '../../TEKSContent/TEKS7_5A/Obj7_5A';
import Obj7_6A from '../../TEKSContent/TEKS7_6A/Obj7_6A';
import Obj7_7A from '../../TEKSContent/TEKS7_7A/Obj7_7A';
import Obj7_7B from '../../TEKSContent/TEKS7_7B/Obj7_7B';
import Obj7_13A from '../../TEKSContent/TEKS7_13A/Obj7_13A';

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
                        teksNum: Obj7_5A.teksNum,
                        teksLabel: Obj7_5A.teksLabel,
                        teksContent: Obj7_5A.teksContent,
                        teksQuiz: Obj7_5A.teksQuiz
                },
                {
                        teksNum: Obj7_6A.teksNum,
                        teksLabel: Obj7_6A.teksLabel,
                        teksContent: Obj7_6A.teksContent,
                        teksQuiz: Obj7_6A.teksQuiz
                },
                {
                        teksNum: Obj7_7A.teksNum,
                        teksLabel: Obj7_7A.teksLabel,
                        teksContent: Obj7_7A.teksContent,
                        teksQuiz: Obj7_7A.teksQuiz
                },
                {
                        teksNum: Obj7_7B.teksNum,
                        teksLabel: Obj7_7B.teksLabel,
                        teksContent: Obj7_7B.teksContent,
                        teksQuiz: Obj7_7B.teksQuiz
                },
                {
                        teksNum: Obj7_13A.teksNum,
                        teksLabel: Obj7_13A.teksLabel,
                        teksContent: Obj7_13A.teksContent,
                        teksQuiz: Obj7_13A.teksQuiz
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
