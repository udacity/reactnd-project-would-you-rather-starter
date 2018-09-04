import React, { Component } from 'react'
import { Tab } from 'semantic-ui-react'
import QuestionList from './QuestionList';

class Home extends Component {

  render() {
    const panes = [
      { 
        menuItem: 'Unanswered Questions', 
        render: () => 
          <Tab.Pane>{<div>{ <QuestionList type={['unanswered']} /> }</div>}</Tab.Pane>}, 
      { 
        menuItem: 'Answered Questions', 
        render: () => 
          <Tab.Pane>{<div>{<QuestionList type={['answered']} />}</div>}</Tab.Pane>}, 
      { 
        menuItem: 'All Questions', 
        render: () => 
        <Tab.Pane>{<div>
          <h2>Unanswered Questions</h2>
          <QuestionList type={['unanswered']} />
            <h2>Answered Questions</h2>
          <QuestionList type={['answered']} />
        </div>}</Tab.Pane> },
    ]

    return (
      <div>
        <Tab panes={panes} />
      </div>
    )
  }
}

export default Home