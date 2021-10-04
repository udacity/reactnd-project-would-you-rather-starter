import React from "react";
import styled from "styled-components";

const QuestionWrapper = styled.div`
  width: 50%;
  height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  overflow: hidden;
  border: none;
  border-radius: 3px;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.3);

  .options {
    width: 100%;
    height: 120px;
    display: flex;
  }

  .option {
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
  }
  .option--one {
    background-color: #249cff;
  }
  .option--two {
    background-color: #ff0000;
    color: #fff;
  }
`;

const Question = ({ queId, questions }) => {
  return (
    <QuestionWrapper>
      <h3>Would you rather...?</h3>
      <b>OR</b>
      <div className="options">
        <p className="option option--one">{questions[queId].optionOne.text}</p>
        <p className="option option--two">{questions[queId].optionTwo.text}</p>
      </div>
    </QuestionWrapper>
  );
};
export default Question;
