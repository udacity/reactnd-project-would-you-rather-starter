import React, { Component } from 'react'
import { getUsers, setAuthedUser } from '../../actions'
import './login.css'
import { connect } from 'react-redux'
import styled from 'styled-components'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import StyledButton from '../material-ui/StyledButton'
import StyledLoader from '../material-ui/StyledLoader'

const DEFAULT_AUTHED_USER_ID = 'tylermcginnis'

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

function mapStateToProps({ users }) {
    return {
        users: Object.values(users)
    }
}

class Login extends Component {
    state = {
        authedUser:  null,
        signingIn: false,
    }

    componentDidMount() {
        // set default authed user for selection
        this.setState({authedUser: DEFAULT_AUTHED_USER_ID })
        this.props.dispatch(getUsers())
    }

    handleUserChange(evt) {
        // local state to keep track of who is being chosen before we sign in
        this.setState({ authedUser: evt.target.value })
    }

    onSignIn() {
        this.setState({ signingIn: true })
        setTimeout(() => {
            this.props.dispatch(setAuthedUser(this.state.authedUser))
            this.props.onSignIn()
        }, 1000)
    }

    render() {
        const  { users } = this.props
        const { authedUser, signingIn } = this.state
        
        return (
            users.length ? (
                <React.Fragment>
                    <div className="login-header">
                        <div className="login-header-title"><span>Would</span> You <span>Rather?</span></div>
                    </div>
                    <div className="login-content">
                            {!signingIn && (
                                <form className="form-container">
                                <Select
                                    labelId="user-select"
                                    id="user-select"
                                    value={authedUser ? authedUser : ''}
                                    onChange={(evt) => { this.handleUserChange(evt) }}>
                                    {users.map((user) => (
                                        <MenuItem key={user.id} value={user.id}>
                                            <Avatar url={user.avatarURL}></Avatar>
                                            {user.name}
                                        </MenuItem>
                                    ))}
                                </Select>
                                <StyledButton
                                    onClick={() => { this.onSignIn() }}>
                                    Sign In
                                </StyledButton>
                            </form>  
                            )}
                            {signingIn && (
                                <StyledLoader color="secondary"></StyledLoader>
                            )}
                        </div>
                </React.Fragment>
            ) : null
        );
    }
}

export default connect(mapStateToProps)(Login)
