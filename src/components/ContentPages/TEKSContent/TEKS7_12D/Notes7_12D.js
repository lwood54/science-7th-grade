import React from 'react';

import NotesTemplate from '../../../Templates/NotesTemplate/NotesTemplate';
import Obj7_12D from './Obj7_12D';

// import cls from '../../../Templates/NotesTemplate/NotesTemplate.module.css';

//////////////////// PICTURE IMPORTS /////////////////////////////////

const notes7_12D = props => {
        return (
                <NotesTemplate
                        teksNum={Obj7_12D.teksNum}
                        teksContent={Obj7_12D.teksContent}
                        teksQuiz={Obj7_12D.teksQuiz}
                        title={Obj7_12D.teksLabel}
                >
                        <h1>notes7_12D</h1>
                </NotesTemplate>
        );
};

export default notes7_12D;
