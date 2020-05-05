import React, { Component } from 'react';
import Login from './components/Login/Login'
import Emoji from 'react-emoji-render'
import img from './logo.svg'
import styled from 'styled-components'

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

export default class App extends Component {
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
        return (
            <React.Fragment>
                <div className="logo-container">
                    <Logo className="spin"></Logo>
                </div>
                <div className="app-container" ref={this.appContainer} onTransitionEnd={() => { this.loginContainer.current.style.opacity = CONTENT_OPACITY_END } }>
                    <div className="login-container" ref={this.loginContainer}>
                        <Login></Login>
                    </div>
                </div>
                <div className="made-by"><Emoji text="Made with <3 using React/Redux"></Emoji></div>
            </React.Fragment>
        );
    }
}
