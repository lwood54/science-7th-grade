import Obj7_10A from "../../TEKSContent/TEKS7_10A/Obj7_10A";
import Obj7_10B from "../../TEKSContent/TEKS7_10B/Obj7_10B";

const unit5_1Obj = {
	title: "Unit 5.1",
	subtitle: "Biomes and Biodiversity",
	pageExtension: "/unit5_1",
	imageLocation: "/static/images/cards/rainforest.jpeg",
	imgTitle: "rainforest",
	vocabList: [
		"microhabitat",
		"biome",
		"ecosystem",
		"ecoregion",
		"species",
		"habitat",
		"biodiversity",
		"sustainability"
	],
	TEKS: [
		{
			teksNum: Obj7_10A.teksNum,
			teksLabel: Obj7_10A.teksLabel,
			teksContent: Obj7_10A.teksContent,
			teksQuiz: Obj7_10A.teksQuiz
		},
		{
			teksNum: Obj7_10B.teksNum,
			teksLabel: Obj7_10B.teksLabel,
			teksContent: Obj7_10B.teksContent,
			teksQuiz: Obj7_10B.teksQuiz
		}
	],
	summary:
		"In this unit, we look at a range of environments from microhabitats to biomes and how biodiversity contributes to their sustainability.",
	vertMenuItems: [
		{ Home: "/" },
		{ "Unit Page": "/unit5_1" },
		{ Game: "/unit5_1/game5_1" },
		{
			Quizlet:
				"https://quizlet.com/275509969/unit-51-biomes-microhabitats-and-biodiversity-flash-cards/"
		}
	],
	game: {
		col1: {
			heading: "Microhabitat",
			hint: "A garden with weeds",
			image: "",
			definition:
				"A habitat that is of small extent and which differs in character from its surroundings"
		},
		col2: {
			heading: "Ecosystem",
			hint: "A local forest",
			image: "",
			definition:
				"A biological community of interacting organisms and their physical environment"
		},
		col3: {
			heading: "Biome",
			hint: "Tundra, Taiga, Temperate Forest, Tropical Rainforest, etc",
			image: "",
			definition:
				"A large naturally occurring community of plants and animals occupying a major habitat"
		},
		col4: {
			heading: "Ecoregion",
			hint: "Pineywoods, Gulf Prairie, Edward's Plateau, etc",
			image: "",
			definition:
				"A major ecosystem defined by distinctive geography and receiving uniform solar radiation and moisture"
		},
		col5: {
			heading: "Sustainability",
			hint: "Save the trees, keep our planet balanced and healthy",
			image: "",
			definition:
				"Supporting long-term ecological balance. Maintaining a healthy ecosystem."
		}
	},
	game2: {
		col1: {
			heading: "Tundra",
			hint: "Extremely cold, very low biodiversity",
			image: "",
			definition:
				"A vast, flat, treeless Arctic region of Europe, Asia, and North America in which the subsoil is permanently frozen"
		},
		col2: {
			heading: "Taiga/Boreal",
			hint: "A forest that looks like a bunch of Christmas trees",
			image: "",
			definition:
				"The sometimes swampy coniferous forest of high northern latitudes. Largest land-based biome on Earth."
		},
		col3: {
			heading: "Temperate Forest",
			hint:
				"United States of America has many of these types of forests. Can include deciduous, coniferous, or broadleafed trees",
			image: "",
			definition:
				"A forest found between the tropics and polar regions. This forest has the most significant seasonal changes."
		},
		col4: {
			heading: "Tropical Rainforest",
			hint: "Amazon Jungle is an example",
			image: "",
			definition:
				"A forest found in the tropics which receives an anual rainfall of at least 100 inches"
		},
		col5: {
			heading: "Desert",
			hint: "can be hot or cold, but has little rain",
			image: "",
			definition:
				"A region so arid (lacking precipitation) that it supports very little vegetation or none at all"
		}
	}
};
export default unit5_1Obj;
