import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'
import {link} from 'react-router-dom'


class Login extends Component {
    handleChange= (e)=>{ //arrow function to be able to use (this)
        e.preventDefault()
        const {dispatch} = this.props
        dispatch(setAuthedUser(e.target.value))
        
    }
    render() {
        return (
            <div>
                <form>
                    <fieldset>
                    <legend>Login</legend>
                    <select value={this.props.authedUser
                    } onChange={this.handleChange}>
                        {this.props.users.map(user=>(
                            <option value={user}> {user} </option>
                        ))}

                    </select>
                    <Link to ='/'>
                        submit
                    </Link>
                    </fieldset>
                    
                </form>
                

            </div>
        )
    }
}

function mapStateToProps({authedUser,users}){
    return {authedUser,
        users:Object.keys(users)}
    
}

export default connect(mapStateToProps)(Login)