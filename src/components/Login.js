import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'
import { Dropdown } from 'semantic-ui-react'


class Login extends Component {


  renderDropdown(handleChange) {
    const {users, authedUser} = this.props

    const users1 = Object.keys(users).map((user) => {
      return { 
        text: users[user].name,
        value: users[user].id,
        image: { avatar: true, src: users[user].avatarURL },
      }
    });

    return(
      < Dropdown
        placeholder = 'Select User'
        selection
        options={users1}
        onChange = { handleChange }
        value={authedUser}
      />
    )
  }

  handleChange = (e, { value }) => {
    const { users } = this.props
    const selectedUser = users[value]
  
    this.props.dispatch(setAuthedUser(selectedUser))
  }


  render() {
    return (
      <div>
        <h1>Login Page</h1>
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