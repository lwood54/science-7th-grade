import React from "react";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

import Unit4_2Obj from "./Unit4_2Obj";
import NavigationBar from "../../Navigation/NavigationBar/NavigationBar";

import cls from "../UnitPage.module.css";
// import cls from './Unit4_2.module.css';

//////////////////// PICTURE IMPORTS /////////////////////////////////
import overgrown from "./images/overgrown.jpg";
// import tornado_damage_trees from "./images/tornado_damage_trees.jpg";
import primary_succession from "./images/primary_succession.jpg";
import lichens_on_rock from "./images/lichens_on_rock.jpg";
import lichens2 from "./images/lichens2.jpg";
import lichens_symbiosis from "./images/lichens_symbiosis.gif";
import secondary_succession from "./images/secondary_succession.jpg";

const unit4_2 = props => {
	// search for keys this way instead of hard coding array index because I may change that in the future.
	const quizletLink = Unit4_2Obj.vertMenuItems
		.map(item => {
			return item["Quizlet"];
		})
		.join("");
	const gameLink = Unit4_2Obj.vertMenuItems
		.map(item => {
			return item["Game"];
		})
		.join("");
	const homeLink = Unit4_2Obj.vertMenuItems
		.map(item => {
			return item["Home"];
		})
		.join("");
	return (
		<div>
			<NavigationBar
				title={Unit4_2Obj.title}
				gameLink={gameLink}
				quizletLink={quizletLink}
				homeLink={homeLink}
				TEKSArray={Unit4_2Obj.TEKS}
			/>
			<Paper className={cls.ContentContainer}>
				<h1 className={cls.TEKSTitle}>{Unit4_2Obj.TEKS[0].teksNum}</h1>
				<Link to={Unit4_2Obj.TEKS[0].teksQuiz} className={cls.TEKS}>
					<p style={{ marginTop: "0" }}>{Unit4_2Obj.TEKS[0].teksContent}</p>
				</Link>
				<h2 className={cls.Heading}>Ecological Succession</h2>
				<div className={cls.NotesContainer}>
					<div className={cls.ImageContainer}>
						<img
							src={overgrown}
							alt="overgrown building"
							className={cls.Image}
						/>
					</div>
					<div className={cls.Notes}>
						<p className={cls.paragraphContent}>
							Ecological succession occurs whenever an ecosystem is
							not in homeostasis. How long and at what starting
							point depend on the nature of the disturbance.
						</p>
					</div>
				</div>

				<div className={cls.NotesContainer}>
					<div className={cls.wideParagraph}>
						<h3 className={cls.Subheading}>
							There are two main types of ecological succession.
						</h3>
						<ul>
							<li>Primary Succession</li>
							<li>Secondary Succession</li>
						</ul>
					</div>
					<div className={cls.Notes}>
						<p>
							The simplest way to think about the difference is that
							primary succession starts with bare rock and secondary
							succesison starts with soil.
						</p>
					</div>
				</div>

				<h3 className={cls.Subheading}>Primary Succession</h3>
				<div className={cls.NotesContainer}>
					<div className={cls.Notes}>
						<p>
							This occurs when an ecosystem is starting from bare
							rock. Whether the bare rock is due to human causes or
							natural events, such as lava flow or earthquakes,
							primary succession must begin by breaking down bare
							rock.
						</p>
					</div>
					<div className={cls.ImageContainer}>
						<img
							src={primary_succession}
							alt="primary succession"
							className={cls.Image}
						/>
					</div>
				</div>
				<div className={cls.NotesContainer}>
					<div className={cls.ImageContainer}>
						<img
							src={lichens_on_rock}
							alt="lichens"
							className={cls.Image}
						/>
					</div>
					<div className={cls.Notes}>
						<p>
							<em>Pioneer Species</em> are those species that are
							the first organisms to establish an ecosystem.
						</p>
						<p>
							In <em>primary succession</em>, the most important
							type of pioneer species are called <em>lichens</em>.
						</p>
					</div>
				</div>
				<div className={cls.NotesContainer}>
					<p className={cls.Notes}>
						Lichens have a unique ability to grow on rock, along with many
						other surfaces. They can release chemicals that help dissolve
						rock so that the lichens can absorb minerals.
					</p>
					<div className={cls.ImageContainer}>
						<img src={lichens2} alt="lichens" className={cls.Image} />
					</div>
				</div>
				<div className={cls.NotesContainer}>
					<div className={cls.ImageContainer}>
						<img
							src={lichens_symbiosis}
							alt="lichens symbiosis"
							className={cls.Image}
						/>
					</div>
					<p className={cls.Notes}>
						Lichens are technically a combination of algae and fungi
						living in a symbiotic relationship. It is their unique ability
						to convert radiant energy to sugar, while also being able to
						get nutrients from breaking down organic matter, that allows
						them to thrive in otherwise inhospitable environments.
					</p>
				</div>
				<h3 className={cls.Subheading}>Secondary Succession</h3>
				<div className={cls.NotesContainer}>
					<div className={cls.Notes}>
						<p>
							This occurs when an event causes an ecosystem to
							restart, but when soil is already present. Pioneer
							species for secondary succession may include{" "}
							<em>ferns, mosses, and small weeds</em>. It really
							depends on the environment, but a common
							characteristic is that these pioneer species can grow
							in shallow possibly low nutrient soil.
						</p>
					</div>
					<div className={cls.ImageContainer}>
						<img
							src={secondary_succession}
							alt="secondary succession"
							className={cls.Image}
						/>
					</div>
				</div>
				<div className={cls.QuizButtonContainer}>
					<Link className={cls.Link} to={Unit4_2Obj.TEKS[0].teksQuiz}>
						<Button
							color="secondary"
							variant="contained"
							className={cls.QuizButton}
						>
							Review Quiz
						</Button>
					</Link>
				</div>
			</Paper>
		</div>
	);
};

export default unit4_2;
