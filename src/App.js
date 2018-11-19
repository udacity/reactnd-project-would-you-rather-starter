import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Tabs from "react-bulma-components/lib/components/tabs";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Tabs type={"boxed"} align={"default"}>
          <Tabs.Tab active>Test</Tabs.Tab>
          <Tabs.Tab>Test</Tabs.Tab>
          <Tabs.Tab>Test</Tabs.Tab>
          <Tabs.Tab>Test</Tabs.Tab>
        </Tabs>
      </div>
    );
  }
}

export default App;
