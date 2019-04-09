import React from 'react';

import NotesTemplate from '../../../Templates/NotesTemplate/NotesTemplate';
import Obj7_12C from './Obj7_12C';

import cls from '../../../Templates/NotesTemplate/NotesTemplate.module.css';

//////////////////// PICTURE IMPORTS /////////////////////////////////
import levelsOfOrg from './images/levels_of_organization.jpg';
import leaf_anatomy from './images/leaf_anatomy.jpg';
import apple from './images/apple.jpg';
import muscle_tissue from './images/muscle_tissue.jpg';

const notes7_12C = props => {
        return (
                <NotesTemplate
                        teksNum={Obj7_12C.teksNum}
                        teksContent={Obj7_12C.teksContent}
                        teksQuiz={Obj7_12C.teksQuiz}
                        title={Obj7_12C.teksLabel}
                >
                        <div className={cls.NotesContainer}>
                                <div className={cls.FullImageContainer}>
                                        <img src={levelsOfOrg} alt="levels of org" className={cls.Image} />
                                </div>
                        </div>
                        <div className={cls.NotesContainer}>
                                <div className={cls.wideParagraph}>
                                        <p>
                                                Organisms on Earth have been found to be structured into
                                                consistant levels of organization. The smallest unit that can
                                                sustain life is the cell.
                                        </p>
                                        <p>
                                                It's easiest to remember this structure by thinking about the
                                                relationships between each level.
                                        </p>
                                </div>
                        </div>
                        <div className={cls.NotesContainer}>
                                <div className={cls.wideParagraph}>
                                        <p>
                                                Cells that work together to perform a common task make up
                                                tissue. Tissues that work together to perform a common task
                                                make up organs. Organs working together make up organ systems
                                                and finally all the organ systems working together make up a
                                                functioning organism.
                                        </p>
                                </div>
                        </div>
                        <div className={cls.NotesContainer}>
                                <div className={cls.ImageContainer}>
                                        <img className={cls.Image} src={leaf_anatomy} alt="leaf anatomy" />
                                </div>
                                <div className={cls.Notes}>
                                        <p>
                                                It's important to realize that not only animals are made up of
                                                organs and organ systems, but also plants.
                                        </p>
                                </div>
                        </div>
                        <div className={cls.NotesContainer}>
                                <div className={cls.ImageContainer}>
                                        <img className={cls.Image} src={apple} alt="apple" />
                                </div>
                                <div className={cls.wideParagraph}>
                                        <p>
                                                One example that always surprises students is understanding
                                                that an apple is a reproductive organ. Complex organisms that
                                                are made up of many cells are called <em>eukaryotes.</em>
                                        </p>
                                        <p>
                                                There are simple organisms that do not contain structures
                                                called organelles. They are called prokaryotes. An example of
                                                an organelle is the nucleus in a eukaryote.
                                        </p>
                                </div>
                        </div>
                        <div className={cls.NotesContainer}>
                                <div className={cls.Notes}>
                                        <p>
                                                Tissues are groups of cells that work together to perform a
                                                task. There are many different types of cells in that have
                                                many different shapes, but when they are grouped together,
                                                like these muscle cells, then they form tissue.
                                        </p>
                                        <p>
                                                Muscle cells are long and elastic, which makes sense because
                                                muscle tissue needs to be elastic as its job is to contarct
                                                and relax. It needs to be elastic enough to be pulled and
                                                stretched, but also able to contract and do the pulling.
                                        </p>
                                </div>
                                <div className={cls.ImageContainer}>
                                        <img className={cls.Image} src={muscle_tissue} alt="muscle tissue" />
                                </div>
                        </div>
                </NotesTemplate>
        );
};

export default notes7_12C;
