import Obj7_9A from "../../TEKSContent/TEKS7_9A/Obj7_9A";
import Obj7_9B from "../../TEKSContent/TEKS7_9B/Obj7_9B";

const unit6_2Obj = {
	title: "Unit 6.2",
	subtitle: "Space",
	pageExtension: "/unit6_2",
	imageLocation: "/static/images/cards/spaceX.jpeg",
	imgTitle: "spaceX",
	vocabList: [
		"habitable zone",
		"rotation",
		"revolution",
		"accommodation",
		"space shuttle",
		"proximity",
		"light year",
		"composition",
		"gravitational pull"
	],
	TEKS: [
		{
			teksNum: Obj7_9A.teksNum,
			teksLabel: Obj7_9A.teksLabel,
			teksContent: Obj7_9A.teksContent,
			teksQuiz: Obj7_9A.teksQuiz
		},
		{
			teksNum: Obj7_9B.teksNum,
			teksLabel: Obj7_9B.teksLabel,
			teksContent: Obj7_9B.teksContent,
			teksQuiz: Obj7_9B.teksQuiz
		}
	],
	summary:
		"In this unit, we look at the characteristics of the solar system and what it takes for human space travel and exploration.",
	vertMenuItems: [
		{ Home: "/" },
		{ "Unit Page": "/unit6_2" },
		{ Game: "/unit6_2/game6_2" },
		{
			Quizlet: "https://quizlet.com/287617961/unit-62-space-work-force-flash-cards/"
		}
	],
	game: {
		col1: {
			heading: "Habitable Zone",
			hint: "AKA: The Goldilocks Zone",
			image: "",
			definition:
				"The range of orbits around a star within which a planetary surface can support liquid water"
		},
		col2: {
			heading: "Atmosphere",
			hint: "Venus has 96.5% carbon dioxide in their's, whereas Earth has about 21% oxygen",
			image: "",
			definition: "The envelope of gases surrounding the Earth or another planet"
		},
		col3: {
			heading: "Light Year",
			hint: "Alpha Centauri is 4.37 of these away from Earth",
			image: "",
			definition: "The distance that light travels in one year. (About 5.8 trillion miles!)"
		},
		col4: {
			heading: "Solar System",
			hint: "The Sun is at the center of ours",
			image: "",
			definition: "The collection of 8 planets and their moons in orbit around the Sun"
		},
		col5: {
			heading: "International Space Station",
			hint:
				"A place that multiple countries work together at and goes around (orbits) Earth about 16 times a day!",
			image: "",
			definition:
				"A unique science laboratory that is like a large spacecraft and allows astronauts to live and work"
		}
	},
	game2: {
		col1: {
			heading: "Asteroid",
			hint: "Like a super minature planet",
			image: "",
			definition:
				"A small rocky body orbiting the Sun. Can be 600 miles across down to the size of dust"
		},
		col2: {
			heading: "Ozone Layer",
			hint:
				"The 'hole' in this is shrinking because we reduced certain chemical output into the atmosphere",
			image: "",
			definition:
				"A layer in Earth's stratosphere that absorbs most of the ultraviolet radiation reaching the Earth from the Sun"
		},
		col3: {
			heading: "Gravity",
			hint: "The more massive the planet, the more of this there is",
			image: "",
			definition:
				"The force that attracts a body toward the center of the Earth, or toward any other physical body having mass"
		},
		col4: {
			heading: "Escape Velocity",
			hint: "Fase enough to get away from a planet",
			image: "",
			definition:
				"The minimum velocity required in order for a body to escape the gravitational pull of a particular planet"
		},
		col5: {
			heading: "Orbital Velocity",
			hint: "Fast enough to circle a planet",
			image: "",
			definition:
				"The minimum velocity required to place or maintain a satellite in a given orbit"
		}
	}
};
export default unit6_2Obj;
