import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { handleSaveQuestionAnswer } from '../actions/shared'
import { Statistic, Progress, Grid, Image, Label } from 'semantic-ui-react'

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
      <div className='question-detail-wrapper'>
        <Grid>
          <Grid.Column width={7}>
            <span className='question-detail-user'>{questionAuthor.name} asks...</span>
            <Image className='question-detail-img' src={questionAuthor.avatarURL} alt={questionAuthor.name}  />
          </Grid.Column>
          <Grid.Column width={9} className='question-detail-content-wrapper'>
            <div className='question-detail-content'>
              <h1>Would You Rather</h1>
              <div>
                <div className="ui basic green button fluid" onClick={(e) => this.handleSubmit(e, 'optionOne')} >{question.optionOne.text}</div>
                <div className="ui basic blue button fluid" onClick={(e) => this.handleSubmit(e, 'optionTwo')} >{question.optionTwo.text}</div>
              </div>
            </div>
          </Grid.Column>
        </Grid>
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

      <div className='question-results-wrapper'>
        <Grid>
          <Grid.Column width={7}>
            <span className='question-results-user'>{questionAuthor.name} asks...</span>
            <Image className='question-results-img' src={questionAuthor.avatarURL} alt={questionAuthor.name} />
          </Grid.Column>
          <Grid.Column width={9} className='question-results-content-wrapper'>
            <div className='question-results-content'>
              <h1>Would You Rather</h1>
              <div className='question-results-optionOne-container'>
                <div className='question-results-answered-icon'>
                  {answered === 'optionOne' ?
                    <Label color='teal' ribbon='right'>Your Choice</Label> : null
                  }
                </div>
                  <div><h3>{question.optionOne.text}</h3></div>
                  <div>
                    <Statistic>
                      <Statistic.Value><Progress percent={percentageOptionOne} color='teal' progress /></Statistic.Value>
                      <Statistic.Label>{optionOneVotes} out of {optionOneVotes + optionTwoVotes}</Statistic.Label>
                    </Statistic>
                  </div>
              </div>

              
              <div className='question-results-optionTwo-container'>
                <div className='question-results-answered-icon'>
                  {answered === 'optionTwo' ?
                    <Label color='teal' ribbon='right'>Your Choice</Label> : null
                  }
                </div>
                <div><h3>{question.optionTwo.text}</h3></div>
                <div>
                  <Statistic>
                    <Statistic.Value><Progress percent={percentageOptionTwo} color='teal' progress/></Statistic.Value>
                    <Statistic.Label>{optionTwoVotes} out of {optionOneVotes + optionTwoVotes}</Statistic.Label>
                  </Statistic>
                </div>
              </div>
            </div>
          </Grid.Column>
        </Grid>
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
        {
          this.state.answered === '' ?
            this.renderQuestionOptions() :
            this.renderQuestionResults()
        }
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