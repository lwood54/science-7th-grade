import React from 'react';

import Notes11A from '../../TEKSContent/TEKS7_11A/Notes7_11A';

import Unit4_1Obj from './Unit4_1Obj';
import UnitPageTemplate from '../../../Templates/UnitPageTemplate/UnitPageTemplate';

const unit4_1 = props => {
        return (
                <UnitPageTemplate {...Unit4_1Obj}>
                        <Notes11A />
                </UnitPageTemplate>
        );
};

export default unit4_1;
