import React, { Fragment, useEffect, useState } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { FormGroup, Button } from "react-bootstrap";
import Select from "react-select";

// Settings
import { fetchUsers, setSelectedUser, deleteSelectedUser } from "../store/users/actions";
import { fetchQuestions } from "../store/questions/actions";
// ./Settings

// Components
import Loader from "../components/Loader";
// ./Components

const SignIn = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [redirectToReferrer, setRedirectToReferrer] = useState(false);
  const [from, setFrom] = useState("");

  const isLoaded = useSelector((state) => state.users?.loading);
  const users = useSelector((state) => state.users?.data);
  const currentUser = useSelector((state) => state.users?.selected);

  // Helpers
  function arrayFromObject(arr) {
    const result = [];

    Object.entries(arr).map((el) => {
      const [, val] = el;

      result.push(val);

      return true;
    });

    return result;
  }

  // ./Helpers

  useEffect(() => {
    dispatch(fetchUsers());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Handlers
  const onUserSelect = (id) => {
    dispatch(deleteSelectedUser());
    dispatch(setSelectedUser(id));
  };
  const onLogIn = () => {
    setRedirectToReferrer(true);
    setFrom(history?.location?.state?.from === "/sign-in" ? "/" : history?.location?.state?.from || "/");

    dispatch(fetchQuestions());
  };
  // ./Handlers

  if (redirectToReferrer === true) {
    return <Redirect to={from} />;
  }

  return (
    <Fragment>
      {isLoaded && <Loader />}
      {!isLoaded && (
        <Fragment>
          <FormGroup className={"mb-4"}>
            <Select
              placeholder={"Select User"}
              options={arrayFromObject(users)}
              getOptionValue={(option) => `${option.id}`}
              getOptionLabel={(option) => `${option.name}`}
              onChange={(evt) => onUserSelect(evt.id)}
            />
          </FormGroup>
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
  fetchQuestions,
})(SignIn);
