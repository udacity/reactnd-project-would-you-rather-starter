import React, { Fragment, useState, useEffect } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Button, Form, FormGroup, FormCheck, ProgressBar } from "react-bootstrap";

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (currentUser && currentQuestion) {
      setAnswer(getAnsweredOption(currentUser.id, currentQuestion.optionOne?.votes, currentQuestion.optionTwo?.votes));
    }

    // eslint-disable-next-line no-console
    console.log(currentQuestion);
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
    ).then(() => {
      dispatch(setSelectedQuestion(currentQuestion.id)).then(() => {
        setAnswer(currentValue);
      });
    });
  };
  // ./Handlers

  return (
    <Fragment>
      {!currentQuestion && "Loading..."}
      {currentQuestion && answer && (
        <Fragment>
          <h2>Result:</h2>
          <div className={`${currentQuestion.optionOne.votes.includes(currentUser.id) ? "bg-success" : ""}`}>
            Would you rather {currentQuestion.optionOne?.text}?
            <br />
            <ProgressBar
              now={currentQuestion.optionOne.votes.length * (100 / (currentQuestion.optionOne.votes.length + currentQuestion.optionTwo.votes.length))}
              label={`${currentQuestion.optionOne.votes.length * (100 / (currentQuestion.optionOne.votes.length + currentQuestion.optionTwo.votes.length))}%`}
            />
            <br />
            {currentQuestion.optionOne.votes.length} out of {currentQuestion.optionOne.votes.length + currentQuestion.optionTwo.votes.length} votes
          </div>
          <div className={`${currentQuestion.optionTwo.votes.includes(currentUser.id) ? "bg-success" : ""}`}>
            Would you rather {currentQuestion.optionTwo?.text}?
            <br />
            <ProgressBar
              now={currentQuestion.optionTwo.votes.length * (100 / (currentQuestion.optionOne.votes.length + currentQuestion.optionTwo.votes.length))}
              label={`${currentQuestion.optionTwo.votes.length * (100 / (currentQuestion.optionOne.votes.length + currentQuestion.optionTwo.votes.length))}%`}
            />
            <br />
            {currentQuestion.optionTwo.votes.length} out of {currentQuestion.optionOne.votes.length + currentQuestion.optionTwo.votes.length} votes
          </div>
        </Fragment>
      )}
      {currentQuestion && !answer && (
        <Fragment>
          <h2>Would you rather:</h2>
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
        </Fragment>
      )}
    </Fragment>
  );
};

export default connect(null, { setSelectedQuestion })(SingleQuestion);
