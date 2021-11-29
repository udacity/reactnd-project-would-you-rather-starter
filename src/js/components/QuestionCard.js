import React from "react";
import { connect, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";

// Settings
import { setSelectedQuestion } from "../store/questions/actions";
// ./Settings

const QuestionCard = (props) => {
  const { id, author, text } = props;
  const dispatch = useDispatch();
  const history = useHistory();

  // Handlers
  const onSelectQuestion = () => {
    dispatch(setSelectedQuestion(id));
    history.push(`questions/${id}`);
  };
  // ./Handlers

  return (
    <li>
      {author} asks:
      <br />
      Would you rather
      <br />
      {text}
      <br />
      <Button onClick={() => onSelectQuestion()}>View Poll</Button>
    </li>
  );
};

export default connect(null, {
  setSelectedQuestion,
})(QuestionCard);
