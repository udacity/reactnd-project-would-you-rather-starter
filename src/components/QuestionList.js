import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Grid, Image } from 'semantic-ui-react'


class QuestionList extends Component {

  loadQuestionDetails (e, id) {
    e.preventDefault()
    this.props.history.push(`/questions/${id}`)
  }

  renderQuestionPreview(question, user) {
    return (
      <Grid.Row key={user.id} className='question-preview-item'>
        <Grid.Column width={7} className='question-preview-img'>
          <Image src={user.avatarURL} alt={user.name} />
          <span className='question-preview-user'>{user.name} asks...</span>
        </Grid.Column>
        <Grid.Column width={9} className='question-preview-content'>
          <h4>Would you rather</h4>
          <span>{question.optionOne.text.substring(0, 10)}...</span>
          <div className="ui primary button" onClick={(e) => this.loadQuestionDetails(e, question.id)} >View Question</div>
        </Grid.Column>
      </Grid.Row>
    )
  }

  renderQuestionListPreview(filteredQuestions) {
    const { questions, users } = this.props

    return (
      <div className='question-list-wrapper'>{
        filteredQuestions.map((qid, index) => 
        <div className='question-preview-wrapper'>
          <Grid columns={2} key={qid}> 
            {console.log(index)}
            {this.renderQuestionPreview(questions[qid], users[questions[qid].author])}
          </Grid>
        </div>
        )
      }</div>
    )
  }

  render() {
    const { answeredQuestions, unansweredQuestions, type} = this.props

    return (
      <div> 
        {type.includes('unanswered') ? this.renderQuestionListPreview(unansweredQuestions) : null }
        {type.includes('answered') ? this.renderQuestionListPreview(answeredQuestions) : null }
      </div>
    )
  }
}

function mapStateToProps({ questions, users, authedUser }) {

  const authedUserObj = users[authedUser];
  const answeredQuestions = Object.keys(authedUserObj.answers)
    .sort((a, b) => questions[b].timestamp - questions[a].timestamp)
  const unansweredQuestions = Object.keys(questions).filter(qid => !answeredQuestions.includes(qid))
    .sort((a, b) => questions[b].timestamp - questions[a].timestamp)

  return {
    users,
    questions,
    answeredQuestions,
    unansweredQuestions,
  }
}

export default withRouter(connect(mapStateToProps)(QuestionList))