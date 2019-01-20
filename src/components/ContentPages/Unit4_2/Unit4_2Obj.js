import TEKS from '../TEKS';

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
            teksNum: TEKS[12].teksNum,
            teksContent: TEKS[12].teksContent,
            ssLink: TEKS[12].ssLink
        },
        {
            teksNum: TEKS[5].teksNum,
            teksContent: TEKS[5].teksContent,
            ssLink: TEKS[5].ssLink
        }
    ],
    summary:
        'In this unit, we look at how catastrophic events affect ecosystems. We will also observe and analyze the process that ecosystems go through to reach homeostasis.',
    vertMenuItems: [
        { Home: '/' },
        { 'Unit Main Page': '/unit4_2' },
        { 'Digital Review': '/unit4_2/dig_rev_4_2' },
        { 'Mini Quiz': '/unit4_2/mini_quiz_4_2' },
        {
            'Quizlet Card Set':
                'https://quizlet.com/267717343/unit-43-review-ecological-succession-and-catastrophic-events-flash-cards/'
        }
    ]
};
export default unit4_2Obj;