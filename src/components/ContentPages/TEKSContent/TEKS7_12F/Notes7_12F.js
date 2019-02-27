import React from 'react';

import NotesTemplate from '../../../Templates/NotesTemplate/NotesTemplate';
import Obj7_12F from './Obj7_12F';

// import cls from '../../../Templates/NotesTemplate/NotesTemplate.module.css';

//////////////////// PICTURE IMPORTS /////////////////////////////////

const notes7_12F = props => {
        return (
                <NotesTemplate
                        teksNum={Obj7_12F.teksNum}
                        teksContent={Obj7_12F.teksContent}
                        teksQuiz={Obj7_12F.teksQuiz}
                        title={Obj7_12F.teksLabel}
                >
                        <h1>notes7_12F</h1>
                </NotesTemplate>
        );
};

export default notes7_12F;
