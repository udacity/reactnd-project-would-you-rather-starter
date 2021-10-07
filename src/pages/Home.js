import React from "react";
// import { useSelector } from "react-redux";
// import { Redirect } from "react-router";
import Navbar from "../components/Navbar";
import Questions from "../components/QuestionList";

const Home = () => {
  // const authedUser = useSelector((state) => state.authedUser.authedUser);

  // if (authedUser === null) <Redirect to="signin" />;
  return (
    <div>
      <Navbar />
      <Questions />
    </div>
  );
};
export default Home;
