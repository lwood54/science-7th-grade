import React from 'react';

import NotesTemplate from '../../../Templates/NotesTemplate/NotesTemplate';
import Obj7_14A from './Obj7_14A';

// import cls from '../../../Templates/NotesTemplate/NotesTemplate.module.css';

//////////////////// PICTURE IMPORTS /////////////////////////////////

const notes7_14A = props => {
        return (
                <NotesTemplate
                        teksNum={Obj7_14A.teksNum}
                        teksContent={Obj7_14A.teksContent}
                        teksQuiz={Obj7_14A.teksQuiz}
                        title={Obj7_14A.teksLabel}
                >
                        <h1>notes7_14A</h1>
                </NotesTemplate>
        );
};

export default notes7_14A;
