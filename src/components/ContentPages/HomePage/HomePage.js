import React, { Component } from 'react';

import ContentBase from '../ContentBase/ContentBase';

import Unit1_1Obj from '../Unit1_1/Unit1_1Obj';
import Unit1_2Obj from '../Unit1_2/Unit1_2Obj';
import Unit2_1Obj from '../Unit2_1/Unit2_1Obj';
import Unit2_2Obj from '../Unit2_2/Unit2_2Obj';
import Unit3_1Obj from '../Unit3_1/Unit3_1Obj';
import Unit4_1Obj from '../Unit4_1/Unit4_1Obj';

class HomePage extends Component {
    render() {
        return (
            <div>
                {/* DESTRUCTURE object created for page content */}
                <ContentBase {...Unit1_1Obj} />
                <ContentBase {...Unit1_2Obj} />
                <ContentBase {...Unit2_1Obj} />
                <ContentBase {...Unit2_2Obj} />
                <ContentBase {...Unit3_1Obj} />
                <ContentBase {...Unit4_1Obj} />
            </div>
        );
    }
}

export default HomePage;
