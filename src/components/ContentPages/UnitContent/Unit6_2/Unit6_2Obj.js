import Obj7_9A from '../../TEKSContent/TEKS7_9A/Obj7_9A';
import Obj7_9B from '../../TEKSContent/TEKS7_9B/Obj7_9B';

const unit6_2Obj = {
        title: 'Unit 6.2',
        subtitle: 'Space',
        pageExtension: '/unit6_2',
        imageLocation: '/static/images/cards/spaceX.jpeg',
        imgTitle: 'spaceX',
        vocabList: [
                'habitable zone',
                'rotation',
                'revolution',
                'accommodation',
                'space shuttle',
                'proximity',
                'light year',
                'composition',
                'gravitational pull'
        ],
        TEKS: [
                {
                        teksNum: Obj7_9A.teksNum,
                        teksLabel: Obj7_9A.teksLabel,
                        teksContent: Obj7_9A.teksContent,
                        teksQuiz: Obj7_9A.teksQuiz
                },
                {
                        teksNum: Obj7_9B.teksNum,
                        teksLabel: Obj7_9B.teksLabel,
                        teksContent: Obj7_9B.teksContent,
                        teksQuiz: Obj7_9B.teksQuiz
                }
        ],
        summary:
                'In this unit, we look at the characteristics of the solar system and what it takes for human space travel and exploration.',
        vertMenuItems: [
                { Home: '/' },
                { 'Unit Page': '/unit6_2' },
                { Game: '/unit6_2/game6_2' },
                {
                        Quizlet:
                                'https://quizlet.com/287617961/unit-62-space-work-force-flash-cards/'
                }
        ]
};
export default unit6_2Obj;
