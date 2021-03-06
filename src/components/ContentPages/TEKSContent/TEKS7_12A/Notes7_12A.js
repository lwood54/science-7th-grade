import React from 'react';

import NotesTemplate from '../../../Templates/NotesTemplate/NotesTemplate';
import Obj7_12A from './Obj7_12A';

// import cls from '../../../Templates/NotesTemplate/NotesTemplate.module.css';

//////////////////// PICTURE IMPORTS /////////////////////////////////

const notes7_12A = props => {
        return (
                <NotesTemplate
                        teksNum={Obj7_12A.teksNum}
                        teksContent={Obj7_12A.teksContent}
                        teksQuiz={Obj7_12A.teksQuiz}
                        title={Obj7_12A.teksLabel}
                >
                        <h1>notes7_12A</h1>
                </NotesTemplate>
        );
};

export default notes7_12A;
