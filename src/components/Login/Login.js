import React, { Component } from 'react'
import  { getUsers } from '../../actions/api'
import './login.css'
import img from '../../logo.svg'
import { connect } from 'react-redux'
import styled from 'styled-components'
import Select from '@material-ui/core/Select';


const Logo = styled.div`
    width: 100px;
    height: 70px;
    background-image: url(${props => props.logoUrl || img });
    background-size:  cover;
    background-repeat: no-repeat;
`

class Login extends Component {
    componentDidMount() {
        this.props.dispatch(getUsers())
    }
    render() {
        return (
            <div className="login-container">
                <div className="login-header">
                    <span className="login-header-title">Would You Rather?</span>
                    <Logo className="spin"></Logo>
                </div>
                <div className="login-content">
                    <form className="form-container">
                       <Select
                            labelId="user-select"
                            id="user-select"
                            value={null}
                            onChange={() => {}}
                         />
                    </form>
                </div>
            </div>
        );
    }
}

export default connect()(Login)
