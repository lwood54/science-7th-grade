import Obj7_5B from "../../TEKSContent/TEKS7_5B/Obj7_5B";

const unit5_2Obj = {
	title: "Unit 5.2",
	subtitle: "Food Webs and Energy Pyramids",
	pageExtension: "/unit5_2",
	imageLocation: "/static/images/cards/cheetah.jpg",
	imgTitle: "cheetah",
	vocabList: [
		"food chain",
		"food web",
		"energy pyramid",
		"producer",
		"consumer",
		"predator",
		"prey",
		"herbivore",
		"carnivore",
		"primary consumer",
		"secondary consumer"
	],
	TEKS: [
		{
			teksNum: Obj7_5B.teksNum,
			teksLabel: Obj7_5B.teksLabel,
			teksContent: Obj7_5B.teksContent,
			teksQuiz: Obj7_5B.teksQuiz
		}
	],
	summary:
		"In this unit, we look at the relationshiop between organisms that live together in an ecosystem and how energy is passed between them.",
	vertMenuItems: [
		{ Home: "/" },
		{ "Unit Page": "/unit5_2" },
		{ Game: "/unit5_2/game5_2" },
		{
			Quizlet:
				"https://quizlet.com/280032865/unit-53-ecology-and-energy-transfer-flash-cards/"
		}
	],
	game: {
		col1: {
			heading: "Food Chain",
			hint: "Simple relationship model between predator, prey, and other organisms",
			image: "",
			definition:
				"A hierarchical series of organisms each dependent on the next as a source of food"
		},
		col2: {
			heading: "Food Web",
			hint: "A more complex model of energy flow in an ecosystem",
			image: "",
			definition: "A system of interlocking and interdependent food chains"
		},
		col3: {
			heading: "Energy Pyramid",
			hint: "A triangle showing available energy",
			image: "",
			definition: "A graphical model of energy flow and availability in a community"
		},
		col4: {
			heading: "Primary Consumer",
			hint: "We like eating plants!",
			image: "",
			definition: "An organism that gets its energy by eating producers"
		},
		col5: {
			heading: "Secondary Consumer",
			hint: "We like eating things that eat plants!",
			image: "",
			definition:
				"2nd level consumers that feed on primary consumers. They can be carnivores or omnivores"
		}
	},
	game2: {
		col1: {
			heading: "Tertiary Consumer",
			hint: "Lions, Bears, Great White Sharks, etc",
			image: "",
			definition:
				"A carnivore at the topmost level in a food chain that feeds on other carnivores"
		},
		col2: {
			heading: "Decomposer",
			hint: "Mushrooms, Bacteria, Earthworms, etc",
			image: "",
			definition:
				"An organism, especially a soil bacterium, fungus, or invertebrate, that breaks down organic material"
		},
		col3: {
			heading: "Producer",
			hint: "We are also known as plants and autotrophs!",
			image: "",
			definition:
				"Organisms that take in energy from the Sun and make their own food by Photosynthesis"
		},
		col4: {
			heading: "Energy",
			hint: "This is required by all living things",
			image: "",
			definition:
				"All organisms spend a large amount of their resources trying to attain this. It is required to live"
		},
		col5: {
			heading: "Decay",
			hint: "This is what decomposers do to dead organic matter",
			image: "",
			definition: "This is the action of rotting or decomposing organic matter"
		}
	}
};
export default unit5_2Obj;
