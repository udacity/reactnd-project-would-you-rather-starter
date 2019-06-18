import React, { Component } from 'react'
import { 
  Button,
  TextField,
  withStyles
} from '@material-ui/core';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { handleSaveQuestion } from '../actions/shared'

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
})

class NewPoll extends Component {
  state = {
    option1: '',
    option2: '',
  }

  handleChange = name => event => {
    // This one seems a new feature
    // but have to be here
    // otherwise the target value will be null
    event.persist() 
    
    this.setState({
      [name]: event.target.value
    })
  }

  handleClick = e => {
    e.preventDefault()

    const { option1, option2 } = this.state
    const { authedUser, dispatch } = this.props

    const question = {
      optionOneText: option1,
      optionTwoText: option2,
      author: authedUser
    }

    dispatch(handleSaveQuestion(
      question,
      () => this.setState({
        option1: '', 
        option2: ''
      })
    ))
  }

  render() {
    const { option1, option2 } = this.state
    const { logState, classes } = this.props

    if (logState === false) {
      return <Redirect to='/login' />
    }
  
    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="option1"
          label="Enter Option One Text Here"
          className={classes.textField}
          value={option1}
          onChange={this.handleChange('option1')}
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="option2"
          label="Enter Option Two Text Here"
          className={classes.textField}
          value={option2}
          onChange={this.handleChange('option2')}
          margin="normal"
          variant="outlined"
        />
        <Button onClick={this.handleClick}>
          Submit
        </Button>
      </form>
    )
  }
}
  
const mapStateToProps = ({ authedUser, logState }) => {
  return {
    authedUser,
    logState,
  }
}

export default connect(mapStateToProps)(withStyles(styles)(NewPoll))