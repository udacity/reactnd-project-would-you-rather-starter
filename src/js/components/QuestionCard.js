import React from "react";
import { connect, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Card, Button, Image } from "react-bootstrap";

// Settings
import { setSelectedQuestion } from "../store/questions/actions";
// ./Settings

// Helpers
import { previewText } from "../utils";
// ./Helpers

const QuestionCard = (props) => {
  const { id, author, avatar, text } = props;
  const dispatch = useDispatch();
  const history = useHistory();

  // Handlers
  const onSelectQuestion = () => {
    dispatch(setSelectedQuestion(id));
    history.push(`questions/${id}`);
  };
  // ./Handlers

  return (
    <li className={"mb-4"}>
      <Card className={"mb-0"}>
        <Card.Header>
          <Card.Title className={"mb-0"}>
            <Image src={avatar} width={"40"} height={"40"} roundedCircle className={"border border-2 border-white me-2"} />
            {author} asks:
          </Card.Title>
        </Card.Header>
        <Card.Body>
          <Card.Title>Would You Rather</Card.Title>
          <Card.Text>{previewText(text)}</Card.Text>
          <Button onClick={() => onSelectQuestion()}>View Poll</Button>
        </Card.Body>
      </Card>
    </li>
  );
};

export default connect(null, {
  setSelectedQuestion,
})(QuestionCard);
