import Obj7_5B from '../../TEKSContent/TEKS7_5B/Obj7_5B';

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
                        teksNum: Obj7_5B.teksNum,
                        teksLabel: Obj7_5B.teksLabel,
                        teksContent: Obj7_5B.teksContent,
                        teksQuiz: Obj7_5B.teksQuiz
                }
        ],
        summary:
                'In this unit, we look at the relationshiop between organisms that live together in an ecosystem and how energy is passed between them.',
        vertMenuItems: [
                { Home: '/' },
                { 'Unit Page': '/unit5_2' },
                { Game: '/unit5_2/game5_2' },
                {
                        Quizlet:
                                'https://quizlet.com/280032865/unit-53-ecology-and-energy-transfer-flash-cards/'
                }
        ]
};
export default unit5_2Obj;
