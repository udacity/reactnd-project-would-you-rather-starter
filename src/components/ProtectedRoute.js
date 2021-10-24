import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, useHistory, useLocation, withRouter } from "react-router";
import { logOut } from "../actions/authedUser";
function ProtectedRoute({ component: Component, ...restofProps }) {
  const authedUser = useSelector((state) => state.authedUser.authedUser);
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();

  // const [fromAddressBar, setFromAdressBar] = useState(false);
  useEffect(() => {
    console.log(history);
    if (history.action === "POP") {
      dispatch(logOut());
    }
  }, [history, dispatch]);

  return (
    <Route
      {...restofProps}
      render={(props) =>
        authedUser ? (
          <Component {...props} />
        ) : (
          history.replace(`/signin?next=${location.pathname}`)
        )
      }
    />
  );
}
export default withRouter(ProtectedRoute);
