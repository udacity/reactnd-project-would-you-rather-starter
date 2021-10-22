import React from "react";
import { useSelector } from "react-redux";
import { Route, useHistory, useLocation, withRouter } from "react-router";

function ProtectedRoute({ component: Component, ...restofProps }) {
  const authedUser = useSelector((state) => state.authedUser.authedUser);
  const history = useHistory();
  const location = useLocation();

  return (
    <Route
      {...restofProps}
      render={(props) =>
        authedUser !== null ? (
          <Component {...props} />
        ) : (
          history.replace(`/signin?next=${location.pathname}`)
        )
      }
    />
  );
}
export default withRouter(ProtectedRoute);
