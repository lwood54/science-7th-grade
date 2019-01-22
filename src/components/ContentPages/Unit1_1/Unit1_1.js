import React from 'react';

import NavigationBar from '../../Navigation/NavigationBar/NavigationBar';
import Unit1_1Obj from './Unit1_1Obj';

const unit1_1 = props => {
    // search for keys this way instead of hard coding array index because I may change that in the future.
    const quizletLink = Unit1_1Obj.vertMenuItems
        .map(item => {
            return item['quizletLink'];
        })
        .join('');
    const gameLink = Unit1_1Obj.vertMenuItems
        .map(item => {
            return item['game'];
        })
        .join('');
    return (
        <React.Fragment>
            <NavigationBar
                title={Unit1_1Obj.title}
                gameLink={gameLink}
                quizletLink={quizletLink}
            />
        </React.Fragment>
    );
};

export default unit1_1;
