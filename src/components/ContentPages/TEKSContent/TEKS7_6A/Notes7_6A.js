import React from 'react';

import NotesTemplate from '../../../Templates/NotesTemplate/NotesTemplate';
import Obj7_6A from './Obj7_6A';

// import cls from '../../../Templates/NotesTemplate/NotesTemplate.module.css';

//////////////////// PICTURE IMPORTS /////////////////////////////////

const notes7_6A = props => {
        return (
                <NotesTemplate
                        teksNum={Obj7_6A.teksNum}
                        teksContent={Obj7_6A.teksContent}
                        teksQuiz={Obj7_6A.teksQuiz}
                        title={Obj7_6A.teksLabel}
                >
                        <h1>Notes for TEKS 7.6A</h1>
                </NotesTemplate>
        );
};

export default notes7_6A;
