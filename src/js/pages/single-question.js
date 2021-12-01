import React, { Fragment, useState, useEffect } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Button, Form, FormGroup, FormCheck } from "react-bootstrap";

// Utils
import { getAnsweredOption } from "../utils";
// ./Utils

// Settings
import { setSelectedQuestion, voteQuestion } from "../store/questions/actions";
// ./Settings

const SingleQuestion = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const currentUser = useSelector((state) => state.users?.selected);
  const currentQuestion = useSelector((state) => state.questions?.selected);
  const [answer, setAnswer] = useState(null);
  const [currentValue, setCurrentValue] = useState(null);

  useEffect(() => {
    dispatch(setSelectedQuestion(id));

    return () => {
      dispatch(setSelectedQuestion(null));
    };
  }, []);

  useEffect(() => {
    if (currentUser && currentQuestion) {
      setAnswer(getAnsweredOption(currentUser.id, currentQuestion.optionOne?.votes, currentQuestion.optionTwo?.votes));
    }
  }, [currentQuestion, currentUser]);

  // Handlers
  const onSetCurrentValue = (val) => {
    setCurrentValue(val);
  };
  const handleSubmit = () => {
    dispatch(
      voteQuestion({
        userId: currentUser.id,
        questionId: currentQuestion.id,
        answer: currentValue,
      })
    );

    setAnswer(currentValue);
  };
  // ./Handlers

  return (
    <Fragment>
      <h2>Would you rather...</h2>
      {!currentQuestion && "Loading..."}
      {currentQuestion && answer && <span>Answered!</span>}
      {currentQuestion && !answer && (
        <Form>
          <FormGroup>
            <FormCheck
              onChange={(evt) => onSetCurrentValue(evt.target.value)}
              checked={currentValue === "optionOne"}
              name={"options"}
              value={"optionOne"}
              type={"radio"}
              label={currentQuestion?.optionOne?.text || ""}
            />
          </FormGroup>
          <FormGroup>
            <FormCheck
              onChange={(evt) => onSetCurrentValue(evt.target.value)}
              checked={currentValue === "optionTwo"}
              name={"options"}
              value={"optionTwo"}
              type={"radio"}
              label={currentQuestion?.optionTwo?.text || ""}
            />
          </FormGroup>
          <Button type={"button"} disabled={!currentValue} onClick={handleSubmit}>
            Submit
          </Button>
        </Form>
      )}
    </Fragment>
  );
};

export default connect(null, { setSelectedQuestion })(SingleQuestion);
