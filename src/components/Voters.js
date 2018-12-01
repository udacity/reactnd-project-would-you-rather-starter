import React from "react";
import { ListGroup, Image } from "react-bootstrap";

export default function Voters({ votes }) {
  return (
    <ListGroup variant="flush">
      {votes.length !== 0 ? (
        votes.map(voter => (
          <ListGroup.Item>
            <Image
              src={voter.avatarURL}
              alt={`${voter.name} avatar`}
              style={{ width: 32, height: 32, marginRight: 8 }}
              roundedCircle
            />
            {voter.name}
          </ListGroup.Item>
        ))
      ) : (
        <ListGroup.Item>No votes</ListGroup.Item>
      )}
    </ListGroup>
  );
}
