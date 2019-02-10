import React from 'react';

import Notes12C from '../../TEKSContent/TEKS7_12C/Notes7_12C';

import Unit1_1Obj from './Unit1_1Obj';
import UnitPageTemplate from '../../../Templates/UnitPageTemplate/UnitPageTemplate';

const unit1_1 = props => {
        return (
                <UnitPageTemplate {...Unit1_1Obj}>
                        <Notes12C />
                </UnitPageTemplate>
        );
};

export default unit1_1;
