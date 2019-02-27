import React from 'react';

import NotesTemplate from '../../../Templates/NotesTemplate/NotesTemplate';
import Obj7_5B from './Obj7_5B';

// import cls from '../../../Templates/NotesTemplate/NotesTemplate.module.css';

//////////////////// PICTURE IMPORTS /////////////////////////////////

const notes7_5B = props => {
        return (
                <NotesTemplate
                        teksNum={Obj7_5B.teksNum}
                        teksContent={Obj7_5B.teksContent}
                        teksQuiz={Obj7_5B.teksQuiz}
                        title={Obj7_5B.teksLabel}
                >
                        <h1>notes7_5B</h1>
                </NotesTemplate>
        );
};

export default notes7_5B;
