import React, { Component } from 'react'
import  { getUsers } from '../../actions/api'
import { setAuthedUser } from '../../actions/authedUser'
import './login.css'
import img from '../../logo.svg'
import { connect } from 'react-redux'
import styled from 'styled-components'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import Emoji from 'react-emoji-render'
import StyledButton from '../material-ui/StyledButton'

const Logo = styled.div `
    width: 100px;
    height: 70px;
    background-image: url(${props => props.logoUrl || img });
    background-size:  cover;
    background-repeat: no-repeat;
`

const Avatar = styled.div `
    display: inline-block;
    background-image: url(${props => props.url});
    background-size: cover;
    background-repeat: no-repeat;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 10px;
`

function mapStateToProps({ users, authedUser }) {
    return {
        users: Object.values(users),
        authedUser: Object.values(users).find(val => val.id === authedUser)
    }
}

class Login extends Component {
    componentDidMount() {
        this.props.dispatch(getUsers())
    }

    handleUserChange(evt) {
        this.props.dispatch(setAuthedUser(evt.target.value))
    }

    render() {
        const  { authedUser, users } = this.props
        
        return (
            users.length ? (
                <React.Fragment>
                    <div className="login-container">
                        <div className="logo-container">
                            <Logo className="spin"></Logo>
                        </div>
                        <div className="login-header">
                            <div className="login-header-title"><span>Would</span> You <span>Rather?</span></div>
                        </div>
                        <div className="login-content">
                            <form className="form-container">
                                <Select
                                    labelId="user-select"
                                    id="user-select"
                                    value={authedUser ? authedUser.id : ''}
                                    onChange={(evt) => { this.handleUserChange(evt) }}>
                                    {users.map((user) => (
                                        <MenuItem key={user.id} value={user.id}>
                                            <Avatar url={user.avatarURL}></Avatar>
                                            {user.name}
                                        </MenuItem>
                                    ))}
                                </Select>
                                <StyledButton
                                    // type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary">
                                    Sign In
                                </StyledButton>
                            </form>
                        </div>
                    </div>
                    <div className="made-by"><Emoji text="Made with <3 using React/Redux"></Emoji></div>
                </React.Fragment>
            ) : null
        );
    }
}

export default connect(mapStateToProps)(Login)
