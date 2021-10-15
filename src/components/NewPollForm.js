import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { postQuestion } from "../actions/questions";

const NewPollWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const NewPollForm = () => {
  const authedUser = useSelector((state) => state.authedUser.authedUser);
  const author = authedUser.id;
  const dispatch = useDispatch();
  const [optionOneText, setOptionOneText] = useState("");
  const [optionTwoText, setOptionTwoText] = useState("");

  function handleInputOptionOne(e) {
    e.preventDefault();
    setOptionOneText(e.target.value);
  }
  function handleInputOptionTwo(e) {
    e.preventDefault();
    setOptionTwoText(e.target.value);
  }
  function uploadQuestion(e) {
    e.preventDefault();

    dispatch(
      postQuestion({
        author,
        optionOneText,
        optionTwoText,
      })
    );
    setOptionOneText("");
    setOptionTwoText("");
  }
  return (
    <NewPollWrapper>
      <form onSubmit={uploadQuestion}>
        <h3>Would you rather...?</h3>
        <input
          type="text"
          onChange={handleInputOptionOne}
          value={optionOneText}
          placeholder="Option 1"
          required
        />
        <p>OR</p>
        <input
          type="text"
          onChange={handleInputOptionTwo}
          value={optionTwoText}
          placeholder="Option 2"
          required
        />
        <button>Post Question</button>
      </form>
    </NewPollWrapper>
  );
};
export default NewPollForm;
