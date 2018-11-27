import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";

class Home extends React.Component {
  render() {
    return (
      <Container>
        {this.props.questions.length !== 0 &&
          this.props.questions.map(question => (
            <Row className="justify-content-md-center question-card">
              <Col md="auto">
                <Card bg="secondary" text="white">
                  <Card.Header>{question.author} asks...</Card.Header>
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
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <div className="answers-wrapper">
                            <div
                              className="choices first"
                              tabIndex={0}
                              role="button"
                            >
                              {question.optionOne.text}
                            </div>
                            <div className="or">
                              <span>or</span>
                            </div>
                            <div
                              className="choices second"
                              tabIndex={0}
                              role="button"
                            >
                              {question.optionTwo.text}
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </Container>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          ))}
      </Container>
    );
  }
}

function mapStateToProps(state) {
  const questionData = Object.keys(state.questions).map(question => ({
    id: state.questions[question].id,
    author: state.questions[question].author,
    optionOne: state.questions[question].optionOne,
    optionTwo: state.questions[question].optionTwo,
  }));
  return {
    questions: questionData,
  };
}

export default connect(mapStateToProps)(Home);
