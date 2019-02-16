import React from 'react';

import Unit5_1Obj from './Unit5_1Obj';
import NavigationBar from '../../../Navigation/NavigationBar/NavigationBar';
import UnitPageTemplate from '../../../Templates/UnitPageTemplate/UnitPageTemplate';
import Notes10A from '../../TEKSContent/TEKS7_10A/Notes7_10A';
import Notes10B from '../../TEKSContent/TEKS7_10B/Notes7_10B';

const unit5_1 = props => {
        // search for keys this way instead of hard coding array index because I may change that in the future.
        const quizletLink = Unit5_1Obj.vertMenuItems
                .map(item => {
                        return item['Quizlet'];
                })
                .join('');
        const gameLink = Unit5_1Obj.vertMenuItems
                .map(item => {
                        return item['Game'];
                })
                .join('');
        const homeLink = Unit5_1Obj.vertMenuItems
                .map(item => {
                        return item['Home'];
                })
                .join('');
        return (
                <React.Fragment>
                        <NavigationBar
                                title={Unit5_1Obj.title}
                                gameLink={gameLink}
                                quizletLink={quizletLink}
                                homeLink={homeLink}
                                TEKSArray={Unit5_1Obj.TEKS}
                        />
                        <UnitPageTemplate {...Unit5_1Obj}>
                                <Notes10A />
                                <Notes10B />
                        </UnitPageTemplate>
                </React.Fragment>
        );
};

export default unit5_1;
