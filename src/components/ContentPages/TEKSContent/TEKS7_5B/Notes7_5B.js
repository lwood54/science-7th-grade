import React from 'react';

import NotesTemplate from '../../../Templates/NotesTemplate/NotesTemplate';
import Obj7_5B from './Obj7_5B';

import cls from '../../../Templates/NotesTemplate/NotesTemplate.module.css';

//////////////////// PICTURE IMPORTS /////////////////////////////////

const notes7_5B = props => {
        return (
                <NotesTemplate
                        teksNum={Obj7_5B.teksNum}
                        teksContent={Obj7_5B.teksContent}
                        teksQuiz={Obj7_5B.teksQuiz}
                        title={Obj7_5B.teksLabel}
                >
                        <div className={cls.NotesContainer}>
                                <div className={cls.Notes}>
                                        <p>
                                                It's important to understand that all life on earth needs
                                                energy. Much of the diversity of organisms and their
                                                adaptations come as a result for the need to acquire energy.
                                        </p>
                                </div>
                        </div>
                </NotesTemplate>
        );
};

export default notes7_5B;
