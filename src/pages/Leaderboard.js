import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Table, Card, Image } from "react-bootstrap";
import PageTitle from "../components/PageTitle";

class Leaderboard extends Component {
  render() {
    const { users } = this.props;
    // add up score
    Object.keys(users).map(user => {
      users[user].score = users[user].questions.length + Object.keys(users[user].answers).length;
    })
    // sort according to descending score
    users.sort((obj1, obj2) => {
      return obj2.score - obj1.score;
    })

    return (
      <Container style={{ marginTop: 24 }}>
        <PageTitle>Leaderboard</PageTitle>
        <div className="is-center" style={{ marginBottom: 24 }}>
          The more questions you ask and answer, the higher you'll move up in
          the ranks.
        </div>
        <Card>
          <Table responsive>
            <thead>
              <tr>
                <th colSpan={3}>User</th>
                <th colSpan={1}>Questions Added</th>
                <th colSpan={1}>Questions Answered</th>
                <th colSpan={1}>Score</th>
                <th colSpan={1}>Rank</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user.id}>
                  <td colSpan={3}>
                    <Image
                      src={user.avatarURL}
                      alt={`${user.name} avatar`}
                      style={{ width: 32, height: 32, marginRight: 8 }}
                      roundedCircle
                    />
                    {user.name}
                  </td>
                  <td colSpan={1}>{user.questions.length}</td>
                  <td colSpan={1}>{Object.keys(user.answers).length}</td>
                  <td colSpan={1}>{user.score}</td>
                  <td colSpan={1}>{index + 1}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card>
      </Container>
    );
  }
}

const mapStateToProps = ({ users }) => ({
  users: Object.keys(users).map(user => users[user]),
});

export default connect(mapStateToProps)(Leaderboard);
