import TEKS from '../TEKS';

const unit2_2Obj = {
    title: 'Unit 2.2',
    subtitle: 'Body Systems',
    pageExtension: '/unit2_2',
    imageLocation: '/static/images/cards/organs.jpg',
    imgTitle: 'organs',
    vocabList: [
        'organ',
        'organ system',
        'homeostasis',
        'blood pressure',
        'fight or flight',
        'enzyme',
        'internal stimuli',
        'external stimuli'
    ],
    TEKS: [
        {
            teksNum: TEKS[17].teksNum,
            teksLabel: TEKS[17].teksLabel,
            teksContent: TEKS[17].teksContent,
            teksQuiz: TEKS[17].teksQuiz
        }
    ],
    summary:
        'In this unit, we look at the main systems and organs of the human body and analyze how they work together to help the body maintain homeostasis.',
    vertMenuItems: [
        { Home: '/' },
        { 'Unit Page': '/unit2_2' },
        { Game: '/unit2_2/game2_2' },
        {
            'Quizlet Card Set':
                'https://quizlet.com/330016195/18-19-unit-22-body-systems-flash-cards/'
        }
    ]
};
export default unit2_2Obj;
