import React from "react";
import Navbar from "../components/Navbar";
import NewPollForm from "../components/NewPollForm";

function NewPoll() {
  return (
    <>
      <Navbar />
      <h2>Create New Poll</h2>
      <NewPollForm />
    </>
  );
}

export default NewPoll;
