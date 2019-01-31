import React from 'react';
import Button from '@material-ui/core/Button';

import cls from './QuizTemplate.module.css';

const wrongScreen = props => {
    return (
        <div className={cls.Wrong}>
            <h2>{'Sorry, not quite right this time...'}</h2>
            <Button variant="contained" onClick={props.handleNext}>
                Next Question
            </Button>
        </div>
    );
};

export default wrongScreen;
