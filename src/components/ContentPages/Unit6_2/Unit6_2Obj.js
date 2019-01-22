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
            teksContent: TEKS[8].teksContent,
            ssLink: TEKS[8].ssLink
        },
        {
            teksNum: TEKS[9].teksNum,
            teksContent: TEKS[9].teksContent,
            ssLink: TEKS[9].ssLink
        }
    ],
    summary:
        'In this unit, we look at the characteristics of the solar system and what it takes for human space travel and exploration.',
    vertMenuItems: [
        { Home: '/' },
        { 'Unit Main Page': '/unit6_2' },
        { Game: '/unit6_2/dig_rev_6_2' },
        { 'Mini Quiz': '/unit6_2/mini_quiz_6_2' },
        {
            'Quizlet Card Set':
                'https://quizlet.com/287617961/unit-62-space-work-force-flash-cards/'
        }
    ]
};
export default unit6_2Obj;
