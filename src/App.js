import React, { Component } from 'react'
import Login from './components/login/Login'
import Dashboard from './components/dashboard/Dashboard'
import Emoji from 'react-emoji-render'
import img from './logo.svg'
import styled from 'styled-components'
import { connect } from 'react-redux'
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined'

const CONTAINER_TRANSITION_END_HEIGHT = '250px'
const CONTENT_OPACITY_START = '0'
const CONTENT_OPACITY_END = '1'

const Logo = styled.div `
    width: 100px;
    height: 70px;
    background-image: url(${props => props.logoUrl || img });
    background-size:  cover;
    background-repeat: no-repeat;
`

const AuthedUserIcon = styled.div`
    width: 25px;
    height: 25px;
    background-image: url(${props => props.avatarURL });
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 50%;
    border: 2px solid white;
    margin-right: 3px;
    margin-top: 3px;
`

function mapStateToProps({ users, authedUser }) {
    return {
        showLogin: authedUser === null,
        authedUser: Object.values(users).find(user => user.id === authedUser),
    }
}

class App extends Component {
    constructor(props) {
        super(props)
        this.appContainer = React.createRef()
        this.loginContainer = React.createRef()
    }
    componentDidMount() {
        this.loginContainer.current.style.opacity = CONTENT_OPACITY_START
        setTimeout(() => {
            this.appContainer.current.style.height = CONTAINER_TRANSITION_END_HEIGHT
        }, 1000)
    }
    render() {
        const { authedUser, showLogin } = this.props
        
        return (
            <React.Fragment>
                <div className="logo-container">
                    <Logo className="spin"></Logo>
                </div>
                <div className="authed-user-container">
                    {!authedUser && (
                        <AccountCircleOutlinedIcon style={{fill: "white"}} fontSize="large"></AccountCircleOutlinedIcon>
                    )}
                    {authedUser && authedUser.avatarURL && (
                        <AuthedUserIcon avatarURL={ authedUser.avatarURL } ></AuthedUserIcon>
                    )}
                </div>
                <div className="app-container" ref={this.appContainer} onTransitionEnd={() => { this.loginContainer.current.style.opacity = CONTENT_OPACITY_END } }>
                    {showLogin && (
                        <div className="login-container" ref={this.loginContainer}>
                            <Login></Login>
                        </div>
                    )}
                    {!showLogin && (
                        <div className="dashboard-container">
                            <Dashboard></Dashboard>
                        </div>
                    )}
                </div>
                <div className="made-by"><Emoji text="Made with <3 using React/Redux"></Emoji></div>
            </React.Fragment>
        );
    }
}

export default connect(mapStateToProps)(App)
