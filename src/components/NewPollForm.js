import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import styled from "styled-components";
import { postQuestion } from "../actions/questions";

const NewPollWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 450px;
    height: 500px;
    box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.25);

    * {
      width: 70%;
      padding: 15px 0;
      margin-bottom: 20px;
    }
    h2 {
      padding: 0;
    }
    span {
      padding: 0;
    }
    button {
      cursor: pointer;
      width: 100%;
      border: 0;
      border-radius: 3px;
      background-color: #249cff;
      font-weight: bold;
      color: #fff;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    }
    button:hover {
      transform: translateY(-1px);
    }
  }
`;

const NewPollForm = () => {
  const authedUser = useSelector((state) => state.authedUser.authedUser);
  const author = authedUser.id;
  const dispatch = useDispatch();
  const [optionOneText, setOptionOneText] = useState("");
  const [optionTwoText, setOptionTwoText] = useState("");
  const history = useHistory();

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
    history.push("/");
    setOptionOneText("");
    setOptionTwoText("");
  }
  return (
    <NewPollWrapper>
      <form onSubmit={uploadQuestion}>
        <h2>Would you rather...?</h2>
        <input
          type="text"
          onChange={handleInputOptionOne}
          value={optionOneText}
          placeholder="Option 1"
          required
        />
        <span>OR</span>
        <input
          type="text"
          onChange={handleInputOptionTwo}
          value={optionTwoText}
          placeholder="Option 2"
          required
        />
        <div>
          <button>Post Question</button>
        </div>
      </form>
    </NewPollWrapper>
  );
};
export default NewPollForm;
