import React from 'react';

import NotesTemplate from '../../../Templates/NotesTemplate/NotesTemplate';
import Obj7_8C from './Obj7_8C';

import cls from '../../../Templates/NotesTemplate/NotesTemplate.module.css';

//////////////////// PICTURE IMPORTS /////////////////////////////////
import groundwater from './images/groundwater.png';

const notes7_8C = props => {
        return (
                <NotesTemplate
                        teksNum={Obj7_8C.teksNum}
                        teksContent={Obj7_8C.teksContent}
                        teksQuiz={Obj7_8C.teksQuiz}
                        title={Obj7_8C.teksLabel}
                >
                        <div className={cls.NotesContainer}>
                                <div className={cls.ImageContainer}>
                                        <img className={cls.Image} src={groundwater} alt="groundwater" />
                                </div>
                        </div>
                </NotesTemplate>
        );
};

export default notes7_8C;
