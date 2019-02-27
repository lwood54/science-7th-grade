import React from 'react';

import NotesTemplate from '../../../Templates/NotesTemplate/NotesTemplate';
import Obj7_11A from './Obj7_11A';

import cls from '../../../Templates/NotesTemplate/NotesTemplate.module.css';

//////////////////// PICTURE IMPORTS /////////////////////////////////
import dichot_leaves from './images/dichot_leaves.jpg';

const notes7_11A = props => {
        return (
                <NotesTemplate
                        teksNum={Obj7_11A.teksNum}
                        teksContent={Obj7_11A.teksContent}
                        teksQuiz={Obj7_11A.teksQuiz}
                        title={Obj7_11A.teksLabel}
                >
                        <div className={cls.NotesContainer}>
                                <div className={cls.ImageContainer}>
                                        <img
                                                src={dichot_leaves}
                                                alt="dichotomous key leaves"
                                                className={cls.Image}
                                        />
                                </div>

                                <div className={cls.Notes}>
                                        <p>
                                                A dichotomous key is a tool that a person can use to identify
                                                organisms in the natural world. Really, they can be created to
                                                group any set of items, however it is most commonly used for
                                                identifying things like trees, fish, insects, etc.
                                        </p>
                                        <p>"Dichotomous" means dividing into two parts.</p>
                                </div>
                        </div>
                        <div className={cls.NotesContainer}>
                                <div className={cls.wideParagraph}>
                                        A few important things to remember:
                                        <ul>
                                                <li>ALWAYS start at 1a when identifying something.</li>
                                                <li>
                                                        Only one identifying statment in a pair can be true or
                                                        you have messed up someone previously.
                                                </li>
                                                <li>
                                                        Continue all steps until you have found the name of
                                                        the object.
                                                </li>
                                        </ul>
                                </div>
                        </div>
                </NotesTemplate>
        );
};

export default notes7_11A;
