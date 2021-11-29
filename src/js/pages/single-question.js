import React, { Fragment, useState, useEffect } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Button, FormGroup, FormCheck } from "react-bootstrap";

// Settings
import { setSelectedQuestion } from "../store/questions/actions";
// ./Settings

const SingleQuestion = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const currentQuestion = useSelector((state) => state.questions?.selected);
  const [currentValue, setCurrentValue] = useState("optionOne");

  useEffect(() => {
    dispatch(setSelectedQuestion(id));
  }, []);

  // eslint-disable-next-line no-console
  console.log(currentQuestion);

  // Handlers
  const onSetCurrentValue = (val) => {
    setCurrentValue(val);
  };
  // ./Handlers

  return (
    <Fragment>
      <h2>Would you rather...</h2>
      {!currentQuestion && "Loading..."}
      {currentQuestion && (
        <Fragment>
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
          <Button>Submit</Button>
        </Fragment>
      )}
    </Fragment>
  );
};

export default connect(null, { setSelectedQuestion })(SingleQuestion);
