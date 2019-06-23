import React, { Component } from 'react'
import { Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import { 
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button
} from '@material-ui/core'

import { handleUserLogin } from '../actions/shared'

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
    padding: '6px 0 6px 0',
    textAlign: 'center',
    borderBottom: '1px solid #dcdcdc',
    backgroundColor: '#f0f0f0'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
  },
  action: {
    padding: '24px 0 0 0',
  }
})

const loginImg = "https://img1.goodfon.com/original/1600x900/f/2d/world-of-warcraft-mists-of-923.jpg?d=1"

class Login extends Component  {
  state = {
    authedUser: '',
  }

  handleChange = (event) => {
    this.setState({
      authedUser: event.target.value
    })
  }

  handleClick = event => {
    const { cookies } = this.props
    const { authedUser } = this.state

    cookies.set('authedUser', authedUser, { path: '/' })
    this.props.dispatch(handleUserLogin(authedUser))
  }
  
  render() {
    if (this.props.logState === true) {
      if (this.props.location.state) {
        return <Redirect to={`/questions/${this.props.location.state.referrer}`} />
      } else {
        return <Redirect to='/' />
      }
    }

    const { authedUser } = this.state
    const { classes, users } = this.props

    return (
      <div className={classes.root}>
        <Card className={classes.card}>
          <CardHeader
            className={classes.header}
            title="Welcome to the Would You Rather App!"
            subheader="Please sign in to continue"
            titleTypographyProps={{variant: 'h6'}}
          />
          <CardMedia
            className={classes.media}
            image={loginImg}
          />
          <form autoComplete="off">
            <CardContent className={classes.cardContent}>
              <Typography variant="h6" align="center" color="primary">
                Sign in
              </Typography>
              <FormControl>
                <InputLabel>Authenticated User</InputLabel>
                <Select
                  value={authedUser}
                  onChange={this.handleChange}
                  fullWidth
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {users.map(user => 
                    <MenuItem key={user.id} value={user.id}>
                      {user.name}
                    </MenuItem>
                  )}
                </Select>
              </FormControl>
              <CardActions className={classes.action}>
                <Button 
                  color="primary"
                  variant="contained"
                  fullWidth
                  disabled={authedUser === ''}
                  onClick={this.handleClick}
                >
                  Submit
                </Button>
              </CardActions>
            </CardContent>
          </form>
        </Card>
      </div>
    )
  }
}

const mapStateToProps = ({ users, logState }) => ({
  logState,
  users: Object.entries(users).map(userArr => userArr[1])
})

export default withRouter(connect(mapStateToProps)(withStyles(styles)(Login))) 