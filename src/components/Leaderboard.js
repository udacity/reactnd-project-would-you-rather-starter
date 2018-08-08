import React, { Component } from 'react'
import { connect } from 'react-redux'

class Leaderboard extends Component {


  renderLeaderboardItem(user) {
    return (
      <div key={user.id}>
        <div>
          <div className='lb-avatar'><img src={user.avatarURL} alt={user.name} /></div>
          <div>{user.name}</div>
          <div>
            <span>Questions Answered</span>
            <span>{user.questionsAnswered}</span>
          </div>
          <div>
            <span>Questions Created</span>
            <span>{user.questionsCreated}</span>
          </div>
          <div>
            <span>Score</span>
            <span>{user.questionsCreated + user.questionsAnswered}</span>
          </div>
        </div>
      </div>
    )
  }
  

  render() {
    const { leaderboard } = this.props
  
    return ( 
      <div>
        <h1>Leaderboard</h1>
        {leaderboard.map((element) => this.renderLeaderboardItem(element))}
      </div>
      )
    }
  }

function mapStateToProps({authedUser, users}) {

  const leaderboard = Object.keys(users).map(id => ({
    id,
    avatarURL: users[id].avatarURL,
    name: users[id].name,
    questionsCreated: users[id].questions.length,
    questionsAnswered: Object.keys(users[id].answers).length
  })).sort((a, b) => b.questionsCreated + b.questionsAnswered - (a.questionsCreated + a.questionsAnswered))

  return {
    authedUser,
    users,
    leaderboard
  }
}

export default connect(mapStateToProps)(Leaderboard)