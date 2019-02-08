import Obj7_12D from "../../TEKSContent/TEKS7_12D/Obj7_12D";

const unit2_1Obj = {
	title: "Unit 2.1",
	subtitle: "Plant vs Animal Cell Organelles",
	pageExtension: "/unit2_1",
	imageLocation: "/static/images/cards/plant_organelles.jpg",
	imgTitle: "plant organelles",
	vocabList: [
		"organelle",
		"autotroph",
		"heterotroph",
		"chloroplast",
		"mitochondria",
		"central vacuole",
		"cell wall",
		"cytoplasm",
		"cell membrane",
		"nucleus"
	],
	TEKS: [
		{
			teksNum: Obj7_12D.teksNum,
			teksLabel: Obj7_12D.teksLabel,
			teksContent: Obj7_12D.teksContent,
			teksQuiz: Obj7_12D.teksQuiz
		}
	],
	summary: "In this unit we will observe and analyze the differences between plant and animal cells.",
	vertMenuItems: [
		{ Home: "/" },
		{ "Unit Page": "/unit2_1" },
		{ Game: "/unit2_1/game2_1" },
		{
			Quizlet:
				"https://quizlet.com/323414709/18-19-unit-21-organelles-plant-and-animal-cells-flash-cards/"
		}
	],
	game: {
		col1: {
			heading: "Organelle",
			hint: 'Means "little organs"',
			image: "",
			definition: "Any number of organized or specialized strutures within a living cell"
		},
		col2: {
			heading: "Nucleus",
			hint: 'The "brain" of the cell',
			image: "",
			definition:
				"A dense organelle present in eukaryotes that contains the genetic code for the organism"
		},
		col3: {
			heading: "Cell Membrane",
			hint: "outter covering",
			image: "",
			definition: "The sem-permeable membrane surrounding the cytoplasm of a cell"
		},
		col4: {
			heading: "Mitochondrion",
			hint: 'The "powerhouse" of the cell',
			image: "",
			definition:
				"An organelle which carries out cellular respiration, converting sugar into usable energy, ATP, for the cell"
		},
		col5: {
			heading: "Cytoplasm",
			hint: "jelly-like filling",
			image: "",
			definition:
				"The, mostly water containing fluid, which fills the cell helping suspend the organelles"
		}
	},
	game2: {
		col1: {
			heading: "Cell Wall",
			hint: "outter layer for plant cells",
			image: "",
			definition:
				"The outtermost layer of a plant cell that helps provide rigid support and protection"
		},
		col2: {
			heading: "Chloroplast",
			hint: "contains green pigment called chlorophyll",
			image: "",
			definition: "An organelle found in autotrophs that carries out photosynthesis"
		},
		col3: {
			heading: "Central Vacuole",
			hint: "largest organelle in a plant cell",
			image: "",
			definition:
				"An organelle found in plant cells that stores water and maintains turgor pressure. There are small versions of these in animal cells"
		},
		col4: {
			heading: "Lysosome",
			hint: "digestive system of the cell",
			image: "",
			definition:
				"An organelle which contains digestive enzymes that break down worn out organelles, food, and viruses or bacteria"
		},
		col5: {
			heading: "Endoplasmic Reticulum",
			hint: "Shipping factory of the cell",
			image: "",
			definition:
				"An organelle which is mainly responsible for transporting proteins and other substances throughout the cell"
		}
	}
};

export default unit2_1Obj;
