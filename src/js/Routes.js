import React, { useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { Router, Switch, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";

// Settings
import { fetchUsers, setSelectedUser } from "./store/users/actions";
import { fetchQuestions } from "./store/questions/actions";
// ./Settings

// Layouts
import DefaultRoute from "./layouts/default";
import AuthRoute from "./layouts/auth";
import ErrorRoute from "./layouts/error";
// ./Layouts

// Pages
import SignIn from "./pages/sign-in";
import Questions from "./pages/questions";
import SingleQuestion from "./pages/single-question";
import AddNewQuestion from "./pages/add-new-question";
import LeadersBoard from "./pages/leaders-board";
import Error from "./pages/error";

// ./Pages

const history = createBrowserHistory();

function Routes() {
  const dispatch = useDispatch();
  const selectedUser = useSelector((state) => state.users?.selected);

  useEffect(() => {
    if (selectedUser) {
      dispatch(fetchUsers());
      dispatch(fetchQuestions());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Router history={history}>
      {!selectedUser && (
        <Redirect
          to={{
            pathname: "/sign-in",
            state: { from: history.location.pathname },
          }}
        />
      )}
      <Switch>
        <AuthRoute path={"/sign-in"} exact>
          <SignIn />
        </AuthRoute>
        <DefaultRoute path={"/"} exact>
          <Questions />
        </DefaultRoute>
        <DefaultRoute path={"/questions/:id"} exact>
          <SingleQuestion />
        </DefaultRoute>
        <DefaultRoute path={"/add"} exact>
          <AddNewQuestion />
        </DefaultRoute>
        <DefaultRoute path={"/leaderboard"} exact>
          <LeadersBoard />
        </DefaultRoute>
        <ErrorRoute path={"/error"} exact>
          <Error />
        </ErrorRoute>
        <ErrorRoute>
          <Error />
        </ErrorRoute>
      </Switch>
    </Router>
  );
}

export default connect(null, {
  fetchUsers,
  setSelectedUser,
  fetchQuestions,
})(Routes);
