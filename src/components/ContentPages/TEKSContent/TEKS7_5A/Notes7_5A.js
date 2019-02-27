import React from 'react';

import NotesTemplate from '../../../Templates/NotesTemplate/NotesTemplate';
import Obj7_5A from './Obj7_5A';

// import cls from '../../../Templates/NotesTemplate/NotesTemplate.module.css';

//////////////////// PICTURE IMPORTS /////////////////////////////////

const notes7_5A = props => {
        return (
                <NotesTemplate
                        teksNum={Obj7_5A.teksNum}
                        teksContent={Obj7_5A.teksContent}
                        teksQuiz={Obj7_5A.teksQuiz}
                        title={Obj7_5A.teksLabel}
                >
                        <h1>notes7_5A</h1>
                </NotesTemplate>
        );
};

export default notes7_5A;
