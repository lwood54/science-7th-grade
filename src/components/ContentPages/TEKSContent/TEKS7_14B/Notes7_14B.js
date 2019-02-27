import React from 'react';

import NotesTemplate from '../../../Templates/NotesTemplate/NotesTemplate';
import Obj7_14B from './Obj7_14B';

// import cls from '../../../Templates/NotesTemplate/NotesTemplate.module.css';

//////////////////// PICTURE IMPORTS /////////////////////////////////

const notes7_14B = props => {
        return (
                <NotesTemplate
                        teksNum={Obj7_14B.teksNum}
                        teksContent={Obj7_14B.teksContent}
                        teksQuiz={Obj7_14B.teksQuiz}
                        title={Obj7_14B.teksLabel}
                >
                        <h1>notes7_14B</h1>
                </NotesTemplate>
        );
};

export default notes7_14B;
