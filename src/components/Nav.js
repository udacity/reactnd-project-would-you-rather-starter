import React, { Fragment } from 'react'
import { 
  makeStyles, 
  AppBar, 
  Toolbar,
  Container,
  Tabs,
  Tab,
  Button,
  Typography,
  Grid,
  Avatar
} from '@material-ui/core'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { navTab, resetNav } from '../actions/navi';
import { handleUserLogout } from '../actions/shared';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  container: {
    display: 'flex',
    height: 48
  },
  tabs: {
    flexGrow: 1
  },
  helloWrapper: {
    display: 'flex',
    height: 'calc(100% - 2px)'
  },
  hello: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingRight: 30
  },
  grid: {
    width: 50,
  },
  avatar: {
    width: 30,
    height: 30,
  },
  btn: {
    flexGrow: 1,
    color: '#fff'
  }
}))

const Nav = ({ logout, navi, dispatch, width, cookies, user }) => {
  const classes = useStyles()

  const pageLink = React.forwardRef((props, ref) => 
    <Link innerRef={ref} {...props} />)

  const handleChange = (event, newValue) => {
    dispatch(navTab(newValue))
  }

  const handleLogout = (e) => {
    e.preventDefault()
    
    dispatch(resetNav())
    dispatch(handleUserLogout())
    cookies.remove('authedUser', { path: '/' })
  }

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Container maxWidth='md' className={classes.container}>
          {logout !== true 
            ? <Fragment>
                <Tabs 
                  variant="fullWidth"
                  value={navi} 
                  onChange={handleChange}
                  className={classes.tabs}
                >
                  <Tab label="Home" component={pageLink} to="/" />
                  <Tab label="New Question" component={pageLink} to="/add" />
                  <Tab label="Leader Board" component={pageLink} to="/leaderboard" />
                </Tabs>
                <div className={classes.helloWrapper}>
                  <div className={classes.hello}>
                    <Typography variant="body2">
                      {`Hello, ${user.name}`}
                    </Typography>
                  </div>
                  <Grid container alignItems="center" className={classes.grid}>
                    <Avatar alt="Remy Sharp" src={user.avatarURL} className={classes.avatar} />
                  </Grid>
                  <Button onClick={handleLogout} className={classes.btn}>Logout</Button>
                </div>
              </Fragment>
            : <Toolbar></Toolbar>
          }
        </Container>
      </AppBar>
      <style type="text/css">
        {`
        a, a:active, a:visited, a:hover {
            text-decoration: none;
        }

        a:hover {
          color: #fff;
        }
        `}
      </style>
    </div>
  )
}

const mapStateToProps = ({ authedUser, navi, users }, { cookies }) => {
  const user = users[authedUser]
  
  return {
    logout: authedUser === null,
    navi,
    cookies,
    user
  }
}

export default connect(mapStateToProps)(Nav)
