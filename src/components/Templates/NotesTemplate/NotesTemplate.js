import React from 'react';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';

import cls from './NotesTemplate.module.css';

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
				<p>CONTENT</p>
			</div>
			<div className={cls.wideParagraph}>
				<p>CONTENT</p>
			</div>
		</div>

	Option 3:
		<div className={cls.NotesContainer}>
			<div className={cls.FullImageContainer}>
				<img className={cls.Image} />
			</div>
		</div>
		<div className={cls.NotesContainer}>
			<div className={cls.wideParagraph}>
				<p>CONTENT</p>
			</div>
		</div>
*/
/////////////////////////////////////////////////////////////

const notesTemplate = props => {
        return (
                <Paper className={cls.ContentContainer}>
                        <h1 className={cls.Heading}>{props.title}</h1>
                        <h3 className={cls.TEKSTitle}>Learning Objective: {props.teksNum}</h3>
                        <Link to={props.teksQuiz} className={cls.TEKS}>
                                <p style={{ marginTop: '0' }}>{props.teksContent}</p>
                        </Link>

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
