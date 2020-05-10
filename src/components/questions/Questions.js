import React, { Component } from 'react'
import Container from '@material-ui/core/Container'
import SwipeableViews from 'react-swipeable-views'
import Pagination from '@material-ui/lab/Pagination'
import Vote from '../vote/Vote'
import './questions.css'
import { connect } from 'react-redux'

const  QUESTION_NAME = 'Would you rather?'

function mapStateToProps({ users }) {
    return {
        users,
    }
}

class Questions extends Component {
    state = {
        activeQuestionIdx: 0,
        hoveredOptionIdx: null,
    }
    changeActiveQuestionsIdx(_evt, page) {
        if (page) {
            this.setState({
                activeQuestionIdx: page - 1,
            })
        }
    }
    handleMouseEnter(idx) {
        this.setState({
            hoveredOptionIdx: idx,
        })
    }
    handleMouseLeave() {
        this.setState({
            hoveredOptionIdx: null,
        })
    }
    activeIconColor(idx) {
        return idx === this.state.hoveredOptionIdx ? 'secondary' : 'action'
    }
    render() {
        const { activeQuestionIdx } = this.state
        const { users, questions } = this.props
        return (
            <div className="question-container">
                {questions && (
                    <React.Fragment>
                        <SwipeableViews index={activeQuestionIdx}
                            enableMouseEvents>
                            {questions.map((question) => (
                                <Container key={question.id} className="question-widget" disableGutters>
                                    <div className="question-banner">
                                        {users[question.author].name} asks
                                        <div>{QUESTION_NAME}</div>
                                    </div>
                                    <div className="question-options">
                                        <div className="option-one" onMouseEnter={() => this.handleMouseEnter(0)} onMouseLeave={() => this.handleMouseLeave()}>
                                            {question.optionOne.text}
                                            <Vote votes={question.optionOne.votes} activeIconColor={this.activeIconColor(0)}></Vote>
                                        </div>
                                        <div className="option-two"onMouseEnter={() => this.handleMouseEnter(1)} onMouseLeave={() => this.handleMouseLeave()}>
                                            {question.optionTwo.text}
                                            <Vote votes={question.optionTwo.votes} activeIconColor={this.activeIconColor(1)}></Vote>
                                        </div>
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

export default connect(mapStateToProps)(Questions)
