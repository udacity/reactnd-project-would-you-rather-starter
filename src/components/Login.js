import React, { Component } from 'react'
import  { getUsers } from '../actions/api'
import { connect } from 'react-redux'

class Login extends Component {
    componentDidMount() {
        this.props.dispatch(getUsers())
    }
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default connect()(Login)
