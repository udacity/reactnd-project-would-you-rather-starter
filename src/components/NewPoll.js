import React, { Component } from 'react'
import { 
  Button,
  TextField,
  withStyles,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Typography,
} from '@material-ui/core';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { handleSaveQuestion } from '../actions/shared'

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    paddingBottom: 15
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    width: 480,
    margin: 15,
  },
  header: {
    fontSize: 18,
    padding: '10px 0 10px 20px',
    textAlign: 'center',
    borderBottom: '1px solid #dcdcdc'
  },
  description: {
    marginBottom: 20
  },
  textField: {
    marginTop: theme.spacing(1), // todo: implement the theme
    marginBottom: theme.spacing(1),
  },
  or: {
    width: '100%', 
    textAlign: 'center',
    borderBottom: '1px solid #dcdcdc',
    lineHeight: 0,
    margin: '10px 0 10px'
  },
  orWord: {
    background: '#fff',
    padding: '0 10px'
  },
  action: {
    padding: '0 16px 20px 16px',
  }
})

class NewPoll extends Component {
  state = {
    option1: '',
    option2: '',
    toHome: false
  }

  handleChange = name => event => {
    // event.persist() 
    
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
        option2: '',
        toHome: true
      })
    ))
  }

  render() {
    const { option1, option2, toHome } = this.state
    const { logState, classes } = this.props

    if (logState === false || logState === 0) {
      return <Redirect to='/login' />
    }

    if (toHome === true) {
      return <Redirect to='/' />
    }
  
    return (
      <div className={classes.root}>
        <Card className={classes.card}>
          <CardHeader
            className={classes.header}
            disableTypography
            title="Create New Question"
          />
          <form noValidate autoComplete="off">
            <CardContent>
              <Typography className={classes.description} variant="body2" color="textSecondary">
                Complete the question:
              </Typography>
              <Typography variant="h6" gutterBottom>
                Would you rather ...
              </Typography>
              <TextField
                id="option1"
                label="Enter Option One Text Here"
                className={classes.textField}
                value={option1}
                onChange={this.handleChange('option1')}
                margin="normal"
                variant="outlined"
                fullWidth
              />
              <Typography variant="subtitle2" className={classes.or}>
                <span className={classes.orWord}>OR</span>
              </Typography>
              <TextField
                id="option2"
                label="Enter Option Two Text Here"
                className={classes.textField}
                value={option2}
                onChange={this.handleChange('option2')}
                margin="normal"
                variant="outlined"
                fullWidth
              />
            </CardContent>
            <CardActions className={classes.action}>
              <Button 
                color="primary"
                variant="contained"
                fullWidth
                disabled={option1 === '' || option2 === ''}
                onClick={this.handleClick}
              >
                Submit
              </Button>
            </CardActions>
          </form>
        </Card>
      </div>
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