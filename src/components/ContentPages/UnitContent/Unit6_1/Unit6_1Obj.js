import Obj7_8B from '../../TEKSContent/TEKS7_8B/Obj7_8B';
import Obj7_8C from '../../TEKSContent/TEKS7_8C/Obj7_8C';

const unit6_1Obj = {
        title: 'Unit 6.1',
        subtitle: 'Weathering, Erosion, Deposition',
        pageExtension: '/unit6_1',
        imageLocation: '/static/images/cards/erosion.jpg',
        imgTitle: 'erosion',
        vocabList: [
                'weathering',
                'erosion',
                'deposition',
                'chemical weathering',
                'mechanical weathering',
                'sediment',
                'abrasion',
                'oxidation',
                'ground water',
                'watershed'
        ],
        TEKS: [
                {
                        teksNum: Obj7_8B.teksNum,
                        teksLabel: Obj7_8B.teksLabel,
                        teksContent: Obj7_8B.teksContent,
                        teksQuiz: Obj7_8B.teksQuiz
                },
                {
                        teksNum: Obj7_8C.teksNum,
                        teksLabel: Obj7_8C.teksLabel,
                        teksContent: Obj7_8C.teksContent,
                        teksQuiz: Obj7_8C.teksQuiz
                }
        ],
        summary: 'Focus: Weathering, erosion, deposition, and human impact on watersheds.',
        vertMenuItems: [
                { Home: '/' },
                { 'Unit Page': '/unit6_1' },
                { Game: '/unit6_1/game6_1' },
                {
                        Quizlet:
                                'https://quizlet.com/287611603/unit-61-weathering-erosion-deposition-and-watersheds-flash-cards/'
                }
        ],
        game: {
                col1: {
                        heading: 'Ecoregion',
                        hint: "Pineywoods, Gulf Prairie, Edward's Plateau",
                        image: require('../Unit5_1/images/ecoregions.png'),
                        definition:
                                'A major ecosystem within an area having similar geography, sunlight, and water'
                },
                col2: {
                        heading: 'Weathering',
                        hint: 'Break it: (like ice wedging, oxidation). Can be mechical and chemical',
                        image: require('./images/ice_wedging.jpg'),
                        definition:
                                'Breaking down and loosening of rock so they can be carried away by erosion'
                },
                col3: {
                        heading: 'Erosion',
                        hint: "'Take It'",
                        image: require('./images/erosion.jpg'),
                        definition: 'The gradual wearing away and removal of sediment'
                },
                col4: {
                        heading: 'Deposition',
                        hint: 'Drop It (example: deltas, alluvial fans',
                        image: require('./images/deposition.jpg'),
                        definition: 'Dropping off sediment after being carried away by agents of erosion'
                },
                col5: {
                        heading: 'Watershed',
                        hint: 'Rain on a ridge can flow in multiple directions',
                        image: require('./images/watershed.gif'),
                        definition: 'An area or ridge of land that separates waters flowing downhill'
                }
        },
        game2: {
                col1: {
                        heading: 'Groundwater',
                        hint: 'Aquifer, use a well to access this',
                        image: require('./images/groundwater.gif'),
                        definition: 'Water held underground in the soil or in pores and crevices in rock'
                },
                col2: {
                        heading: 'Surface Water',
                        hint: 'pond, lake, river',
                        image: require('./images/surface_water.jpg'),
                        definition: 'Water that collects on the surface of the ground'
                },
                col3: {
                        heading: 'Water Table',
                        hint: 'The top of a body of groundwater',
                        image: require('./images/water_table.gif'),
                        definition: 'The highest level or top of the zone of saturation'
                },
                col4: {
                        heading: 'Permeable',
                        hint: 'Clay is less and a pile of rocks is more',
                        image: require('./images/permeable.gif'),
                        definition: 'Material allowing liquids or gases to pass through it'
                },
                col5: {
                        heading: 'Saturated',
                        hint: 'Describes a towel after you drop it in a pool',
                        image: require('./images/saturated.jpg'),
                        definition: 'Holding as much water or moisture as can be absorbed; thoroughly soaked'
                }
        }
};
export default unit6_1Obj;
