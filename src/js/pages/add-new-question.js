import React, { useState } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { Form, FormGroup, FormLabel, FormControl, Button } from "react-bootstrap";

// Settings
import { addQuestion } from "../store/questions/actions";
// ./Settings

const AddNewQuestion = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.users?.selected);
  const [optionOne, setOptionOne] = useState("");
  const [optionTwo, setOptionTwo] = useState("");

  // Handlers
  const handleClearForm = () => {
    setOptionOne("");
    setOptionTwo("");
  };
  const handleSubmit = () => {
    dispatch(
      addQuestion({
        optionOne,
        optionTwo,
        author: currentUser.id,
      })
    ).then(() => {
      handleClearForm();
    });
  };
  // ./Handlers

  return (
    <Form>
      <FormGroup>
        <FormLabel>Option One</FormLabel>
        <FormControl type={"text"} value={optionOne} onChange={(evt) => setOptionOne(evt.target.value)} />
      </FormGroup>
      <FormGroup>
        <FormLabel>Option Two</FormLabel>
        <FormControl type={"text"} value={optionTwo} onChange={(evt) => setOptionTwo(evt.target.value)} />
      </FormGroup>
      <Button type={"button"} disabled={optionOne.length < 3 || optionTwo.length < 3} onClick={handleSubmit}>
        Add
      </Button>
    </Form>
  );
};

export default connect(null, { addQuestion })(AddNewQuestion);
