import React from "react";
import { useSelector } from "react-redux";
import User from "./User";

const Users = () => {
  const users = useSelector((state) => state.users.users);
  const usersId = Object.keys(users);

  // const questions = user

  return (
    <>
      {usersId
        .sort(
          (a, b) =>
            users[b].questions.length +
            Object.keys(users[b].answers).length -
            (users[a].questions.length + Object.keys(users[a].answers).length)
        )
        .map((userId) => (
          <User key={userId} userId={userId} users={users} />
        ))}
    </>
  );
};
export default Users;
