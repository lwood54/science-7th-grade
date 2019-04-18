import React from 'react';

import NotesTemplate from '../../../Templates/NotesTemplate/NotesTemplate';
import NoteCard from '../../../Templates/NotesTemplate/NoteCard';
import Obj7_8C from './Obj7_8C';

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
                        <NoteCard source={groundwater} alt="groundwater" imageDir="left">
                                <em>Groundwater</em> is the water found under ground. When precipitation like
                                rain, sleet, snow, or hail has a chance to soak into the ground, it's
                                considered groundwater.
                        </NoteCard>
                </NotesTemplate>
        );
};

export default notes7_8C;
