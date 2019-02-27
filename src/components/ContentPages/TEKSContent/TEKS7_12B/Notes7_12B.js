import React from 'react';

import NotesTemplate from '../../../Templates/NotesTemplate/NotesTemplate';
import Obj7_12B from './Obj7_12B';

// import cls from '../../../Templates/NotesTemplate/NotesTemplate.module.css';

//////////////////// PICTURE IMPORTS /////////////////////////////////

const notes7_12B = props => {
        return (
                <NotesTemplate
                        teksNum={Obj7_12B.teksNum}
                        teksContent={Obj7_12B.teksContent}
                        teksQuiz={Obj7_12B.teksQuiz}
                        title={Obj7_12B.teksLabel}
                >
                        <h1>notes7_12B</h1>
                </NotesTemplate>
        );
};

export default notes7_12B;
