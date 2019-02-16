import React from 'react';

import Unit1_1Obj from './Unit1_1Obj';
import UnitPageTemplate from '../../../Templates/UnitPageTemplate/UnitPageTemplate';

import Notes12C from '../../TEKSContent/TEKS7_12C/Notes7_12C';
import Notes12F from '../../TEKSContent/TEKS7_12F/Notes7_12F';

const unit1_1 = props => {
        return (
                <UnitPageTemplate {...Unit1_1Obj}>
                        <Notes12C />
                        <Notes12F />
                </UnitPageTemplate>
        );
};

export default unit1_1;
