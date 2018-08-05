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
    const {authedUser} = this.props

    return (
      <div className='nav-container'>
        <div className="ui secondary  menu">
          <NavLink className='item' to='/' exact>Home</NavLink>
          <NavLink className='item' to='/add' exact>New Question</NavLink>
          <NavLink className='item' to='/leaderboard' exact>LeaderBoard</NavLink>
          <div className="right menu">
            <div className="item">
              Hello There! {authedUser.name} 
              <img src={authedUser.avatarURL} alt={authedUser.name}/>
            </div>
            <a className="ui item" onClick={this.logout}>Logout</a>
          </div>
        </div>
      </div>
    )
  }
}


function mapStateToProps({ authedUser }) {
  return {
    authedUser
  }
}


export default withRouter(connect(mapStateToProps)(Nav))