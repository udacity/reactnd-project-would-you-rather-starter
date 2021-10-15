import React from "react";
import Users from "../components/LeaderboardList";
import Navbar from "../components/Navbar";
import styled from "styled-components";

const LeaderboardWrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0;
`;

function Leaderboard() {
  return (
    <>
      <Navbar />
      <LeaderboardWrapper>
        <h2>Leaderboard</h2>
        <Users />
      </LeaderboardWrapper>
    </>
  );
}

export default Leaderboard;
