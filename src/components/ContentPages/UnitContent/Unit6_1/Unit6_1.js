import React from 'react';
import ComingSoon from '../ComingSoon';

import Notes8B from '../../TEKSContent/TEKS7_8B/Notes7_8B';
// import Notes8C from '../../TEKSContent/TEKS7_8C/Notes7_8C';

import Unit6_1Obj from './Unit6_1Obj';
import UnitPageTemplate from '../../../Templates/UnitPageTemplate/UnitPageTemplate';

const unit6_1 = props => {
        return (
                <UnitPageTemplate {...Unit6_1Obj}>
                        <Notes8B />
                        {/*<Notes8C />*/}
                        <ComingSoon />
                </UnitPageTemplate>
        );
};

// const unit6_1 = () => <ComingSoon />;

export default unit6_1;
