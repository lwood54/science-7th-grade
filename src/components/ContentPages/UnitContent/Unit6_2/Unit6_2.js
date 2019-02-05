import React from 'react';

import Unit6_2Obj from './Unit6_2Obj';
import NavigationBar from '../../../Navigation/NavigationBar/NavigationBar';
import UnitPageTemplate from '../../../Templates/UnitPageTemplate/UnitPageTemplate';

const unit6_2 = props => {
        // search for keys this way instead of hard coding array index because I may change that in the future.
        const quizletLink = Unit6_2Obj.vertMenuItems
                .map(item => {
                        return item['Quizlet'];
                })
                .join('');
        const gameLink = Unit6_2Obj.vertMenuItems
                .map(item => {
                        return item['Game'];
                })
                .join('');
        const homeLink = Unit6_2Obj.vertMenuItems
                .map(item => {
                        return item['Home'];
                })
                .join('');
        return (
                <React.Fragment>
                        <NavigationBar
                                title={Unit6_2Obj.title}
                                gameLink={gameLink}
                                quizletLink={quizletLink}
                                homeLink={homeLink}
                                TEKSArray={Unit6_2Obj.TEKS}
                        />
                        <UnitPageTemplate {...Unit6_2Obj}>
                                <p>Content coming soon!</p>
                        </UnitPageTemplate>
                </React.Fragment>
        );
};

export default unit6_2;
