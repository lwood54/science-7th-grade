import Obj7_12D from '../../TEKSContent/TEKS7_12D/Obj7_12D';

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
                        teksNum: Obj7_12D.teksNum,
                        teksLabel: Obj7_12D.teksLabel,
                        teksContent: Obj7_12D.teksContent,
                        teksQuiz: Obj7_12D.teksQuiz
                }
        ],
        summary: 'In this unit we will observe and analyze the differences between plant and animal cells.',
        vertMenuItems: [
                { Home: '/' },
                { 'Unit Page': '/unit2_1' },
                { Game: '/unit2_1/game2_1' },
                {
                        Quizlet:
                                'https://quizlet.com/323414709/18-19-unit-21-organelles-plant-and-animal-cells-flash-cards/'
                }
        ],
        game: {
                col1: {
                        heading: 'Organelle',
                        hint: 'Means "little organs"',
                        image: '',
                        definition: 'Any number of organized or specialized strutures within a living cell'
                },
                col2: {
                        heading: 'Nucleus',
                        hint: 'The "brain" of the cell',
                        image: '',
                        definition: 'Organelle present in eukaryotes that contains the DNA for the organism'
                },
                col3: {
                        heading: 'Cell Membrane',
                        hint: 'outter covering',
                        image: '',
                        definition: 'The sem-permeable membrane surrounding the cytoplasm of a cell'
                },
                col4: {
                        heading: 'Mitochondrion',
                        hint: 'The "powerhouse" of the cell',
                        image: '',
                        definition: 'Organelle that carries out cellular respiration, converts sugar into ATP'
                },
                col5: {
                        heading: 'Cytoplasm',
                        hint: 'jelly-like filling',
                        image: '',
                        definition:
                                'Mostly water contaiing fluid that fills a cell and helps support organelles'
                }
        },
        game2: {
                col1: {
                        heading: 'Cell Wall',
                        hint: 'outter layer for plant cells',
                        image: '',
                        definition:
                                'Outter layer of a plant cell that helps provide rigid support and protection'
                },
                col2: {
                        heading: 'Chloroplast',
                        hint: 'contains green pigment called chlorophyll',
                        image: '',
                        definition: 'An organelle found in autotrophs that carries out photosynthesis'
                },
                col3: {
                        heading: 'Central Vacuole',
                        hint: 'largest organelle in a plant cell',
                        image: '',
                        definition:
                                'Organelle in plant cells that stores water. Small versions in animal cells'
                },
                col4: {
                        heading: 'Lysosome',
                        hint: 'digestive system of the cell',
                        image: '',
                        definition:
                                'Organelle that contains digestive enzymes: break down old organelles & waste'
                },
                col5: {
                        heading: 'Endoplasmic Reticulum',
                        hint: 'Shipping factory of the cell',
                        image: '',
                        definition: 'Organelle responsible for transporting proteins and other substances'
                }
        }
};

export default unit2_1Obj;
