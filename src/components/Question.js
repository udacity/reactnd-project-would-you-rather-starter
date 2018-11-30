import React from "react";
import { Card, Container, Row, Col, Image } from "react-bootstrap";

class Question extends React.Component {
  render() {
    const { question } = this.props;

    return (
      <Row className="question-card">
        <Col>
          <Card bg="secondary" text="white">
            <Card.Body>
              <Container>
                <Row style={{ marginBottom: 24 }}>
                  <Col sm={2}>
                    <Image
                      src={question.authorAvatarURL}
                      alt={`${question.author} avatar`}
                      style={{ width: 50, height: 50 }}
                      roundedCircle
                    />
                  </Col>
                  <Col sm={10} style={{marginTop: 8}}>
                    <h4>Would you rather...</h4>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div className="answers-wrapper">
                      <div className="choices first" tabIndex={0} role="button">
                        {question.optionOne.text}
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
            <Card.Footer>Submitted by {question.author}</Card.Footer>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default Question;
