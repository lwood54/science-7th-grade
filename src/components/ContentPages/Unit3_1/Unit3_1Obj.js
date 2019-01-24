import TEKS from '../TEKS';

const unit3_1Obj = {
    title: 'Unit 3.1',
    subtitle: 'Genetics and Reproduction',
    pageExtension: '/unit3_1',
    imageLocation: '/static/images/cards/DNA.jpg',
    imgTitle: 'DNA',
    vocabList: [
        'asexual Reproduction',
        'sexual Reproduction',
        'variation',
        'uniform',
        'fertilization',
        'zygote',
        'budding',
        'binary fission',
        'inherited',
        'heredity',
        'generation',
        'heterozygous',
        'homozygous',
        'genotype',
        'phenotype'
    ],
    TEKS: [
        {
            teksNum: TEKS[23].teksNum,
            teksLabel: TEKS[23].teksLabel,
            teksContent: TEKS[23].teksContent,
            teksQuiz: TEKS[23].teksQuiz
        },
        {
            teksNum: TEKS[24].teksNum,
            teksLabel: TEKS[24].teksLabel,
            teksContent: TEKS[24].teksContent,
            teksQuiz: TEKS[24].teksQuiz
        },
        {
            teksNum: TEKS[25].teksNum,
            teksLabel: TEKS[25].teksLabel,
            teksContent: TEKS[25].teksContent,
            teksQuiz: TEKS[25].teksQuiz
        }
    ],
    summary:
        'In this unit, we look at reproduction at the cellular level and understand how traits are passed to following generations.',
    vertMenuItems: [
        { Home: '/' },
        { 'Unit Page': '/unit3_1' },
        { Game: '/unit3_1/game3_1' },
        {
            'Quizlet Card Set':
                'https://quizlet.com/248404046/unit-31-genetics-and-reproduction-flash-cards/'
        }
    ]
};
export default unit3_1Obj;
