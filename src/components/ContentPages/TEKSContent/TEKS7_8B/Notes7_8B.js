import React from 'react';

import NotesTemplate from '../../../Templates/NotesTemplate/NotesTemplate';
import Obj7_8B from './Obj7_8B';

import cls from '../../../Templates/NotesTemplate/NotesTemplate.module.css';

//////////////////// PICTURE IMPORTS /////////////////////////////////

const notes7_8B = props => {
        return (
                <NotesTemplate
                        teksNum={Obj7_8B.teksNum}
                        teksContent={Obj7_8B.teksContent}
                        teksQuiz={Obj7_8B.teksQuiz}
                        title={Obj7_8B.teksLabel}
                >
                        <h1>notes7_8B</h1>
                </NotesTemplate>
        );
};

export default notes7_8B;
