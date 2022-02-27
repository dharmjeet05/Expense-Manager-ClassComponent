import React, { Component } from "react";

export class App extends Component {
  constructor() {
    super();
    console.log("Constructor");
  }

  componentDidMount() {
    console.log("componentDidMount()");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWill Unmount");
  }

  render() {
    return <div>App</div>;
  }
}

export default App;
