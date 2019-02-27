import React from 'react';

import NotesTemplate from '../../../Templates/NotesTemplate/NotesTemplate';
import Obj7_14C from './Obj7_14C';

// import cls from '../../../Templates/NotesTemplate/NotesTemplate.module.css';

//////////////////// PICTURE IMPORTS /////////////////////////////////

const notes7_14C = props => {
        return (
                <NotesTemplate
                        teksNum={Obj7_14C.teksNum}
                        teksContent={Obj7_14C.teksContent}
                        teksQuiz={Obj7_14C.teksQuiz}
                        title={Obj7_14C.teksLabel}
                >
                        <h1>notes7_14C</h1>
                </NotesTemplate>
        );
};

export default notes7_14C;
