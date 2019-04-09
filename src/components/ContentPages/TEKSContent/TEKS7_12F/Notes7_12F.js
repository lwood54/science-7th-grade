import React from 'react';

import NotesTemplate from '../../../Templates/NotesTemplate/NotesTemplate';
import Obj7_12F from './Obj7_12F';

import cls from '../../../Templates/NotesTemplate/NotesTemplate.module.css';

//////////////////// PICTURE IMPORTS /////////////////////////////////
import Robert_Hooke from './images/Robert_Hooke.jpg';
import cells from './images/cells.jpg';

const notes7_12F = props => {
        return (
                <NotesTemplate
                        teksNum={Obj7_12F.teksNum}
                        teksContent={Obj7_12F.teksContent}
                        teksQuiz={Obj7_12F.teksQuiz}
                        title={Obj7_12F.teksLabel}
                >
                        <div className={cls.NotesContainer}>
                                <div className={cls.ImageContainer}>
                                        <img className={cls.Image} src={Robert_Hooke} alt="Robert Hooke" />
                                </div>
                                <div className={cls.Notes}>
                                        <p>
                                                Robert Hooke first discovered what he later called "cells" in
                                                1665. After he took a slice of cork and looked at it under a
                                                microscope. The discovery eventually lead other scientists
                                                along the way to make other contributions, such as Anton Van
                                                Leewenhoek, Matthias Schleiden, Theodor Schwann, and Virchow.
                                        </p>
                                </div>
                        </div>
                        <div className={cls.NotesContainer}>
                                <div className={cls.Notes}>
                                        <p>
                                                The <em>Cell Theory</em> was eventually developed, which
                                                includes these 3 main components:
                                        </p>
                                        <ol>
                                                <li>All living things are made up of one or more cells.</li>
                                                <li>Cells are the basic unit of life.</li>
                                                <li>Celles come from pre-existing cells.</li>
                                        </ol>
                                </div>
                                <div className={cls.ImageContainer}>
                                        <img className={cls.Image} src={cells} alt="cells" />
                                </div>
                        </div>
                </NotesTemplate>
        );
};

export default notes7_12F;
