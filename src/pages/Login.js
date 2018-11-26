import React, { Component } from 'react'
import {
    Card,
    DropdownButton,
    Dropdown,
} from "react-bootstrap";
import { connect } from 'react-redux'

import logo from "../assets/logo.svg";

class Login extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        console.log(this.props.users);
        return (
            <Card bg="secondary" text="white" className="login-card">
                <Card.Header>Please sign in to continue</Card.Header>
                <Card.Body>
                    <Card.Text>Select a user from the dropdown</Card.Text>
                    <img src={logo} alt="Logo" />
                    <DropdownButton
                        drop={"down"}
                        variant="primary"
                        title={` Login `}
                        id={`dropdown-button-drop`}
                        className="login-button"
                    >
                        <Dropdown.Item eventKey="1">
                            <img src="https://image.flaticon.com/icons/svg/145/145847.svg" alt="Sarah Edo" style={{ width: 24, height: 24, marginRight: 4 }} />
                            Sarah Edo
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="2">User B</Dropdown.Item>
                        <Dropdown.Item eventKey="3">User C</Dropdown.Item>
                    </DropdownButton>
                </Card.Body>
            </Card>
        )
    }
}

Login.propTypes = {
    // from MapStateToProps
    // userDetails: PropTypes.arrayOf(PropTypes.object).isRequired,
};


function mapStateToProps(state) {
    const userDetails = state.users.then(users => {
        Object.keys(users).map(user => {
            console.log(users[user]);
            return {
                id: users[user].id,
                name: users[user].name,
                avatarURL: users[user].avatarURL,
            }
        })
    });

    return {
        users: userDetails
    }
}

export default connect(mapStateToProps)(Login);