import React, { Fragment } from 'react'
import { 
  makeStyles, 
  AppBar, 
  Toolbar,
  Container,
  Tabs,
  Tab
} from '@material-ui/core'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { navTab } from '../actions/navi';
import { handleUserLogout } from '../actions/shared';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  container: {
    height: 48
  },
}));

const Nav = ({ logout, navi, dispatch, width, cookies }) => {
  const classes = useStyles()

  const pageLink = React.forwardRef((props, ref) => 
    <Link innerRef={ref} {...props} />)

  const handleChange = (event, newValue) => {
    dispatch(navTab(newValue))
  }

  const handleLogout = (e) => {
    e.preventDefault()
    
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
                >
                  <Tab label="Home" component={pageLink} to="/" />
                  <Tab label="New Question" component={pageLink} to="/newpoll" />
                  <Tab label="Leader Board" component={pageLink} to="/leadboard" />
                  <Tab label="Logout" onClick={handleLogout} />
                </Tabs>
              </Fragment>
            : <Toolbar></Toolbar>
          }
        </Container>
      </AppBar>
    </div>
  )
}

const mapStateToProps = ({ authedUser, navi }, { cookies }) => ({
  logout: authedUser === null,
  navi,
  cookies
})

export default connect(mapStateToProps)(Nav)
