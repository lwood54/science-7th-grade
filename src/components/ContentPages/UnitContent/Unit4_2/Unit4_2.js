import React from "react";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";

import TEKS7_10C from "../TEKSContent/TEKS7_10C/TEKS7_10C";

import Unit4_2Obj from "./Unit4_2Obj";
import NavigationBar from "../../Navigation/NavigationBar/NavigationBar";
import Button from "@material-ui/core/Button";

import cls from "../UnitPage.module.css";

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
				<h1 className={cls.TEKSTitle}>{Unit4_2Obj.TEKS[1].teksNum}</h1>
				<Link to={Unit4_2Obj.TEKS[0].teksQuiz} className={cls.TEKS}>
					<p style={{ marginTop: "0" }}>{Unit4_2Obj.TEKS[1].teksContent}</p>
				</Link>
				<h2 className={cls.Heading}>Catastrophic Events</h2>
			</Paper>
			<TEKS7_10C />
		</div>
	);
};

export default unit4_2;
