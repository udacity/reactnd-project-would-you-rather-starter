import React, { Component } from 'react'
import Login from './components/login/Login'
import Dashboard from './components/dashboard/Dashboard'
import Emoji from 'react-emoji-render'
import img from './logo.svg'
import styled from 'styled-components'
import { connect } from 'react-redux'
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined'

const LARGE_CONTAINER_TRANSITION_END_HEIGHT = '75%'
const SMALL_CONTAINER_TRANSITION_END_HEIGHT = '30%'
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

function setOpacityLevels(transitionEnd) {
    if (transitionEnd) {
        if (this.loginContainer && this.loginContainer.current) {
            this.loginContainer.current.style.opacity = CONTENT_OPACITY_END
        }
    } else {
        if (this.loginContainer && this.loginContainer.current) {
            this.loginContainer.current.style.opacity = CONTENT_OPACITY_START
        }
    }    
}

class App extends Component {
    constructor(props) {
        super(props)
        this.appContainer = React.createRef()
        this.loginContainer = React.createRef()
        this.dashboardContainer = React.createRef()
    }
    componentDidMount() {
        setOpacityLevels.call(this)
        setTimeout(() => {
            this.appContainer.current.style.height = SMALL_CONTAINER_TRANSITION_END_HEIGHT
        }, 1000)
    }
    expandContainer() {
        this.appContainer.current.style.height = LARGE_CONTAINER_TRANSITION_END_HEIGHT
    }
    onTransitionEnd() {
        setOpacityLevels.call(this, true)
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
                <div className="app-container" ref={this.appContainer} onTransitionEnd={() => { this.onTransitionEnd() } }>
                    {showLogin && (
                        <div className="login-container" ref={this.loginContainer}>
                            <Login onSignIn={() => { this.expandContainer() }}></Login>
                        </div>
                    )}
                    {!showLogin && (
                        <div className="dashboard-container" ref={this.dashboardContainer}>
                            <Dashboard></Dashboard>
                        </div>
                    )}
                </div>
                <div className="made-by"><Emoji text="Built with <3 using React/Redux/MaterialUI"></Emoji></div>
            </React.Fragment>
        );
    }
}

export default connect(mapStateToProps)(App)
