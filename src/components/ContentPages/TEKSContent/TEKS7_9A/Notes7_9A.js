import React from 'react';

import NotesTemplate from '../../../Templates/NotesTemplate/NotesTemplate';
import Obj7_9A from './Obj7_9A';

// import cls from '../../../Templates/NotesTemplate/NotesTemplate.module.css';

//////////////////// PICTURE IMPORTS /////////////////////////////////

const notes7_9A = props => {
        return (
                <NotesTemplate
                        teksNum={Obj7_9A.teksNum}
                        teksContent={Obj7_9A.teksContent}
                        teksQuiz={Obj7_9A.teksQuiz}
                        title={Obj7_9A.teksLabel}
                >
                        <h1>notes7_9A</h1>
                </NotesTemplate>
        );
};

export default notes7_9A;
