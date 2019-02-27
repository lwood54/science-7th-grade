import React from 'react';

import NotesTemplate from '../../../Templates/NotesTemplate/NotesTemplate';
import Obj7_11C from './Obj7_11C';

// import cls from '../../../Templates/NotesTemplate/NotesTemplate.module.css';

//////////////////// PICTURE IMPORTS /////////////////////////////////

const notes7_11C = props => {
        return (
                <NotesTemplate
                        teksNum={Obj7_11C.teksNum}
                        teksContent={Obj7_11C.teksContent}
                        teksQuiz={Obj7_11C.teksQuiz}
                        title={Obj7_11C.teksLabel}
                >
                        <h1>notes7_11C</h1>
                </NotesTemplate>
        );
};

export default notes7_11C;
