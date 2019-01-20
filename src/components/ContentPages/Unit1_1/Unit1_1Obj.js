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
            teksContent: TEKS[18].teksContent,
            ssLink: TEKS[18].ssLink
        },
        {
            teksNum: TEKS[20].teksNum,
            teksContent: TEKS[20].teksContent,
            ssLink: TEKS[20].ssLink
        }
    ],
    summary:
        'In this unit we will cover the 3 main parts of cell theory and observe the levels of organization that make up cells in living things.',
    vertMenuItems: [
        { Home: '/' },
        { 'Unit Main Page': '/unit1_1' },
        { 'Digital Review': '/unit1_1/dig_rev_1_1' },
        { 'Mini Quiz': '/unit1_1/mini_quiz_1_1' }, // double check about using history, like history.match + min
        {
            'Quizlet Card Set':
                'https://quizlet.com/323414709/18-19-unit-21-organelles-plant-and-animal-cells-flash-cards/'
        }
    ]
};

export default unit1_1Obj;