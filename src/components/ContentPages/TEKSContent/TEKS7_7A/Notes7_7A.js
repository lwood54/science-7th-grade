import React from 'react';

import NotesTemplate from '../../../Templates/NotesTemplate/NotesTemplate';
import Obj7_7A from './Obj7_7A';

// import cls from '../../../Templates/NotesTemplate/NotesTemplate.module.css';

//////////////////// PICTURE IMPORTS /////////////////////////////////

const notes7_7A = props => {
        return (
                <NotesTemplate
                        teksNum={Obj7_7A.teksNum}
                        teksContent={Obj7_7A.teksContent}
                        teksQuiz={Obj7_7A.teksQuiz}
                        title={Obj7_7A.teksLabel}
                >
                        <h1>notes7_7A</h1>
                </NotesTemplate>
        );
};

export default notes7_7A;
