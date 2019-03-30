import Obj7_5A from '../../TEKSContent/TEKS7_5A/Obj7_5A';
import Obj7_6A from '../../TEKSContent/TEKS7_6A/Obj7_6A';
import Obj7_7A from '../../TEKSContent/TEKS7_7A/Obj7_7A';
import Obj7_7B from '../../TEKSContent/TEKS7_7B/Obj7_7B';
import Obj7_13A from '../../TEKSContent/TEKS7_13A/Obj7_13A';

const unit1_2Obj = {
        title: 'Unit 1.2',
        subtitle: 'Energy Transformations',
        pageExtension: '/unit1_2',
        imageLocation: '/static/images/cards/seedling.jpg',
        imgTitle: 'seedling',
        vocabList: [
                'Phototropism',
                'Geotropism',
                'Turgor Pressure',
                'Potential Energy',
                'Kinetic Energy',
                'Radiant Energy',
                'Photosynthesis',
                'Cellular Respiration',
                'Reactant',
                'Product'
        ],
        TEKS: [
                {
                        teksNum: Obj7_5A.teksNum,
                        teksLabel: Obj7_5A.teksLabel,
                        teksContent: Obj7_5A.teksContent,
                        teksQuiz: Obj7_5A.teksQuiz
                },
                {
                        teksNum: Obj7_6A.teksNum,
                        teksLabel: Obj7_6A.teksLabel,
                        teksContent: Obj7_6A.teksContent,
                        teksQuiz: Obj7_6A.teksQuiz
                },
                {
                        teksNum: Obj7_7A.teksNum,
                        teksLabel: Obj7_7A.teksLabel,
                        teksContent: Obj7_7A.teksContent,
                        teksQuiz: Obj7_7A.teksQuiz
                },
                {
                        teksNum: Obj7_7B.teksNum,
                        teksLabel: Obj7_7B.teksLabel,
                        teksContent: Obj7_7B.teksContent,
                        teksQuiz: Obj7_7B.teksQuiz
                },
                {
                        teksNum: Obj7_13A.teksNum,
                        teksLabel: Obj7_13A.teksLabel,
                        teksContent: Obj7_13A.teksContent,
                        teksQuiz: Obj7_13A.teksQuiz
                }
        ],
        summary: 'Focus: Energy transformations within living systems including photosynthesis.',
        vertMenuItems: [
                { Home: '/' },
                { 'Unit Page': '/unit1_2' },
                { Game: '/unit1_2/game1_2' },
                {
                        Quizlet:
                                'https://quizlet.com/317790663/18-19-unit-12-energy-in-living-systems-flash-cards/'
                }
        ],
        game: {
                col1: {
                        heading: 'Photosynthesis',
                        hint: 'Process carried out in chloropalsts',
                        image: '',
                        definition: 'Process that autotrophs use to convert radiant energy to glucose'
                },
                col2: {
                        heading: 'Energy',
                        hint: 'Radiant, Chemical, Thermal, Electrical, Kinetic, Potential',
                        image: '',
                        definition: 'The ability to do work, or produce change'
                },
                col3: {
                        heading: 'Seedling',
                        hint: 'A baby plant',
                        image: '',
                        definition: 'A young plant, especially one raised from seed and not from cutting'
                },
                col4: {
                        heading: 'Chemical Change',
                        hint: 'Burning, Explosions, Rust formation',
                        image: '',
                        definition:
                                'The result of a reaction which rearranges the chemical makeup of a substance'
                },
                col5: {
                        heading: 'Physical Change',
                        hint: 'Ripping, Tearing, Smashing, Squishing, Bending, Breaking, etc',
                        image: '',
                        definition: 'A change in an object that does not change its chemical makeup'
                }
        },
        game2: {
                col1: {
                        heading: 'Geotropism',
                        hint: 'Response to gravity',
                        image: '',
                        definition: 'The growth of the parts of plants in response to gravity'
                },
                col2: {
                        heading: 'Phototropism',
                        hint: 'Response to light',
                        image: '',
                        definition: 'The growth of the parts of plants in response to light'
                },
                col3: {
                        heading: 'Hydrotropism',
                        hint: 'Response to water',
                        image: '',
                        definition: 'The growth of the parts of plants in response to water'
                },
                col4: {
                        heading: 'Thigmotropism',
                        hint: 'Response to touch',
                        image: '',
                        definition: 'The growth of the parts of plants in response to touch'
                },
                col5: {
                        heading: 'Turgor Pressure',
                        hint: 'less of this results in wilting',
                        image: '',
                        definition:
                                'Force of water in a cell that pushes out on the cell wall, helps give structure'
                }
        }
};
export default unit1_2Obj;
