import React, { Component } from "react";
import Form from "./components/Form/Form";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      categories: ["Home", "Food", "Travel"],
      items: [],
      formDisplay: false,
    };
    console.log("Constructor");
  }

  // componentDidMount() {
  //   console.log("componentDidMount()");
  // }

  // componentDidUpdate() {
  //   console.log("componentDidUpdate");
  // }

  // componentWillUnmount() {
  //   console.log("componentWill Unmount");
  // }

  displayForm = () => {
    this.setState({ formDisplay: !this.state.formDisplay });
  };

  render() {
    return (
      <>
        <Navbar
          categories={this.state.categories}
          displayForm={this.displayForm}
        />
        {this.state.formDisplay && <Form categories={this.state.categories} />}
        <Main />
      </>
    );
  }
}

export default App;
