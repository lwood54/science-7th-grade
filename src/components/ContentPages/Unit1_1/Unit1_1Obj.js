import TEKS from '../TEKS';

const unit1_1Obj = {
        title: 'Unit 1.1',
        subtitle: 'Cell Theory and Levels of Organization',
        pageExtension: '/unit1_1',
        imageLocation: '/static/images/cards/dividing_cells.jpg',
        imgTitle: 'cell division',
        vocabList: [
                'Cell Theory',
                'Prokaryotic',
                'Eukaryotic',
                'Energy',
                'DNA',
                'Nucleus',
                'Cell',
                'Tissue',
                'Organ',
                'Organ System',
                'Organism'
        ],
        TEKS: [
                {
                        teksNum: TEKS[18].teksNum,
                        teksLabel: TEKS[18].teksLabel,
                        teksContent: TEKS[18].teksContent,
                        teksQuiz: TEKS[18].teksQuiz
                },
                {
                        teksNum: TEKS[20].teksNum,
                        teksLabel: TEKS[20].teksLabel,
                        teksContent: TEKS[20].teksContent,
                        teksQuiz: TEKS[20].teksQuiz
                }
        ],
        summary:
                'In this unit we will cover the 3 main parts of cell theory and observe the levels of organization that make up cells in living things.',
        vertMenuItems: [
                { Home: '/' },
                { 'Unit Page': '/unit1_1' },
                { Game: '/unit1_1/game1_1' },
                {
                        Quizlet:
                                'https://quizlet.com/323414709/18-19-unit-21-organelles-plant-and-animal-cells-flash-cards/'
                }
        ]
};

export default unit1_1Obj;
