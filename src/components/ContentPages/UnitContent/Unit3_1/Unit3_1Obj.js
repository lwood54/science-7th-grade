import Obj7_14A from '../../TEKSContent/TEKS7_14A/Obj7_14A';
import Obj7_14B from '../../TEKSContent/TEKS7_14B/Obj7_14B';
import Obj7_14C from '../../TEKSContent/TEKS7_14C/Obj7_14C';

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
                        teksNum: Obj7_14A.teksNum,
                        teksLabel: Obj7_14A.teksLabel,
                        teksContent: Obj7_14A.teksContent,
                        teksQuiz: Obj7_14A.teksQuiz
                },
                {
                        teksNum: Obj7_14B.teksNum,
                        teksLabel: Obj7_14B.teksLabel,
                        teksContent: Obj7_14B.teksContent,
                        teksQuiz: Obj7_14B.teksQuiz
                },
                {
                        teksNum: Obj7_14C.teksNum,
                        teksLabel: Obj7_14C.teksLabel,
                        teksContent: Obj7_14C.teksContent,
                        teksQuiz: Obj7_14C.teksQuiz
                }
        ],
        summary: 'Focus: Reproduction at the cellular level and the passage of genetic traits.',
        vertMenuItems: [
                { Home: '/' },
                { 'Unit Page': '/unit3_1' },
                { Game: '/unit3_1/game3_1' },
                {
                        Quizlet:
                                'https://quizlet.com/248404046/unit-31-genetics-and-reproduction-flash-cards/'
                }
        ],
        game: {
                col1: {
                        heading: 'col 1 section 1',
                        hint: '',
                        image: '',
                        definition: ''
                },
                col2: {
                        heading: '',
                        hint: '',
                        image: '',
                        definition: ''
                },
                col3: {
                        heading: '',
                        hint: '',
                        image: '',
                        definition: ''
                },
                col4: {
                        heading: '',
                        hint: '',
                        image: '',
                        definition: ''
                },
                col5: {
                        heading: '',
                        hint: '',
                        image: '',
                        definition: ''
                }
        },
        game2: {
                col1: {
                        heading: 'col 1 section 2',
                        hint: '',
                        image: '',
                        definition: ''
                },
                col2: {
                        heading: '',
                        hint: '',
                        image: '',
                        definition: ''
                },
                col3: {
                        heading: '',
                        hint: '',
                        image: '',
                        definition: ''
                },
                col4: {
                        heading: '',
                        hint: '',
                        image: '',
                        definition: ''
                },
                col5: {
                        heading: '',
                        hint: '',
                        image: '',
                        definition: ''
                }
        }
};
export default unit3_1Obj;
