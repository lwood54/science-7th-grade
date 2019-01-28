const teks = [
    {
        teksNum: '7.5 A',
        teksLabel: 'Photosynthesis',
        teksContent:
            'recognize that radiant energy from the Sun is transformed into chemical energy through the process of photosynthesis',
        teksQuiz: '/quiz7_5A',
        questions: [
            {
                text:
                    'What is the name of the process that converts sunlight (radiant energy) into chemical energy (glucose)?',
                answers: [
                    { wrong1: 'Cellular Respiration' },
                    { wrong2: 'Osmosis' },
                    { wrong3: 'Photokinesis' },
                    { correct: 'Photosynthesis' }
                ],
                image: require('./Quizzes/QuizTemplate/images/plant.jpg')
            },
            {
                text:
                    'Identify the type of energy conversion taking place during photosynthesis.',
                answers: [
                    { wrong1: 'chemical to radiant' },
                    { wrong2: 'radiant to kinetic' },
                    { wrong3: 'chemical to kinetic' },
                    { correct: 'radiant to chemical' }
                ],
                image: ''
            },
            {
                text:
                    'Which of the following is the initial source of energy for most organisms on Earth?',
                answers: [
                    { wrong1: 'glucose' },
                    { wrong2: 'chemical energy' },
                    { wrong3: 'producers' },
                    { correct: 'radiant energy' }
                ],
                image: ''
            }
        ]
    },
    {
        teksNum: '7.5 B',
        teksLabel: 'Food Chains and Webs',
        teksContent:
            'diagram the flow of energy through living systems, including food chains, food webs, and energy pyramids',
        teksQuiz: '/quiz7_5B',
        questions: [
            {
                text: 'What do the arrows in a food chain or web represent?',
                answers: [
                    {
                        wrong1:
                            'The  arrows point from the predators to the prey.'
                    },
                    { wrong2: "It isn't an arrow, it's a line." },
                    {
                        wrong3:
                            'It represents organisms that share similar traits in an ecosystem.'
                    },
                    {
                        correct:
                            'The arrows represent the direction that energy flows in an ecosystem.'
                    }
                ],
                image: require('./Quizzes/QuizTemplate/images/foodweb.jpg')
            }
        ]
    },
    {
        teksNum: '7.6 A',
        teksLabel: 'Physical and Chemical Changes',
        teksContent:
            'distinguish between physical and chemical changes in matter',
        teksQuiz: '/quiz7_6A',
        questions: []
    },
    {
        teksNum: '7.7 A',
        teksLabel: 'Energy Transformations',
        teksContent:
            'Illustrate the transformational energy within organisms such as the transfer from chemical energy and thermal energy',
        teksQuiz: '/quiz7_7A',
        questions: []
    },
    {
        teksNum: '7.7 B',
        teksLabel: 'Forces in Nature',
        teksContent:
            'demonstrate and illustrate forces that affect motion in organisms such as emergence of seedlings, turgor pressure, geotropism, and circulation of blood',
        teksQuiz: '/quiz7_7B',
        questions: []
    },
    {
        teksNum: '7.8 A',
        teksLabel: 'Catastrophic Events',
        teksContent:
            'predict and describe how catastrophic events such as floods, hurricanes, or tornadoes impact ecosystems',
        teksQuiz: '/quiz7_8A',
        questions: []
    },
    {
        teksNum: '7.8 B',
        teksLabel: 'Weathering, Erosion, and Deposition',
        teksContent:
            'analyze the effects of weathering, erosion, and deposition on the environment in ecoregions of Texas.',
        teksQuiz: '/quiz7_8B',
        questions: []
    },
    {
        teksNum: '7.8 C',
        teksLabel: 'Groundwater and Surface Water',
        teksContent:
            'model the effects of human activity on groundwater and surface water in a watershed',
        teksQuiz: '/quiz7_8C',
        questions: []
    },
    {
        teksNum: '7.9 A',
        teksLabel: 'Characteristics of Space',
        teksContent:
            'analyze the characteristics of objects in our solar system that allow life to exist such as the proximity of the Sun, presence of water, and composition of the atmosphere',
        teksQuiz: '/quiz7_9A',
        questions: []
    },
    {
        teksNum: '7.9 B',
        teksLabel: 'Space Travel',
        teksContent:
            'identify the accommodations, considering the characteristics of our solar system, that enabled manned space exploration',
        teksQuiz: '/quiz7_9B',
        questions: []
    },
    {
        teksNum: '7.10 A',
        teksLabel: 'Microhabitats and Biomes',
        teksContent:
            'observe and describe how different environments, including microhabitats in schoolyards and biomes, support different varieties of organisms',
        teksQuiz: '/quiz7_10A',
        questions: []
    },
    {
        teksNum: '7.10 B',
        teksLabel: 'Biodiversity and Sustainability',
        teksContent:
            'describe how biodiversity contributes to the sustainability of an ecosystem',
        teksQuiz: '/quiz7_10B',
        questions: []
    },
    {
        teksNum: '7.10 C',
        teksLabel: 'Ecological Succession',
        teksContent:
            'observe, record, and describe the role of ecological succession such as in a microhabitat of a garden with weeds',
        teksQuiz: '/quiz7_10C',
        questions: []
    },
    {
        teksNum: '7.11 A',
        teksLabel: 'Dichotomous Keys',
        teksContent:
            'examine organisms or their structures such as insects or leaves and use dichotomous keys for identification',
        teksQuiz: '/quiz7_11A',
        questions: []
    },
    {
        teksNum: '7.11 B',
        teksLabel: 'Variation within a Species',
        teksContent:
            'explain variation within a population or species by comparing external features, behaviors, or physiology of organisms that enhance their survival such as migration, hibernation, or storage of food in a bulb',
        teksQuiz: '/quiz7_11B',
        questions: []
    },
    {
        teksNum: '7.11 C',
        teksLabel: 'Natural Selection',
        teksContent:
            'identify some changes in genetic traits that have occurred over several generations through natural selection and selective breeding such as the Galapagos Medium Ground Finch (Geospiza fortis) or domestic animals and hybrid plants',
        teksQuiz: '/quiz7_11C',
        questions: []
    },
    {
        teksNum: '7.12 A',
        teksLabel: 'Adaptations',
        teksContent:
            'investigate and explain how internal structures of organisms have adaptations that allow specific functions such as gills in fish, hollow bones in birds, or xylem in plants',
        teksQuiz: '/quiz7_12A',
        questions: []
    },
    {
        teksNum: '7.12 B',
        teksLabel: 'Body Systems',
        teksContent:
            'identify the main functions of the systems of the human organism, including the circulatory, respiratory, skeletal, muscular, digestive, excretory, reproductive, integumentary, nervous, and endocrine systems',
        teksQuiz: '/quiz7_12B',
        questions: []
    },
    {
        teksNum: '7.12 C',
        teksLabel: 'Levels of Organization',
        teksContent:
            'recognize levels of organization in plants and animals, including cells, tissues, organs, organ systems, and organisms',
        teksQuiz: '/quiz7_12C',
        questions: []
    },
    {
        teksNum: '7.12 D',
        teksLabel: 'Plant vs Animal Cell Organelles',
        teksContent:
            'differentiate between structure and function in plant and animal cell organelles, including cell membrane, cell wall, nucleus, cytoplasm, mitochondrion, chloroplast, and vacuole',
        teksQuiz: '/quiz7_12D',
        questions: []
    },
    {
        teksNum: '7.12 F',
        teksLabel: 'Cell Theory',
        teksContent: ' recognize the components of cell theory',
        teksQuiz: '/quiz7_12F',
        questions: []
    },
    {
        teksNum: '7.13 A',
        teksLabel: 'Response to External Stimuli',
        teksContent:
            'investigate how organisms respond to external stimuli found in the environment such as phototropism and fight or flight',
        teksQuiz: '/quiz7_13A',
        questions: []
    },
    {
        teksNum: '7.13 B',
        teksLabel: 'Response to Internal Stimuli',
        teksContent:
            'describe and relate responses in organisms that may result from internal stimuli such as wilting in plants and fever or vomiting in animals that allow them to maintain balance',
        teksQuiz: '/quiz7_13B',
        questions: []
    },
    {
        teksNum: '7.14 A',
        teksLabel: 'Heredity',
        teksContent:
            'define heredity as the passage of genetic instructions from one generation to the next generation',
        teksQuiz: '/quiz7_14A',
        questions: []
    },
    {
        teksNum: '7.14 B',
        teksLabel: 'Asexual vs Sexual Reproduction',
        teksContent:
            'compare the results of uniform or diverse offspring from asexual or sexual reproduction',
        teksQuiz: '/quiz7_14B',
        questions: []
    },
    {
        teksNum: '7.14 C',
        teksLabel: 'Inherited Traits',
        teksContent:
            'recognize that inherited traits of individuals are governed in the genetic material found in the genes within chromosomes in the nucleus',
        teksQuiz: '/quiz7_14C',
        questions: []
    }
];

export default teks;
