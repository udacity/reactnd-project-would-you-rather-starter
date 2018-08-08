import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { handleSaveQuestionAnswer } from '../actions/shared'
import { Statistic, Progress, Icon } from 'semantic-ui-react'

class QuestionDetails extends Component {
  constructor(props) {
    super(props);

    let answered = ''
    if (this.props.isAnswered) {
      answered = this.props.isOptionOneAnswered ? 'optionOne' : 'optionTwo'
    }

    this.state = { answered }
  }

  handleSubmit = (e, option) => {
    e.preventDefault()
    const { authedUser, dispatch, question } = this.props

    this.setState({ answered: option })

    dispatch(handleSaveQuestionAnswer(authedUser, question.id, option))
  }

  renderQuestionOptions() {
    const { question, questionAuthor } = this.props;

    return (
      <div>
        <div>
          <h4>Would You Rather</h4>
        </div>

        <div>{questionAuthor.name} asks...</div>
        <div><img src={questionAuthor.avatarURL} alt={questionAuthor.name} /></div>
        <h4>Would you rather</h4>
        <div className="ui basic green button" onClick={(e) => this.handleSubmit(e, 'optionOne')} >{question.optionOne.text}</div>
        <div className="ui basic red button" onClick={(e) => this.handleSubmit(e, 'optionTwo')} >{question.optionTwo.text}</div>
      </div>
    )
  }

  renderQuestionResults() {
    const { question, questionAuthor } = this.props
    const { answered } = this.state
    const optionOneVotes = question.optionOne.votes.length;
    const optionTwoVotes = question.optionTwo.votes.length;
    const percentageOptionOne = (optionOneVotes / (optionOneVotes + optionTwoVotes) * 100).toFixed(1)
    const percentageOptionTwo = (optionTwoVotes / (optionOneVotes + optionTwoVotes) * 100).toFixed(1)

    return (
      <div>
        <div>{questionAuthor.name} asked...</div>
        <h2>question Results</h2>
        <div>
          
          <div><span>{question.optionOne.text}</span></div>
          <div>
            <Statistic>
              <Statistic.Value><Progress percent={percentageOptionOne} color='teal' progress /></Statistic.Value>
              <Statistic.Label>{optionOneVotes} out of {optionOneVotes + optionTwoVotes}</Statistic.Label>
            </Statistic>
          </div>
          <div>
            {answered === 'optionOne' ?
            < Icon circular inverted color='green' name='checkmark' size='small' /> : null
            }
          </div>

        </div>
        <div>
          <div><span>{question.optionTwo.text}</span></div>
          <div>
            <Statistic>
              <Statistic.Value><Progress percent={percentageOptionTwo} color='teal' progress 
              /></Statistic.Value>
              <Statistic.Label>{optionTwoVotes} out of {optionOneVotes + optionTwoVotes}</Statistic.Label>
            </Statistic>
          </div>
          <div>
            {answered === 'optionTwo' ?
              < Icon circular inverted color='green' name='checkmark' size='small' /> : null
            }
          </div>
        </div>
      </div>
    )
  }
  



  render() {
    const { question } = this.props

    if (!question) {
      return <Redirect to='/404' />
    }

    return (
      <div>
        <p>question item!</p>
        <div>
          {
            this.state.answered === '' ? 
            this.renderQuestionOptions() : 
            this.renderQuestionResults()
          }
        </div>

      </div>
      )
    }
  }

function mapStateToProps({ questions, users, authedUser }, props) {
  const { id } = props.match.params
  const question = questions[id]
  const questionAuthor = question ? users[question.author] : null;
  const isOptionOneAnswered = question ? question.optionOne.votes.includes(authedUser) : null
  const isOptionTwoAnswered = question ? question.optionTwo.votes.includes(authedUser) : null
  const isAnswered = isOptionOneAnswered || isOptionTwoAnswered

  return {
    authedUser,
    question,
    questionAuthor,
    isAnswered,
    isOptionOneAnswered,
    isOptionTwoAnswered
  }
}

export default connect(mapStateToProps)(QuestionDetails)