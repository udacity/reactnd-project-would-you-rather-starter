import React, { Component } from 'react'
import { Tab } from 'semantic-ui-react'
import QuestionList from './QuestionList';

class Home extends Component {

  render() {
    const panes = [
      { 
        menuItem: 'Unanswered Questions', 
        render: () => 
          <Tab.Pane>{<div>Unanswered Questions { <QuestionList type={['unanswered']} /> }</div>}</Tab.Pane>}, 
      { 
        menuItem: 'Answered Questions', 
        render: () => 
          <Tab.Pane>{<div>Answered Questions {<QuestionList type={['answered']} />}</div>}</Tab.Pane>}, 
      { 
        menuItem: 'All Questions', 
        render: () => 
        <Tab.Pane>{<div>All Questions {<QuestionList type={['unanswered', 'answered']} />}</div>}</Tab.Pane> },
    ]

    return (
      <div>
        <Tab panes={panes} />
      </div>
    )
  }
}

export default Home