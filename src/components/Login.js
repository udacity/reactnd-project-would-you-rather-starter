import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'
import { Dropdown } from 'semantic-ui-react'


class Login extends Component {

  handleChange = (e, { value }) => {
    const { users } = this.props
    const selectedUser = users[value]

    this.props.dispatch(setAuthedUser(selectedUser.id))
  }

  renderDropdown(handleChange) {
    const {users, authedUser} = this.props
    const usersOptions = Object.keys(users).map((user) => {
      return { 
        text: users[user].name,
        value: users[user].id,
        image: { avatar: true, src: users[user].avatarURL },
      }
    })

    return(
      <Dropdown
        placeholder = 'Select User'
        selection
        options={usersOptions}
        onChange = { handleChange }
        value={authedUser}
      />
    )
  }

  render() {
    return (
      <div id='page-login'>
        <h1>Sign In</h1>
        {this.renderDropdown(this.handleChange)}
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

export default connect(mapStateToProps)(Login)