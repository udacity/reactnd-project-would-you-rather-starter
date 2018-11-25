import React, { Component } from 'react'
import {
    Navbar,
    Nav,
    Button,
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

class Navigation extends Component {
    render() {
        return (
            <div>
                <Navbar bg="light" variant="light">
                    <LinkContainer to="/">
                        <Navbar.Brand href="/">
                            <img
                                alt=""
                                src="https://image.flaticon.com/icons/svg/953/953818.svg"
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                            />
                            {" WyR"}
                        </Navbar.Brand>
                    </LinkContainer>
                    <Nav className="mr-auto">
                        <LinkContainer to="/">
                            <Nav.Link>Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/ask-a-question">
                            <Nav.Link>Ask a Question</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/leaderboard">
                            <Nav.Link>Leaderboard</Nav.Link>
                        </LinkContainer>
                    </Nav>
                    <Navbar.Collapse className="justify-content-end logged-in-username">
                        <Navbar.Text>Welcome back: Mark Otto</Navbar.Text>
                    </Navbar.Collapse>
                    <Nav>
                        <LinkContainer to="/login">
                            <Button variant="outline-primary">Login</Button>
                        </LinkContainer>
                    </Nav>
                </Navbar>
            </div>
        )
    }
}

export default Navigation;