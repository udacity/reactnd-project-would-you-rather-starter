import React from "react";
import {
    Card,
    Container,
    Row,
    Col,
} from "react-bootstrap";

const Home = () => (
    <Container>
        <Row className="justify-content-md-center question-card">
            <Col md="auto">
                <Card bg="secondary" text="white">
                    <Card.Header>John Doe asks...</Card.Header>
                    <Card.Body>
                        <Container>
                            <Row style={{ marginBottom: 24 }}>
                                <Col sm={2}>
                                    <img
                                        src="https://image.flaticon.com/icons/svg/145/145843.svg"
                                        alt="User avatar"
                                        style={{ width: 100, height: 100 }}
                                    />
                                </Col>
                                <Col sm={10}>
                                    <Card.Title>Would you rather...</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make
                                        up the bulk of the card's content.
                                    </Card.Text>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <div className="answers-wrapper">
                                        <div className="choices first" tabIndex={0} role="button">
                                            Some quick example text to build on the card title Some
                                            quick example text to build on the card title Some quick
                                            example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </div>
                                        <div className="or">
                                            <span>or</span>
                                        </div>
                                        <div className="choices second" tabIndex={0} role="button">
                                            Some quick example text to build on the card title and
                                            make up the bulk of the card's content. Some quick example
                                            text to build on the card title and make up the bulk of
                                            the card's content. Some quick example text to build on
                                            the card title and make up the bulk of the card's content.
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
        <Row className="justify-content-md-center question-card">
            <Col md="auto">
                <Card bg="secondary" text="white">
                    <Card.Header>John Doe asks...</Card.Header>
                    <Card.Body>
                        <Container>
                            <Row style={{ marginBottom: 24 }}>
                                <Col sm={2}>
                                    <img
                                        src="https://image.flaticon.com/icons/svg/145/145843.svg"
                                        alt="User avatar"
                                        style={{ width: 100, height: 100 }}
                                    />
                                </Col>
                                <Col sm={10}>
                                    <Card.Title>Would you rather...</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make
                                        up the bulk of the card's content.
                                    </Card.Text>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <div className="answers-wrapper">
                                        <div className="choices first" tabIndex={0} role="button">
                                            Some quick example text to build on the card title Some
                                            quick example text to build on the card title Some quick
                                            example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </div>
                                        <div className="or">
                                            <span>or</span>
                                        </div>
                                        <div className="choices second" tabIndex={0} role="button">
                                            Some quick example text to build on the card title and
                                            make up the bulk of the card's content. Some quick example
                                            text to build on the card title and make up the bulk of
                                            the card's content. Some quick example text to build on
                                            the card title and make up the bulk of the card's content.
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
);

export default Home;