import TEKS from "../../TEKSContent/TEKS";

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
			teksNum: TEKS[19].teksNum,
			teksLabel: TEKS[19].teksLabel,
			teksContent: TEKS[19].teksContent,
			teksQuiz: TEKS[19].teksQuiz
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
	]
};

export default unit2_1Obj;
