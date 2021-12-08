import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Card, Image } from "react-bootstrap";

// Components
import Loader from "../components/Loader";
// ./Components

const LeadersBoard = () => {
  const users = useSelector((state) => state.users?.data);

  // Helpers
  const getRankFromIndex = (i) => {
    switch (i) {
      case 0:
        return "success";
      case 1:
        return "info";
      case 2:
        return "warning";
      default:
        return false;
    }
  };
  // ./Helpers

  return (
    <Fragment>
      {!Object.keys(users).length && <Loader />}
      {Object.keys(users) &&
        Object.keys(users)
          .sort((a, b) => {
            const aI = (Object.keys(users[a].answers)?.length || 0) + (users[a].questions?.length || 0);
            const bI = (Object.keys(users[b].answers)?.length || 0) + (users[b].questions?.length || 0);

            return bI - aI;
          })
          .map((el, i) => (
            <Card key={users[el].id} bg={getRankFromIndex(i) || ""} text={getRankFromIndex(i) ? "white" : ""} className={"mb-4"}>
              <Card.Header>
                <Card.Title className={"mb-0"}>
                  <Image src={users[el].avatarURL} width={"40"} height={"40"} roundedCircle className={"border border-2 border-white me-2"} />
                  {users[el].name}
                </Card.Title>
              </Card.Header>
              <Card.Body>
                <div className={"fs-6 mb-2"}>
                  Answered questions: <strong>{Object.keys(users[el].answers)?.length || 0}</strong>
                </div>
                <div className={"fs-6"}>
                  Created questions: <strong>{users[el].questions?.length || 0}</strong>
                </div>
              </Card.Body>
              <Card.Footer>
                Score: <strong>{(Object.keys(users[el].answers)?.length || 0) + (users[el].questions?.length || 0)}</strong>
              </Card.Footer>
            </Card>
          ))}
    </Fragment>
  );
};

export default LeadersBoard;
