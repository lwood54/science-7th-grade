import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

import CorrectScreen from './CorrectScreen';
import WrongScreen from './WrongScreen';
import CompleteScreen from './CompleteScreen';

import cls from './QuizTemplate.module.css';

export class QuizTemplate extends Component {
    // NOTE: MUST put this method above state to use inside state
    // also...is this practice ok? Is there a better way to do this?
    shuffleArray = array => {
        // copy array to manipulate
        let arrayCopy = [...array];
        let mixedArray = [];
        // loop through copy until no elements left
        while (arrayCopy.length > 0) {
            let randNum = Math.floor(Math.random() * arrayCopy.length);
            // add removed elements to mixedArray as looping occurs
            mixedArray.push(arrayCopy.splice(randNum, 1)[0]);
        }
        return mixedArray;
    };

    state = {
        displayQuestionsArray: this.shuffleArray(this.props.questions),
        correctQuestionsArray: [],
        answerStatus: 'none',
        numCorrect: 0,
        numWrong: 0
    };

    clickedAnswerHandler = (v, ev) => {
        console.log(v);
        let updatedDisplayQuestions = [...this.state.displayQuestionsArray];
        let updatedCorrectQuestions = [...this.state.correctQuestionsArray];
        if (v === 'correct') {
            // move index 0 question to correctQuestionsArray
            // and remove it from displayQuestionsArray
            updatedCorrectQuestions.push(
                updatedDisplayQuestions.splice(0, 1)[0]
            );
            // might need to make setState in the callback function after a timeout when
            // user is notified that they were wrong
            this.setState({
                displayQuestionsArray: updatedDisplayQuestions,
                correctQuestionsArray: updatedCorrectQuestions,
                answerStatus: 'correct'
            });
        } else {
            // shuffle the question order and keep the question in the question bank
            updatedDisplayQuestions = this.shuffleArray(
                updatedDisplayQuestions
            );
            this.setState({
                displayQuestionsArray: updatedDisplayQuestions,
                answerStatus: 'wrong'
            });
        }
    };

    handleNext = () => {
        this.setState({ answerStatus: 'none' });
    };

    render() {
        // set default answer choices
        let answers = null;
        // check to make sure the array is not empty
        if (this.state.displayQuestionsArray.length > 0) {
            let shuffledAnswers = this.shuffleArray([
                ...this.state.displayQuestionsArray[0].answers
            ]);
            answers = shuffledAnswers.map(answer => {
                let v = Object.keys(answer)[0];
                return (
                    <div className={cls.AnswerButtonContainer}>
                        <Button
                            key={v}
                            color="primary"
                            variant="contained"
                            className={cls.AnswerButton}
                            onClick={() => this.clickedAnswerHandler(v)}
                        >
                            {answer[v]}
                        </Button>
                    </div>
                );
            });
        } else {
            answers = <CompleteScreen />;
        }

        return (
            <Paper className={cls.Paper}>
                <h1>{this.props.teksNum}</h1>
                {this.state.answerStatus === 'correct' ? (
                    <CorrectScreen handleNext={this.handleNext} />
                ) : this.state.answerStatus === 'wrong' ? (
                    <WrongScreen handleNext={this.handleNext} />
                ) : (
                    <div>
                        {this.state.displayQuestionsArray.length > 0 ? (
                            <h2>{this.state.displayQuestionsArray[0].text}</h2>
                        ) : null}
                        <div className={cls.AnswerContainer}>{answers}</div>
                    </div>
                )}
            </Paper>
        );
    }
}

export default QuizTemplate;
