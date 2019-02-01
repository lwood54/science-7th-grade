import React from "react";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";

import Button from "@material-ui/core/Button";

import cls from "./TEKSNotes.module.css";

//////////////////// REQUIRED PROPS  /////////////////////////////////
//	teksNum, teksContent, teksQuiz, title //
// 	wrap this around specific TEKS display content //
//////////////////////////////////////////////////////////////////////

/////// USEFUL PATTERN inside this Component: ///////////////
/*
	Option 1:
		<div className={cls.NotesContainer}>
			<div className={cls.Notes}>
				<p>CONTENT</p>
			</div>
			<div className={cls.ImageContainer}>
				<img className={cls.Image} />
			</div>
		</div>

	Option 2:
		<div className={cls.NotesContainer}>
			<div className={cls.Notes}>
			</div>
			<div className={cls.wideParagraph}>
			</div>
		</div>
*/
/////////////////////////////////////////////////////////////

const notesTemplate = props => {
	return (
		<Paper className={cls.ContentContainer}>
			<h1 className={cls.TEKSTitle}>{props.teksNum}</h1>
			<Link to={props.teksQuiz} className={cls.TEKS}>
				<p style={{ marginTop: "0" }}>{props.teksContent}</p>
			</Link>
			<h2 className={cls.Heading}>{props.title}</h2>
			{props.children}
			<div className={cls.QuizButtonContainer}>
				<Link className={cls.Link} to={props.teksQuiz}>
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
	);
};

export default notesTemplate;
