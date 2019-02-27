import React from 'react';

import NotesTemplate from '../../../Templates/NotesTemplate/NotesTemplate';
import Obj7_11B from './Obj7_11B';

import cls from '../../../Templates/NotesTemplate/NotesTemplate.module.css';

//////////////////// PICTURE IMPORTS /////////////////////////////////

const notes7_11B = props => {
        return (
                <NotesTemplate
                        teksNum={Obj7_11B.teksNum}
                        teksContent={Obj7_11B.teksContent}
                        teksQuiz={Obj7_11B.teksQuiz}
                        title={Obj7_11B.teksLabel}
                >
                        <h1>notes7_11B</h1>
                </NotesTemplate>
        );
};

export default notes7_11B;
