import React from 'react';

import NotesTemplate from '../../../Templates/NotesTemplate/NotesTemplate';
import Obj7_12E from './Obj7_12E';

// import cls from '../../../Templates/NotesTemplate/NotesTemplate.module.css';

//////////////////// PICTURE IMPORTS /////////////////////////////////

const notes7_12E = props => {
        return (
                <NotesTemplate
                        teksNum={Obj7_12E.teksNum}
                        teksContent={Obj7_12E.teksContent}
                        teksQuiz={Obj7_12E.teksQuiz}
                        title={Obj7_12E.teksLabel}
                >
                        <h1>notes7_12E</h1>
                </NotesTemplate>
        );
};

export default notes7_12E;
