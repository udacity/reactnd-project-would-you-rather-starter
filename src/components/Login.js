import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import { 
  InputLabel,
  MenuItem,
  FormControl,
  Select
} from '@material-ui/core'

// import { setAuthedUser } from '../actions/authedUser'
// import { logIn } from '../actions/logState'
import { handleUserLogin } from '../actions/shared'

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
})

class Login extends Component  {
  state = {
    authedUser: '',
  }

  handleChange = (event) => {
    const { cookies } = this.props

    this.setState({
      authedUser: event.target.value
    }, () => {
      const { authedUser } = this.state

      cookies.set('authedUser', authedUser, { path: '/' })
      this.props.dispatch(handleUserLogin(authedUser))
    })
  }
  
  render() {
    if (this.props.logState === true) {
      return <Redirect to='/' />
    }

    const { authedUser } = this.state
    const { classes, users } = this.props

    return (
      <div>
        Login page
        <form className={classes.root} autoComplete="off">
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="age-simple">Authed User</InputLabel>
            <Select
              value={authedUser}
              onChange={this.handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {users.map(user => 
                <MenuItem 
                  key={user.id} 
                  value={user.id}
                >
                  {user.name}
                </MenuItem>)}
            </Select>
          </FormControl>
        </form>
      </div>
    )
  }
}

const mapStateToProps = ({ users, logState }) => ({
  logState,
  users: Object.entries(users).map(userArr => userArr[1])
})

export default connect(mapStateToProps)(withStyles(styles)(Login))