import React, { Component } from "react";
import { Container } from "react-bootstrap";
import PageTitle from "../components/PageTitle";

class Leaderboard extends Component {
  render() {
    return (
      <Container style={{ marginTop: 24 }}>
        <PageTitle>Leaderboard</PageTitle>
        <div style={{ color: "white" }}>
          The more questions you ask and answer, the higher you'll move up in
          the ranks.
        </div>
      </Container>
    );
  }
}

export default Leaderboard;
