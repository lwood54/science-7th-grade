import React from 'react';

import NotesTemplate from '../../../Templates/NotesTemplate/NotesTemplate';
import Obj7_13B from './Obj7_13B';

// import cls from '../../../Templates/NotesTemplate/NotesTemplate.module.css';

//////////////////// PICTURE IMPORTS /////////////////////////////////

const notes7_13B = props => {
        return (
                <NotesTemplate
                        teksNum={Obj7_13B.teksNum}
                        teksContent={Obj7_13B.teksContent}
                        teksQuiz={Obj7_13B.teksQuiz}
                        title={Obj7_13B.teksLabel}
                >
                        <h1>notes7_13B</h1>
                </NotesTemplate>
        );
};

export default notes7_13B;
