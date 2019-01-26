import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

export class QuizTemplate extends Component {
    state = {
        numCorrect: 0,
        numWrong: 0
    };
    render() {
        return (
            <div>
                <h1>{this.props.teksNum}</h1>
                <h2>{this.props.questions[0].text}</h2>
                <Button color="primary" variant="raised">
                    {this.props.questions[0].wrong1}
                </Button>
                <Button color="primary" variant="raised">
                    {this.props.questions[0].wrong2}
                </Button>
                <Button color="primary" variant="raised">
                    {this.props.questions[0].wrong3}
                </Button>
                <Button color="primary" variant="raised">
                    {this.props.questions[0].correct}
                </Button>
            </div>
        );
    }
}

export default QuizTemplate;
