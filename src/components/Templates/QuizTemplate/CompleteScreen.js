import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

import cls from './QuizTemplate.module.css';

const completeScreen = props => {
        console.log(props);
        return (
                <div className={cls.AnswerContainer}>
                        <h2 style={{ width: '100%' }}>
                                {"Great job, you've gotten all the practice questions correct!"}
                        </h2>
                        <Link
                                to="/"
                                style={{
                                        textDecoration: 'none'
                                }}
                                className={cls.OptionsButtonContainer}
                        >
                                <Button color="primary" variant="contained" className={cls.AnswerButton}>
                                        Home
                                </Button>
                        </Link>
                        <Link
                                to={props.unitMain}
                                style={{
                                        textDecoration: 'none'
                                }}
                                className={cls.OptionsButtonContainer}
                        >
                                <Button color="primary" variant="contained" className={cls.AnswerButton}>
                                        Return to Unit
                                </Button>
                        </Link>
                        <div className={cls.OptionsButtonContainer}>
                                <Button
                                        color="primary"
                                        variant="contained"
                                        className={cls.AnswerButton}
                                        onClick={props.handleReset}
                                >
                                        Try Again
                                </Button>
                        </div>
                </div>
        );
};

export default completeScreen;
