import React, { Fragment } from 'react'
import { makeStyles, AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { userLogout, removeAuthedUser } from '../actions/authedUser'
import { logOut } from '../actions/logState';
import { handleUserLogout } from '../actions/shared';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Nav = ({ logout, dispatch }) => {
  const classes = useStyles()

  const handleLogout = (e) => {
    dispatch(removeAuthedUser())
    dispatch(logOut())
    // handleUserLogout(dispatch)
  }

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          {logout !== true 
            ? <Fragment>
                <Typography variant="h6" className={classes.title}>
                  <NavLink  to='/' exact>
                    Home
                  </NavLink>
                </Typography>
                <Typography variant="h6" className={classes.title}>
                  <NavLink  to='/newpoll'>
                    New
                  </NavLink>
                </Typography>
                <Typography variant="h6" className={classes.title}>
                  <NavLink  to='/leadboard'>
                    Lead Board
                  </NavLink>
                </Typography>
              </Fragment>
            : null
          }

          {logout !== true 
            ? <Button 
                color="inherit"
                onClick={handleLogout}
              >
                Logout
              </Button>
            : null
          }
        </Toolbar>
      </AppBar>
    </div>
  )
}

const mapStateToProps = ({ authedUser }) => ({
  logout: authedUser === null,
})

export default connect(mapStateToProps)(Nav)
