import React from 'react';

import NotesTemplate from '../../../Templates/NotesTemplate/NotesTemplate';
import Obj7_13A from './Obj7_13A';

// import cls from '../../../Templates/NotesTemplate/NotesTemplate.module.css';

//////////////////// PICTURE IMPORTS /////////////////////////////////

const notes7_13A = props => {
        return (
                <NotesTemplate
                        teksNum={Obj7_13A.teksNum}
                        teksContent={Obj7_13A.teksContent}
                        teksQuiz={Obj7_13A.teksQuiz}
                        title={Obj7_13A.teksLabel}
                >
                        <h1>notes7_13A</h1>
                </NotesTemplate>
        );
};

export default notes7_13A;
