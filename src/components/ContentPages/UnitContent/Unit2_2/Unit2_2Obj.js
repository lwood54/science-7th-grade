import Obj7_12B from "../../TEKSContent/TEKS7_12B/Obj7_12B";

const unit2_2Obj = {
	title: "Unit 2.2",
	subtitle: "Body Systems",
	pageExtension: "/unit2_2",
	imageLocation: "/static/images/cards/organs.jpg",
	imgTitle: "organs",
	vocabList: [
		"organ",
		"organ system",
		"homeostasis",
		"blood pressure",
		"fight or flight",
		"enzyme",
		"internal stimuli",
		"external stimuli"
	],
	TEKS: [
		{
			teksNum: Obj7_12B.teksNum,
			teksLabel: Obj7_12B.teksLabel,
			teksContent: Obj7_12B.teksContent,
			teksQuiz: Obj7_12B.teksQuiz
		}
	],
	summary:
		"In this unit, we look at the main systems and organs of the human body and analyze how they work together to help the body maintain homeostasis.",
	vertMenuItems: [
		{ Home: "/" },
		{ "Unit Page": "/unit2_2" },
		{ Game: "/unit2_2/game2_2" },
		{
			Quizlet: "https://quizlet.com/330016195/18-19-unit-22-body-systems-flash-cards/"
		}
	],
	game: {
		col1: {
			heading: "Circulatory System",
			hint: "Major organs: Heart, Blood, Blood Vessels",
			image: "",
			definition: "The system that circulates blood and lymph through the body."
		},
		col2: {
			heading: "Respiratory System",
			hint: "Major organs: Lungs, Trachea, Bronchial Tubes",
			image: "",
			definition:
				"The system that enables gas exchange, bringing in oxygen and getting rid of carbon dioxide and water vapor waste"
		},
		col3: {
			heading: "Digestive System",
			hint:
				"Major organs: Mouth, Esophagus, Stomach, Liver, Small Intestine, Large Intestine",
			image: "",
			definition:
				"The system that will physically and chemically break down food into molecules that can be sent to the circulatory system"
		},
		col4: {
			heading: "Nervous System",
			hint: "Major organs: Brain, Spinal Cord, Peripheral Nerves",
			image: "",
			definition: "The system that sends and receives information through the body"
		},
		col5: {
			heading: "Reproductive System",
			hint: "Major organs: Testes, Ovaries, etc",
			image: "",
			definition:
				"The system that ensures the survival of the species by creating offspring"
		}
	},
	game2: {
		col1: {
			heading: "Muscular System",
			hint: "3 muscle types: Skeletal, Smooth, Cardiac",
			image: "",
			definition: "The system that enables movement and helps maintain posture"
		},
		col2: {
			heading: "Skeletal System",
			hint: "Major organs: Skull, Ribs, Femur, etc",
			image: "",
			definition:
				"The system that protects internal organs, gives structure to support movement and makes red blood cells"
		},
		col3: {
			heading: "Endocrine System",
			hint: "Major organs: Pituitary Gland, Thyroid Gland, Adrenal Glands, Testes, Ovaries",
			image: "",
			definition:
				"The system that sends chemical messages throughout the body through the circulatory system"
		},
		col4: {
			heading: "Integumentary System",
			hint: "Major organs: Skin, Hair, Nails",
			image: "",
			definition:
				"The system that acts as a barrier to the outside world, prevents infection, prevents water loss, and enables touch"
		},
		col5: {
			heading: "Excretory System",
			hint: "Major organs: Kidneys, Bladder, Lungs, Skin",
			image: "",
			definition:
				"The system that helps remove harmful waste from the body. It works with other systems to accomplish this"
		}
	}
};
export default unit2_2Obj;
