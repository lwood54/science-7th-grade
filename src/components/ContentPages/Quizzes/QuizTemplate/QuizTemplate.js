import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

// import cls from './QuizTemplate.module.css';

const styles = theme => ({
    Answer: {
        margin: '1%',
        marginTop: '10px',
        width: '98%'
    },
    Correct: {
        margin: '1%',
        marginTop: '10px',
        width: '98%',
        backgroundColor: 'blue'
    }
});

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
                correctQuestionsArray: updatedCorrectQuestions
            });
        } else {
            // shuffle the question order and keep the question in the question bank
        }
    };

    answerStatusHandler = () => {
        // I want to update the screen to say
        // "Congratulations, that was correct" if it was right
        // "Sorry, that was wrong" if it was wrong
        // I can't decide if it should re-render after timeout or on button next press
    };

    render() {
        // get classes from withStyles props
        const { classes } = this.props;
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
                    <Button
                        key={v}
                        color="primary"
                        variant="contained"
                        className={
                            this.state.answer ? classes.Correct : classes.Answer
                        }
                        onClick={() => this.clickedAnswerHandler(v)}
                    >
                        {answer[v]}
                    </Button>
                );
            });
        } else {
            answers = (
                <h2>
                    Great job, you've gotten all the practice questions correct!
                </h2>
            );
        }

        return (
            <div>
                <h1>{this.props.teksNum}</h1>
                {this.state.displayQuestionsArray.length > 0 ? (
                    <h2>{this.state.displayQuestionsArray[0].text}</h2>
                ) : null}
                {answers}
            </div>
        );
    }
}

export default withStyles(styles)(QuizTemplate);
