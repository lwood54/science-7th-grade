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
            teksContent: TEKS[23].teksContent,
            ssLink: TEKS[23].ssLink
        },
        {
            teksNum: TEKS[24].teksNum,
            teksContent: TEKS[24].teksContent,
            ssLink: TEKS[24].ssLink
        },
        {
            teksNum: TEKS[25].teksNum,
            teksContent: TEKS[25].teksContent,
            ssLink: TEKS[25].ssLink
        }
    ],
    summary:
        'In this unit, we look at reproduction at the cellular level and understand how traits are passed to following generations.',
    vertMenuItems: [
        { Home: '/' },
        { 'Unit Main Page': '/unit3_1' },
        { Game: '/unit3_1/dig_rev_3_1' },
        { 'Mini Quiz': '/unit3_1/mini_quiz_3_1' },
        {
            'Quizlet Card Set':
                'https://quizlet.com/248404046/unit-31-genetics-and-reproduction-flash-cards/'
        }
    ]
};
export default unit3_1Obj;
