import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { setAuthedUser } from '../actions/authedUser';
import { logIn } from '../actions/logState';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
});


class Login extends Component  {
  state = {
    authedUser: '',
  }

  handleChange = (event) => {
    this.setState({
      authedUser: event.target.value
    }, () => {
      this.props.dispatch(setAuthedUser(this.state.authedUser))
      this.props.dispatch(logIn())
    })
  }
  
  render() {
    if (this.props.logState === true) {
      return <Redirect to='/' />
    }

    const { authedUser } = this.state
    const { classes, users } = this.props
    
    // console.log(authedUser)

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