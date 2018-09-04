import React, { Component } from 'react'
import { NavLink, withRouter} from 'react-router-dom'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'

class Nav extends Component {

  logout = (e) => {
    e.preventDefault()
    const { history, dispatch } = this.props

    dispatch(setAuthedUser(null))
    history.push('/')
  }


  render() {
    const { authedUser, users} = this.props
    const authedUserObj = users[authedUser]

    return (
      <div className='nav-container'>
        <div className="ui secondary pointing menu">
          <NavLink className='item' to='/' exact>Home</NavLink>
          <NavLink className='item' to='/add' exact>New Question</NavLink>
          <NavLink className='item' to='/leaderboard' exact>LeaderBoard</NavLink>
          <div className="right menu">
            <div className="item">
              <img src={authedUserObj.avatarURL} alt={authedUserObj.name} />
              <span>{authedUserObj.name}</span>
              <a className="ui item" onClick={this.logout}>Logout</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


function mapStateToProps({ authedUser, users }) {
  return {
    authedUser,
    users
  }
}

export default withRouter(connect(mapStateToProps)(Nav))