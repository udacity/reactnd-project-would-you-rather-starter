import React from "react";
import styled from "styled-components";
const UserWrapper = styled.div`
  width: 550px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #fff;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.25);
  border-radius: 3px;
  margin-bottom: 2rem;

  img {
    width: 70px;
    height: 70px;
    display: block;
    border-radius: 50%;
  }
`;
const User = ({ users, userId }) => {
  const name = users[userId].name;

  return (
    <UserWrapper>
      <img src={users[userId].avatarURL} alt={users[userId]} />
      <p className="name">{name}</p>
      <div className="stats">
        <p>
          Number of questions answered:
          <strong>{Object.keys(users[userId].answers).length}</strong>
        </p>
        <p>
          Number of questions asked:
          <strong>{users[userId].questions.length}</strong>
        </p>
      </div>
    </UserWrapper>
  );
};
export default User;
