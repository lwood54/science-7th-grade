import React from 'react';

import Unit5_1Obj from './Unit5_1Obj';
import UnitPageTemplate from '../../../Templates/UnitPageTemplate/UnitPageTemplate';
import Notes10A from '../../TEKSContent/TEKS7_10A/Notes7_10A';
import Notes10B from '../../TEKSContent/TEKS7_10B/Notes7_10B';

const unit5_1 = props => {
        return (
                <UnitPageTemplate {...Unit5_1Obj}>
                        <Notes10A />
                        <Notes10B />
                </UnitPageTemplate>
        );
};

export default unit5_1;
