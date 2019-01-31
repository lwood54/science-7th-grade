import TEKS from "../../TEKSContent/TEKS";

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
			teksNum: TEKS[1].teksNum,
			teksLabel: TEKS[1].teksLabel,
			teksContent: TEKS[1].teksContent,
			teksQuiz: TEKS[1].teksQuiz
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
	]
};
export default unit5_2Obj;
