import React, { Component } from 'react';

import ContentBase from '../ContentBase/ContentBase';

import Unit1_1Obj from '../Unit1_1/Unit1_1Obj';
import Unit1_2Obj from '../Unit1_2/Unit1_2Obj';

class HomePage extends Component {
    render() {
        return (
            <div>
                {/* DESTRUCTURE object created for page content */}
                <ContentBase {...Unit1_1Obj} />
                <ContentBase {...Unit1_2Obj} />
            </div>
        );
    }
}

export default HomePage;
