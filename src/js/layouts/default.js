import React from "react";
import { connect, useDispatch } from "react-redux";
import { Route, useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";

// Settings
import { deleteSelectedUser } from "../store/users/actions";

// ./Settings

function DefaultRoute(props) {
  const { children, ...rest } = props;
  const dispatch = useDispatch();
  const history = useHistory();

  // Handlers
  const handleLogOut = () => {
    dispatch(deleteSelectedUser());
    history.push("/sign-in");
  };
  // ./Handlers

  return (
    <Route {...rest}>
      <div>
        <Button type={"button"} onClick={handleLogOut}>
          Sign Out
        </Button>
      </div>
      {children}
    </Route>
  );
}

export default connect(null, {
  deleteSelectedUser,
})(DefaultRoute);
