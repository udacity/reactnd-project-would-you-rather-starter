import React, { Fragment, useState, useEffect } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { Card, Button, Form, FormGroup, FormCheck, ProgressBar, Image } from "react-bootstrap";

// Utils
import { getAnsweredOption } from "../utils";
// ./Utils

// Settings
import { setSelectedQuestion, voteQuestion } from "../store/questions/actions";
// ./Settings

// Components
import Loader from "../components/Loader";
// ./Components

const SingleQuestion = () => {
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();

  const users = useSelector((state) => state.users?.data);
  const currentUser = useSelector((state) => state.users?.selected);
  const questions = useSelector((state) => state.questions?.data);
  const currentQuestion = useSelector((state) => state.questions?.selected);
  const [answer, setAnswer] = useState(null);
  const [currentValue, setCurrentValue] = useState(null);

  useEffect(() => {
    if (Object.keys(questions).length && questions[id] === undefined) {
      history.push("/error");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [questions]);

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
      {!currentQuestion && <Loader />}
      {currentQuestion && answer && (
        <Fragment>
          <Card>
            <Card.Header>
              <Card.Title className={"mb-0"}>
                <Image
                  src={users[currentQuestion.author]?.avatarURL}
                  width={"40"}
                  height={"40"}
                  roundedCircle
                  className={"border border-2 border-white me-2"}
                />
                Asked by {users[currentQuestion.author]?.name}:
              </Card.Title>
            </Card.Header>
            <Card.Body>
              <h2 className={"mb-4"}>Result:</h2>
              <div
                className={`border rounded p-4 mb-4 ${currentQuestion.optionOne.votes.includes(currentUser.id) ? "bg-primary border-primary text-white" : ""}`}
              >
                <h4 className={"mb-2"}>Would you rather {currentQuestion.optionOne?.text}?</h4>
                <ProgressBar
                  now={currentQuestion.optionOne.votes.length * (100 / (currentQuestion.optionOne.votes.length + currentQuestion.optionTwo.votes.length))}
                  label={`${
                    currentQuestion.optionOne.votes.length * (100 / (currentQuestion.optionOne.votes.length + currentQuestion.optionTwo.votes.length))
                  }%`}
                  variant={"warning"}
                  className={"mb-2"}
                />
                {currentQuestion.optionOne.votes.length} out of {currentQuestion.optionOne.votes.length + currentQuestion.optionTwo.votes.length} votes
              </div>
              <div className={`border rounded p-4 ${currentQuestion.optionTwo.votes.includes(currentUser.id) ? "bg-primary border-primary text-white" : ""}`}>
                <h4 className={"mb-2"}>Would you rather {currentQuestion.optionTwo?.text}?</h4>
                <ProgressBar
                  now={currentQuestion.optionTwo.votes.length * (100 / (currentQuestion.optionOne.votes.length + currentQuestion.optionTwo.votes.length))}
                  label={`${
                    currentQuestion.optionTwo.votes.length * (100 / (currentQuestion.optionOne.votes.length + currentQuestion.optionTwo.votes.length))
                  }%`}
                  variant={"warning"}
                  className={"mb-2"}
                />
                {currentQuestion.optionTwo.votes.length} out of {currentQuestion.optionOne.votes.length + currentQuestion.optionTwo.votes.length} votes
              </div>
            </Card.Body>
          </Card>
        </Fragment>
      )}
      {users && currentQuestion && !answer && (
        <Card>
          <Card.Header>
            <Card.Title className={"mb-0"}>
              <Image src={users[currentQuestion.author]?.avatarURL} width={"40"} height={"40"} roundedCircle className={"border border-2 border-white me-2"} />
              {users[currentQuestion.author]?.name} asks:
            </Card.Title>
          </Card.Header>
          <Card.Body>
            <h2 className={"mb-4"}>Would you rather:</h2>
            <Form>
              <FormGroup className={"mb-4"}>
                <FormCheck
                  onChange={(evt) => onSetCurrentValue(evt.target.value)}
                  checked={currentValue === "optionOne"}
                  name={"options"}
                  value={"optionOne"}
                  type={"radio"}
                  label={currentQuestion?.optionOne?.text || ""}
                />
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
          </Card.Body>
        </Card>
      )}
    </Fragment>
  );
};

export default connect(null, { setSelectedQuestion })(SingleQuestion);
