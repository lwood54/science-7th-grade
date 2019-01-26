import React from 'react';
import Button from '@material-ui/core/Button';

import cls from './QuizTemplate.module.css';

const correctScreen = props => {
    return (
        <div>
            <div className={cls.Paper}>
                <h2>{'Great choice! You are correct!'}</h2>
                <Button
                    color="primary"
                    variant="contained"
                    onClick={props.handleNext}
                    className={cls.Button}
                >
                    Next Question
                </Button>
            </div>
        </div>
    );
};

export default correctScreen;
