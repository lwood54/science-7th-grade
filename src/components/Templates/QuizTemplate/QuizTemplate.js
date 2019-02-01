import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
// import foodweb from './images/foodweb.jpg';

import CorrectScreen from './CorrectScreen';
import WrongScreen from './WrongScreen';
import CompleteScreen from './CompleteScreen';
import NavigationBar from '../../Navigation/NavigationBar/NavigationBar';

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
                        let randNum = Math.floor(
                                Math.random() * arrayCopy.length
                        );
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

        clickedAnswerHandler = v => {
                let updatedDisplayQuestions = [
                        ...this.state.displayQuestionsArray
                ];
                let updatedCorrectQuestions = [
                        ...this.state.correctQuestionsArray
                ];
                let updatedNumCorrect = this.state.numCorrect;
                let updatedNumWrong = this.state.numWrong;
                if (v === 'correct') {
                        updatedNumCorrect += 1;
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
                                answerStatus: 'correct',
                                numCorrect: updatedNumCorrect
                        });
                } else {
                        updatedNumWrong += 1;
                        // shuffle the question order and keep the question in the question bank
                        updatedDisplayQuestions = this.shuffleArray(
                                updatedDisplayQuestions
                        );
                        this.setState({
                                displayQuestionsArray: updatedDisplayQuestions,
                                answerStatus: 'wrong',
                                numWrong: updatedNumWrong
                        });
                }
        };

        handleNext = () => {
                this.setState({ answerStatus: 'none' });
        };

        handleReset = () => {
                this.setState({
                        displayQuestionsArray: this.shuffleArray(
                                this.props.questions
                        ),
                        correctQuestionsArray: [],
                        answerStatus: 'none',
                        numCorrect: 0,
                        numWrong: 0
                });
        };

        render() {
                // set default answer choices
                let answers = null;
                // check to make sure the array is not empty
                if (this.state.displayQuestionsArray.length > 0) {
                        // shuffle a copied array of display questions from first index position
                        // each question object has an array of answer objects like this: {correct status: answer choice}
                        let shuffledAnswers = this.shuffleArray([
                                ...this.state.displayQuestionsArray[0].answers
                        ]);
                        // set answers = a series of buttons that display the value of key:value
                        answers = shuffledAnswers.map(answer => {
                                // Object.keys creats an array of keys from the object, there is only
                                // one key in these objects. This sets v = to value for that key:value pair
                                let v = Object.keys(answer)[0];
                                return (
                                        <div
                                                className={
                                                        cls.AnswerButtonContainer
                                                }
                                                key={v}
                                        >
                                                <Button
                                                        color="primary"
                                                        variant="contained"
                                                        className={
                                                                cls.AnswerButton
                                                        }
                                                        onClick={() =>
                                                                this.clickedAnswerHandler(
                                                                        v
                                                                )
                                                        }
                                                >
                                                        {answer[v]}
                                                </Button>
                                        </div>
                                );
                        });
                } else {
                        answers = (
                                <CompleteScreen
                                        handleReset={this.handleReset}
                                />
                        );
                }

                return (
                        <div style={{ textAlign: 'center', margin: 'auto' }}>
                                <NavigationBar
                                        title={this.props.teksNum}
                                        homeLink="/"
                                />
                                <Paper className={cls.Paper}>
                                        {this.state.answerStatus ===
                                        'correct' ? (
                                                <CorrectScreen
                                                        handleNext={
                                                                this.handleNext
                                                        }
                                                />
                                        ) : this.state.answerStatus ===
                                          'wrong' ? (
                                                <WrongScreen
                                                        handleNext={
                                                                this.handleNext
                                                        }
                                                />
                                        ) : (
                                                <div>
                                                        {this.state
                                                                .displayQuestionsArray
                                                                .length > 0 ? (
                                                                // saved images within src...to keep them with their components
                                                                // used require('./image/file/location') from within the TEKS
                                                                // object, then just called that object value for the src below
                                                                // in the <img> tag
                                                                <div>
                                                                        {
                                                                                // identifies how many questions are left
                                                                        }
                                                                        {this
                                                                                .state
                                                                                .displayQuestionsArray
                                                                                .length >
                                                                        1 ? (
                                                                                <h3>
                                                                                        {
                                                                                                this
                                                                                                        .state
                                                                                                        .displayQuestionsArray
                                                                                                        .length
                                                                                        }{' '}
                                                                                        questions
                                                                                        remaining
                                                                                </h3>
                                                                        ) : this
                                                                                  .state
                                                                                  .displayQuestionsArray
                                                                                  .length ===
                                                                          1 ? (
                                                                                <h3>
                                                                                        {
                                                                                                this
                                                                                                        .state
                                                                                                        .displayQuestionsArray
                                                                                                        .length
                                                                                        }{' '}
                                                                                        question
                                                                                        remaining
                                                                                </h3>
                                                                        ) : null}
                                                                        {
                                                                                // if the image is truthy, as in not an amptey array, it will
                                                                                // display the image
                                                                        }
                                                                        {this
                                                                                .state
                                                                                .displayQuestionsArray[0]
                                                                                .image ? (
                                                                                <img
                                                                                        className={
                                                                                                cls.QuizImage
                                                                                        }
                                                                                        src={
                                                                                                this
                                                                                                        .state
                                                                                                        .displayQuestionsArray[0]
                                                                                                        .image
                                                                                        }
                                                                                        alt={
                                                                                                this
                                                                                                        .props
                                                                                                        .teksLabel
                                                                                        }
                                                                                />
                                                                        ) : null}
                                                                        <h2>
                                                                                {
                                                                                        this
                                                                                                .state
                                                                                                .displayQuestionsArray[0]
                                                                                                .text
                                                                                }
                                                                        </h2>
                                                                </div>
                                                        ) : null}
                                                        <div
                                                                className={
                                                                        cls.AnswerContainer
                                                                }
                                                        >
                                                                {answers}
                                                        </div>
                                                </div>
                                        )}
                                        <h2 className={cls.qNums}>
                                                CORRECT:{' '}
                                                <em>{this.state.numCorrect}</em>
                                        </h2>
                                        <h2 className={cls.qNums}>
                                                WRONG:{' '}
                                                <em>{this.state.numWrong}</em>
                                        </h2>
                                </Paper>
                        </div>
                );
        }
}

export default QuizTemplate;
