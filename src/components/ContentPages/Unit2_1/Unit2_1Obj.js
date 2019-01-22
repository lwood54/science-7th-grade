import TEKS from '../TEKS';

const unit2_1Obj = {
    title: 'Unit 2.1',
    subtitle: 'Plant vs Animal Cell Organelles',
    pageExtension: '/unit2_1',
    imageLocation: '/static/images/cards/plant_organelles.jpg',
    imgTitle: 'plant organelles',
    vocabList: [
        'organelle',
        'autotroph',
        'heterotroph',
        'chloroplast',
        'mitochondria',
        'central vacuole',
        'cell wall',
        'cytoplasm',
        'cell membrane',
        'nucleus'
    ],
    TEKS: [
        {
            teksNum: TEKS[19].teksNum,
            teksContent: TEKS[19].teksContent,
            ssLink: TEKS[19].ssLink
        }
    ],
    summary:
        'In this unit we will observe and analyze the differences between plant and animal cells.',
    vertMenuItems: [
        { home: '/' },
        { unitMain: '/unit2_1' },
        { game: '/unit2_1/game2_1' },
        {
            quizletLink:
                'https://quizlet.com/323414709/18-19-unit-21-organelles-plant-and-animal-cells-flash-cards/'
        }
    ]
};

export default unit2_1Obj;
