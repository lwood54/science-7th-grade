import React from 'react';

import Unit1_2Obj from './Unit1_2Obj';
import UnitPageTemplate from '../../../Templates/UnitPageTemplate/UnitPageTemplate';

import Notes5A from '../../TEKSContent/TEKS7_5A/Notes7_5A';
import Notes6A from '../../TEKSContent/TEKS7_6A/Notes7_6A';
import Notes7A from '../../TEKSContent/TEKS7_7A/Notes7_7A';
import Notes7B from '../../TEKSContent/TEKS7_7B/Notes7_7B';
import Notes13A from '../../TEKSContent/TEKS7_13A/Notes7_13A';

const unit1_2 = props => {
        return (
                <UnitPageTemplate {...Unit1_2Obj}>
                        <Notes5A />
                        <Notes6A />
                        <Notes7A />
                        <Notes7B />
                        <Notes13A />
                </UnitPageTemplate>
        );
};

export default unit1_2;
