import Obj7_12C from "../../TEKSContent/TEKS7_12C/Obj7_12C";
import Obj7_12F from "../../TEKSContent/TEKS7_12F/Obj7_12F";

const unit1_1Obj = {
	title: "Unit 1.1",
	subtitle: "Cell Theory and Levels of Organization",
	pageExtension: "/unit1_1",
	imageLocation: "/static/images/cards/dividing_cells.jpg",
	imgTitle: "cell division",
	vocabList: [
		"Cell Theory",
		"Prokaryotic",
		"Eukaryotic",
		"Energy",
		"DNA",
		"Nucleus",
		"Cell",
		"Tissue",
		"Organ",
		"Organ System",
		"Organism"
	],
	TEKS: [
		{
			teksNum: Obj7_12C.teksNum,
			teksLabel: Obj7_12C.teksLabel,
			teksContent: Obj7_12C.teksContent,
			teksQuiz: Obj7_12C.teksQuiz
		},
		{
			teksNum: Obj7_12F.teksNum,
			teksLabel: Obj7_12F.teksLabel,
			teksContent: Obj7_12F.teksContent,
			teksQuiz: Obj7_12F.teksQuiz
		}
	],
	summary:
		"In this unit we will cover the 3 main parts of cell theory and observe the levels of organization that make up cells in living things.",
	vertMenuItems: [
		{ Home: "/" },
		{ "Unit Page": "/unit1_1" },
		{ Game: "/unit1_1/game1_1" },
		{
			Quizlet:
				"https://quizlet.com/323414709/18-19-unit-21-organelles-plant-and-animal-cells-flash-cards/"
		}
	],
	game: {
		col1: {
			heading: "Cell Theory",
			hint: "3 key concepts bringing understanding to cells",
			image: "",
			definition:
				"The cell is the basic unit of life, cells come from previous cells, living things are made of one or more cells "
		},
		col2: {
			heading: "Levels of Organization",
			hint: "how living things are structured",
			image: "",
			definition: "This is the structure that all living things on Earth share"
		},
		col3: {
			heading: "Amoeba",
			hint: "Single-celled organism",
			image: "",
			definition:
				"Single-celled animal that catches food and moves about by extending fingerlike projections"
		},
		col4: {
			heading: "Cell Membrane",
			hint: "outter covering of a cell",
			image: "",
			definition: "The semi-permeable membrane surrounding the cytoplasm of a cell"
		},
		col5: {
			heading: "Cytoplasm",
			hint: "jelly-like filling of a cell",
			image: "",
			definition:
				"The, mostly water contaiing fluid that fills a cell and helps suspend the strutures inside"
		}
	},
	game2: {
		col1: {
			heading: "Cell",
			hint: "basic building block of life",
			image: "",
			definition:
				"The smallest unit that can sustain life. Organisms can be made of one or many of these"
		},
		col2: {
			heading: "Tissue",
			hint: "a layer of skin, a part of your bicep",
			image: "",
			definition:
				"This is formed when a group of cells work together to perform a specific task"
		},
		col3: {
			heading: "Organ",
			hint: "Heart, Lungs, Biceps, Brain, etc",
			image: "",
			definition:
				"This is formed when groups of tissues work together to perform a specific task"
		},
		col4: {
			heading: "Organ System",
			hint: "Circulatory System, Digestive System, Muscular System, etc",
			image: "",
			definition: "A group of organs working together to perform a specific task"
		},
		col5: {
			heading: "Organism",
			hint: "one whole entity",
			image: "",
			definition: "A living individual, which can be multi-celled or single-celled"
		}
	}
};

export default unit1_1Obj;
