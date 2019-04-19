import React from 'react';

import Unit5_2Obj from './Unit5_2Obj';
import UnitPageTemplate from '../../../Templates/UnitPageTemplate/UnitPageTemplate';

import Notes5B from '../../TEKSContent/TEKS7_5B/Notes7_5B';

const unit5_2 = props => {
        return (
                <UnitPageTemplate {...Unit5_2Obj}>
                        <Notes5B />
                </UnitPageTemplate>
        );
};

export default unit5_2;
