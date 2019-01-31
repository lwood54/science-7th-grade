import TEKS from "../../TEKSContent/TEKS";

const unit4_2Obj = {
	title: "Unit 4.2",
	subtitle: "Ecological Succession and Catastrophic Events",
	pageExtension: "/unit4_2",
	imageLocation: "/static/images/cards/tornado.jpg",
	imgTitle: "tornado",
	vocabList: [
		"Catastrophic Event",
		"Earthquake",
		"Tsunami",
		"Tornado",
		"Hurricane",
		"Deforestation",
		"Drought",
		"Ecological Succession",
		"Primary Succession",
		"Secondary Succession",
		"Pioneer Species",
		"Climax Community",
		"Lichens"
	],
	TEKS: [
		{
			teksNum: TEKS[12].teksNum,
			teksLabel: TEKS[12].teksLabel,
			teksContent: TEKS[12].teksContent,
			teksQuiz: TEKS[12].teksQuiz
		},
		{
			teksNum: TEKS[5].teksNum,
			teksLabel: TEKS[5].teksLabel,
			teksContent: TEKS[5].teksContent,
			teksQuiz: TEKS[5].teksQuiz
		}
	],
	summary:
		"In this unit, we look at how catastrophic events affect ecosystems. We will also observe and analyze the process that ecosystems go through to reach homeostasis.",
	vertMenuItems: [
		{ Home: "/" },
		{ "Unit Page": "/unit4_2" },
		{ Game: "/unit4_2/game4_2" },
		{
			Quizlet:
				"https://quizlet.com/267717343/unit-43-review-ecological-succession-and-catastrophic-events-flash-cards/"
		}
	]
};
export default unit4_2Obj;
