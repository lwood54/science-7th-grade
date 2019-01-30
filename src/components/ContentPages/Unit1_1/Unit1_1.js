import React from 'react';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';

import Unit1_1Obj from './Unit1_1Obj';
import NavigationBar from '../../Navigation/NavigationBar/NavigationBar';
import cls from './Unit1_1.module.css';

import levelsOfOrg from './images/levels_of_organization.jpg';

const unit1_1 = props => {
        // search for keys this way instead of hard coding array index because I may change that in the future.
        const quizletLink = Unit1_1Obj.vertMenuItems
                .map(item => {
                        return item['Quizlet'];
                })
                .join('');
        const gameLink = Unit1_1Obj.vertMenuItems
                .map(item => {
                        return item['Game'];
                })
                .join('');
        const homeLink = Unit1_1Obj.vertMenuItems
                .map(item => {
                        return item['Home'];
                })
                .join('');

        console.log(Unit1_1Obj);
        return (
                <div>
                        <NavigationBar
                                title={Unit1_1Obj.title}
                                gameLink={gameLink}
                                quizletLink={quizletLink}
                                homeLink={homeLink}
                                TEKSArray={Unit1_1Obj.TEKS}
                        />
                        <Paper className={cls.ContentContainer}>
                                <h1 className={cls.TEKSTitle}>
                                        {Unit1_1Obj.TEKS[0].teksNum}
                                </h1>
                                <Link
                                        to={Unit1_1Obj.TEKS[0].teksQuiz}
                                        className={cls.TEKS}
                                >
                                        <p style={{ marginTop: '0' }}>
                                                {Unit1_1Obj.TEKS[0].teksContent}
                                        </p>
                                </Link>
                                <div className={cls.NotesContainer}>
                                        <div
                                                className={
                                                        cls.ImageContainerHorizontal
                                                }
                                        >
                                                <img
                                                        src={levelsOfOrg}
                                                        alt="levels of organization"
                                                        className={
                                                                cls.ImageHorizontal
                                                        }
                                                />
                                        </div>

                                        <div className={cls.Notes}>
                                                <h3
                                                        style={{
                                                                textAlign:
                                                                        'center'
                                                        }}
                                                >
                                                        <em>
                                                                Levels Of
                                                                Organization
                                                        </em>
                                                </h3>
                                                <p>
                                                        Organisms on Earth have
                                                        been found to be
                                                        structured into
                                                        consistant levels of
                                                        organization. The
                                                        smallest unit that can
                                                        sustain life is the
                                                        cell.
                                                </p>
                                                <p>
                                                        It's easiest to remember
                                                        this structure by
                                                        thinking about the
                                                        relationships between
                                                        each level.
                                                </p>
                                                <p>
                                                        Cells that work together
                                                        to perform a common task
                                                        make up tissue. Tissues
                                                        that work together to
                                                        perform a common task
                                                        make up organs. Organs
                                                        working together make up
                                                        organ systems and
                                                        finally all the organ
                                                        systems working together
                                                        make up a functioning
                                                        organism.
                                                </p>
                                        </div>
                                        <div className={cls.Notes}>
                                                <p>
                                                        It's important to
                                                        realize that not only
                                                        animals are made up of
                                                        organs and organ
                                                        systems, but also
                                                        plants.
                                                </p>
                                        </div>
                                </div>
                        </Paper>
                </div>
        );
};

export default unit1_1;
