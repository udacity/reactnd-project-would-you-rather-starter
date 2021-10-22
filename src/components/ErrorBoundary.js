import React from "react";
import styled from "styled-components";
import InvalidResource from "../assets/invalid-resource.png";

const NoResource = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    height: 80%;
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${InvalidResource});
    background-repeat: no-repeat;
  }
`;

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: { message: "", stack: "" },
      info: { componentStack: "" },
    };
  }

  static getDerivedStateFromError = (error) => {
    return { hasError: true };
  };

  componentDidCatch = (error, info) => {
    this.setState({ error, info });
  };
  render() {
    if (this.state.hasError)
      return (
        <NoResource>
          <div>
            <h1>No Resource Found</h1>
          </div>
        </NoResource>
      );

    return this.props.children;
  }
}
export default ErrorBoundary;
