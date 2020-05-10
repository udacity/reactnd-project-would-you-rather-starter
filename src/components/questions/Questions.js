import React, { Component } from 'react'
import Container from '@material-ui/core/Container'
import SwipeableViews from 'react-swipeable-views'
import Pagination from '@material-ui/lab/Pagination'
import './questions.css'

const  QUESTION_NAME = 'Would you rather?'

class Questions extends Component {
    state = {
        activeQuestionIdx: 0,
    }
    changeActiveQuestionsIdx(evt, page) {
        if (page) {
            this.setState({
                activeQuestionIdx: page - 1,
            })
        }
    }
    render() {
        const { activeQuestionIdx } = this.state
        const { questions } = this.props
        return (
            <div className="question-container">
                {questions && (
                    <React.Fragment>
                        <SwipeableViews index={activeQuestionIdx}
                            enableMouseEvents>
                            {questions.map((question) => (
                                <Container key={question.id} className="question-widget" disableGutters>
                                    <div className="question-banner">
                                        {QUESTION_NAME}
                                    </div>
                                    <div className="question-options">
                                        <div className="option-one">{question.optionOne.text}</div>
                                        <div className="option-two">{question.optionTwo.text}</div>
                                    </div>
                                </Container>
                            ))}
                        </SwipeableViews>
                        <Pagination className="pagination-counter" 
                            count={questions.length}
                            onChange={(evt, page) => { this.changeActiveQuestionsIdx(evt, page)  }}
                        ></Pagination>
                    </React.Fragment>
                )}
            </div>
        );
    }
}

export default Questions
