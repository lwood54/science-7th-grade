import React from 'react';

import Unit2_1Obj from './Unit2_1Obj';
import UnitPageTemplate from '../../../Templates/UnitPageTemplate/UnitPageTemplate';

import Notes12D from '../../TEKSContent/TEKS7_12D/Notes7_12D';

const unit2_1 = props => {
        return (
                <UnitPageTemplate {...Unit2_1Obj}>
                        <Notes12D />
                </UnitPageTemplate>
        );
};

export default unit2_1;
