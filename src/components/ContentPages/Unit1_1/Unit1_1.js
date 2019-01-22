import React from 'react';

import NavigationBar from '../../Navigation/NavigationBar/NavigationBar';
import Unit1_1Obj from './Unit1_1Obj';

const unit1_1 = props => {
    // pass the Unit1_1 object on as props is this too slow?
    // is this inefficient? or is this a good way to access the object property that I want to be able
    // to use on this page?
    return (
        <React.Fragment>
            <NavigationBar
                title={Unit1_1Obj.title}
                gameLink={Unit1_1Obj.vertMenuItems[2]['Game']}
                quizletLink={Unit1_1Obj.vertMenuItems[4]['Quizlet Card Set']}
            />
            <h1>{Unit1_1Obj.title}</h1>
        </React.Fragment>
    );
};

export default unit1_1;
