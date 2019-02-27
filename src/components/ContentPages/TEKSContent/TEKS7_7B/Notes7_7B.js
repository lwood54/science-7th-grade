import React from 'react';

import NotesTemplate from '../../../Templates/NotesTemplate/NotesTemplate';
import Obj7_7B from './Obj7_7B';

// import cls from '../../../Templates/NotesTemplate/NotesTemplate.module.css';

//////////////////// PICTURE IMPORTS /////////////////////////////////

const notes7_7B = props => {
        return (
                <NotesTemplate
                        teksNum={Obj7_7B.teksNum}
                        teksContent={Obj7_7B.teksContent}
                        teksQuiz={Obj7_7B.teksQuiz}
                        title={Obj7_7B.teksLabel}
                >
                        <h1>notes7_7B</h1>
                </NotesTemplate>
        );
};

export default notes7_7B;
