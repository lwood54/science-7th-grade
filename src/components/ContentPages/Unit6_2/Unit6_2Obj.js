import TEKS from '../TEKS';

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
            teksNum: TEKS[8].teksNum,
            teksLabel: TEKS[8].teksLabel,
            teksContent: TEKS[8].teksContent,
            teksQuiz: TEKS[8].teksQuiz
        },
        {
            teksNum: TEKS[9].teksNum,
            teksLabel: TEKS[9].teksLabel,
            teksContent: TEKS[9].teksContent,
            teksQuiz: TEKS[9].teksQuiz
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
