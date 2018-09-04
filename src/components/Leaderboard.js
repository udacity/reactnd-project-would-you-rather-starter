import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Tab, Grid, Image, Label } from 'semantic-ui-react'

class Leaderboard extends Component {


  renderLeaderboardItem(user) {
    return (

      <Grid key={user.id} className='leaderboard-container'>
        <Grid.Column width={4} className='leaderboard-img-container'>
          <Image className='leaderboard-img' src={user.avatarURL} alt={user.name} />
        </Grid.Column>
        <Grid.Column width={8} className='leaderboard-info-wrapper'>
          <div className='leaderboard-info'>
            <h1>{user.name}</h1>
            <div className='leaderboard-info-answered'>
              <span>Questions answered</span>
              <span>{user.questionsAnswered}</span>
            </div>
            <div className='leaderboard-info-created'>
              <span>Questions created</span>
              <span>{user.questionsCreated}</span>
            </div>
          </div>
        </Grid.Column>
        <Grid.Column width={4} className='leaderboard-score-wrapper'>
          <div className='leaderboard-score'>
            <Label circular color='yellow'>
              {user.questionsCreated + user.questionsAnswered}
            </Label>
          </div>
        </Grid.Column>
      </Grid>

    )
  }
  

  render() {
    const { leaderboard } = this.props
    const panes = [
      {
        menuItem: 'Leaderboard',
        render: () =>
          <Tab.Pane>{<div>{leaderboard.map((element) => this.renderLeaderboardItem(element))}</div>}</Tab.Pane>
      },
    ]
    return ( 
      <div><Tab panes={panes} /></div>
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