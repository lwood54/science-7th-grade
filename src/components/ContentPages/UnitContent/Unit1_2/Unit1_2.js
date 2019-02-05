import React from 'react';

import Unit1_2Obj from './Unit1_2Obj';
import NavigationBar from '../../../Navigation/NavigationBar/NavigationBar';
import UnitPageTemplate from '../../../Templates/UnitPageTemplate/UnitPageTemplate';

const unit1_2 = props => {
        // search for keys this way instead of hard coding array index because I may change that in the future.
        const quizletLink = Unit1_2Obj.vertMenuItems
                .map(item => {
                        return item['Quizlet'];
                })
                .join('');
        const gameLink = Unit1_2Obj.vertMenuItems
                .map(item => {
                        return item['Game'];
                })
                .join('');
        const homeLink = Unit1_2Obj.vertMenuItems
                .map(item => {
                        return item['Home'];
                })
                .join('');
        return (
                <React.Fragment>
                        <NavigationBar
                                title={Unit1_2Obj.title}
                                gameLink={gameLink}
                                quizletLink={quizletLink}
                                homeLink={homeLink}
                                TEKSArray={Unit1_2Obj.TEKS}
                        />
                        <UnitPageTemplate {...Unit1_2Obj}>
                                <p>Content coming soon!</p>
                        </UnitPageTemplate>
                </React.Fragment>
        );
};

export default unit1_2;
