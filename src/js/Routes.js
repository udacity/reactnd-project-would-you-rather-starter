import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

// Settings
import { fetchUsers, setSelectedUser } from "./store/users/actions";
import { fetchQuestions } from "./store/questions/actions";
// ./Settings

// Pages
import SignIn from "./pages/sign-in";
import Questions from "./pages/questions";
import SingleQuestion from "./pages/single-question";
import AddNewQuestion from "./pages/add-new-question";

// ./Pages

function Routes() {
  const dispatch = useDispatch();

  // Handlers
  const isLoggedIn = () => !!localStorage.getItem("udacity-would-you-rather--current-user");
  // ./Handlers

  useEffect(() => {
    if (isLoggedIn()) {
      dispatch(fetchUsers());
      dispatch(setSelectedUser(JSON.parse(localStorage.getItem("udacity-would-you-rather--current-user")).id));
      dispatch(fetchQuestions());
    }
  }, []);

  return (
    <Router>
      <Route path={"/"} exact>
        {isLoggedIn ? <Redirect to="/questions" /> : <Redirect to="/sign-in" />}
      </Route>
      <Route path={"/sign-in"} exact>
        <SignIn />
      </Route>
      <Route path={"/questions"} exact>
        <Questions />
      </Route>
      <Route path={"/questions/:id"} exact>
        <SingleQuestion />
      </Route>
      <Route path={"/add-new-question"} exact>
        <AddNewQuestion />
      </Route>
    </Router>
  );
}

export default connect(null, {
  fetchUsers,
  setSelectedUser,
  fetchQuestions,
})(Routes);
