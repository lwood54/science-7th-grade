import TEKS from '../TEKS';

const unit5_2Obj = {
    title: 'Unit 5.2',
    subtitle: 'Food Webs and Energy Pyramids',
    pageExtension: '/unit5_2',
    imageLocation: '/static/images/cards/cheetah.jpg',
    imgTitle: 'cheetah',
    vocabList: [
        'food chain',
        'food web',
        'energy pyramid',
        'producer',
        'consumer',
        'predator',
        'prey',
        'herbivore',
        'carnivore',
        'primary consumer',
        'secondary consumer'
    ],
    TEKS: [
        {
            teksNum: TEKS[1].teksNum,
            teksContent: TEKS[1].teksContent,
            ssLink: TEKS[1].ssLink
        }
    ],
    summary:
        'In this unit, we look at the relationshiop between organisms that live together in an ecosystem and how energy is passed between them.',
    vertMenuItems: [
        { Home: '/' },
        { 'Unit Main Page': '/unit5_2' },
        { Game: '/unit5_2/dig_rev_5_2' },
        { 'Mini Quiz': '/unit5_2/mini_quiz_5_2' },
        {
            'Quizlet Card Set':
                'https://quizlet.com/280032865/unit-53-ecology-and-energy-transfer-flash-cards/'
        }
    ]
};
export default unit5_2Obj;
