import React from 'react';

import NotesTemplate from '../../../Templates/NotesTemplate/NotesTemplate';
import Obj7_12F from './Obj7_12F';

import cls from '../../../Templates/NotesTemplate/NotesTemplate.module.css';

//////////////////// PICTURE IMPORTS /////////////////////////////////
import Robert_Hooke from './images/Robert_Hooke.jpg';
import cells from './images/cells.jpg';
import single_celled_organisms from './images/single-cell-organism.jpeg';
import body_systems from './images/body_systems.jpg';
import cell_division from './images/cell_division.jpg';

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
                        <div className={cls.NotesContainer}>
                                <div className={cls.Notes}>
                                        <p>
                                                All observable life on Earth is composed of at least once
                                                well. There is an incredible complexity of life, and living
                                                things must carry out common process like obtaining energy,
                                                processing that energy, carrying out cell division and getting
                                                rid of wastes.
                                        </p>
                                </div>
                                <div className={cls.ImageContainer}>
                                        <img
                                                className={cls.Image}
                                                src={single_celled_organisms}
                                                alt="single celled organism"
                                        />
                                </div>
                        </div>
                        <div className={cls.NotesContainer}>
                                <div className={cls.ImageContainer}>
                                        <img className={cls.Image} src={body_systems} alt="body systems" />
                                </div>
                                <div className={cls.Notes}>
                                        <p>
                                                Cells are the basic building blocks of life. We saw previously
                                                that one cell can be the basis for an organism, but we can
                                                also observe extremely complex organisms like ourselves made
                                                up of many millions of cells. Each cell has its role and works
                                                with other cells, tissues, organs, and organ systems.
                                        </p>
                                </div>
                        </div>
                        <div className={cls.NotesContainer}>
                                <div className={cls.Notes}>
                                        <p>
                                                Some cells copy their DNA completely, then divide. Other times
                                                cells may copy half their DNA and combine it with another
                                                cell's DNA to create a new cell and new organism.
                                        </p>
                                </div>
                                <div className={cls.ImageContainer}>
                                        <img className={cls.Image} src={cell_division} alt="cell division" />
                                </div>
                        </div>
                </NotesTemplate>
        );
};

export default notes7_12F;
