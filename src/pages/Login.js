import React, { Component } from 'react'
import {
    Card,
    DropdownButton,
    Dropdown,
} from "react-bootstrap";
import logo from "../assets/logo.svg";

export default class Login extends Component {
    render() {
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
                        <Dropdown.Item eventKey="1">User A</Dropdown.Item>
                        <Dropdown.Item eventKey="2">User B</Dropdown.Item>
                        <Dropdown.Item eventKey="3">User C</Dropdown.Item>
                    </DropdownButton>
                </Card.Body>
            </Card>
        )
    }
}
