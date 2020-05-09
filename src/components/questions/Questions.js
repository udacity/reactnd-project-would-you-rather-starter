import React, { Component } from 'react'
import Container from '@material-ui/core/Container'
import './questions.css'

class Questions extends Component {
    render() {
        const { questions } = this.props
        return (
            <div className="question-container">
                {questions && questions.map((question) => (
                    <Container className="question-widget" disableGutters>
                        <div className="question-banner">
                            Would you rather?
                        </div>
                        <div className="question-options">
                            <div className="option-one">{question.optionOne.text}</div>
                            <div className="option-two">{question.optionTwo.text}</div>
                        </div>
                    </Container>
                ))}
            </div>
        );
    }
}

export default Questions
