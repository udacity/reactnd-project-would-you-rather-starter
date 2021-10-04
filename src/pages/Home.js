import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuestions } from "../actions/questions";
import Navbar from "../components/Navbar";
import Question from "../components/Question";

const Home = () => {
  const dispatch = useDispatch();
  const authedUser = useSelector((state) => state.authedUser.authedUser);
  const questions = useSelector((state) => state.questions.questions);
  const queIds = Object.keys(questions);
  useEffect(() => {
    dispatch(fetchQuestions());
  }, [dispatch]);
  return (
    <div>
      <Navbar />
      <h3>Unanswered</h3>

      <div>
        {queIds
          .filter(
            (queId) =>
              !questions[queId].optionOne.votes.includes(authedUser.id) &&
              !questions[queId].optionTwo.votes.includes(authedUser.id)
          )
          .map((queId) => (
            <Question key={queId} queId={queId} questions={questions} />
          ))}
      </div>
      <hr />
      <h3>Answered</h3>
      <div>
        {queIds
          .filter(
            (queId) =>
              questions[queId].optionOne.votes.includes(authedUser.id) ||
              questions[queId].optionTwo.votes.includes(authedUser.id)
          )
          .map((queId) => (
            <Question key={queId} queId={queId} questions={questions} />
          ))}
      </div>
    </div>
  );
};
export default Home;
