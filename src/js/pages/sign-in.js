import React, { Fragment, useEffect } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

// Settings
import { fetchUsers, setSelectedUser, deleteSelectedUser } from "../store/users/actions";
// ./Settings

const SignIn = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const isLoaded = useSelector((state) => state.users?.loading);
  const users = useSelector((state) => state.users?.data);
  const currentUser = useSelector((state) => state.users?.selected);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  // Handlers
  const onUserSelect = (id) => {
    dispatch(deleteSelectedUser());
    dispatch(setSelectedUser(id));
  };
  const onLogIn = () => {
    history.push("/questions");
  };
  // ./Handlers

  return (
    <Fragment>
      {isLoaded && "Loading..."}
      {!isLoaded && (
        <Fragment>
          <Form.Select onChange={(evt) => onUserSelect(evt.target.value)}>
            <option>Select user</option>
            {Object.entries(users).map((el) => {
              const [, val] = el;

              return (
                <option key={val.id} value={val.id}>
                  {val.name}
                </option>
              );
            })}
          </Form.Select>
          <Button type={"button"} variant={"primary"} size={"lg"} disabled={!currentUser} onClick={() => onLogIn()}>
            Sign In
          </Button>
        </Fragment>
      )}
    </Fragment>
  );
};

export default connect(null, {
  fetchUsers,
  setSelectedUser,
  deleteSelectedUser,
})(SignIn);
