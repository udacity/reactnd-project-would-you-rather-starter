import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddQuestion } from '../actions/shared'
import { Input, Form, Button } from 'semantic-ui-react'


class AddQuestion extends Component {

  state = {
    optionOne: '',
    optionTwo: ''
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { optionOne, optionTwo } = this.state
    const { history, dispatch } = this.props

    dispatch(handleAddQuestion(optionOne, optionTwo))
    history.push('/')
  }

  handleChange = (e) => {
    e.preventDefault()
    const option = e.target.id

    if (option === 'optionOne') {
      this.setState({ optionOne: e.target.value })
    } else if (option === 'optionTwo') {
      this.setState({ optionTwo: e.target.value })
    }

  }

  render() {  
    const { optionOne, optionTwo } = this.state

    return (
      <div>
        <Form className="AddQuestionForm" onSubmit={this.handleSubmit}>
          <h1>Would You Rather?</h1>
          <Form.Field>
            <Input id='optionOne' fluid icon='question' 
              placeholder='Question 2' 
              value={optionOne}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <Input id='optionTwo' fluid icon='question' 
            placeholder='Question 2' 
            value={optionTwo}
            onChange={this.handleChange}/>
          </Form.Field>
          <Button type='submit'>Submit</Button>

        </Form>
      </div>
    )
  }
}

export default connect()(AddQuestion)