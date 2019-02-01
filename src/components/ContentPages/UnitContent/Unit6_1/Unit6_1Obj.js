import Obj7_8B from '../../TEKSContent/TEKS7_8B/Obj7_8B';
import Obj7_8C from '../../TEKSContent/TEKS7_8C/Obj7_8C';

const unit6_1Obj = {
        title: 'Unit 6.1',
        subtitle:
                'Weathering, Erosion, Deposition, Ground Water, and Watersheds',
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
                        teksNum: Obj7_8B.teksNum,
                        teksLabel: Obj7_8B.teksLabel,
                        teksContent: Obj7_8B.teksContent,
                        teksQuiz: Obj7_8B.teksQuiz
                },
                {
                        teksNum: Obj7_8C.teksNum,
                        teksLabel: Obj7_8C.teksLabel,
                        teksContent: Obj7_8C.teksContent,
                        teksQuiz: Obj7_8C.teksQuiz
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
