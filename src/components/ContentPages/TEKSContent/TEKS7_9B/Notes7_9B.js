import React from 'react';

import NotesTemplate from '../../../Templates/NotesTemplate/NotesTemplate';
import Obj7_9B from './Obj7_9B';

// import cls from '../../../Templates/NotesTemplate/NotesTemplate.module.css';

//////////////////// PICTURE IMPORTS /////////////////////////////////

const notes7_9B = props => {
        return (
                <NotesTemplate
                        teksNum={Obj7_9B.teksNum}
                        teksContent={Obj7_9B.teksContent}
                        teksQuiz={Obj7_9B.teksQuiz}
                        title={Obj7_9B.teksLabel}
                >
                        <h1>notes7_9B</h1>
                </NotesTemplate>
        );
};

export default notes7_9B;
