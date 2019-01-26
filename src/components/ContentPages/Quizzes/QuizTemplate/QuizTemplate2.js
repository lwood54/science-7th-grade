import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

export class QuizTemplate2 extends Component {
    state = {
        displayQuestionsArray: this.props.questions,
        correctQuestionsArray: [],
        numCorrect: 0,
        numWrong: 0
    };

    // Instead of shuffling the array, I could just load the array, then have the render load an initial
    // question randomly from the list, then onClick will result in updating the state by removing a question
    // from the displayArray if it's right
    // what happens if they don't get any right?

    render() {
        return (
            <div>
                <h1>{this.props.teksNum}</h1>
            </div>
        );
    }
}

export default QuizTemplate2;
