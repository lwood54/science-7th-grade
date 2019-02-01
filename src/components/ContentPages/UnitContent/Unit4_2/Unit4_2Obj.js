import Obj7_8A from '../../TEKSContent/TEKS7_8A/Obj7_8A';
import Obj7_10C from '../../TEKSContent/TEKS7_10C/Obj7_10C';

const unit4_2Obj = {
        title: 'Unit 4.2',
        subtitle: 'Ecological Succession and Catastrophic Events',
        pageExtension: '/unit4_2',
        imageLocation: '/static/images/cards/tornado.jpg',
        imgTitle: 'tornado',
        vocabList: [
                'Catastrophic Event',
                'Earthquake',
                'Tsunami',
                'Tornado',
                'Hurricane',
                'Deforestation',
                'Drought',
                'Ecological Succession',
                'Primary Succession',
                'Secondary Succession',
                'Pioneer Species',
                'Climax Community',
                'Lichens'
        ],
        TEKS: [
                {
                        teksNum: Obj7_8A.teksNum,
                        teksLabel: Obj7_8A.teksLabel,
                        teksContent: Obj7_8A.teksContent,
                        teksQuiz: Obj7_8A.teksQuiz
                },
                {
                        teksNum: Obj7_10C.teksNum,
                        teksLabel: Obj7_10C.teksLabel,
                        teksContent: Obj7_10C.teksContent,
                        teksQuiz: Obj7_10C.teksQuiz
                }
        ],
        summary:
                'In this unit, we look at how catastrophic events affect ecosystems. We will also observe and analyze the process that ecosystems go through to reach homeostasis.',
        vertMenuItems: [
                { Home: '/' },
                { 'Unit Page': '/unit4_2' },
                { Game: '/unit4_2/game4_2' },
                {
                        Quizlet:
                                'https://quizlet.com/267717343/unit-43-review-ecological-succession-and-catastrophic-events-flash-cards/'
                }
        ]
};
export default unit4_2Obj;
