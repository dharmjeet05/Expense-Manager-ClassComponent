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

  // componentDidUpdate() {
  //   console.log("componentDidUpdate");
  // }

  // componentWillUnmount() {
  //   console.log("componentWill Unmount");
  // }

  displayForm = () => {
    this.setState({ formDisplay: !this.state.formDisplay });
  };

  handleSubmit = (e, title, category, price) => {
    e.preventDefault();
    const singleItem = {
      id: new Date().getTime().toString(),
      title: title,
      category: category,
      price: price,
    };
    this.setState({ items: [...this.state.items, singleItem] });
    // const newItems = this.state.items.slice();
    // newItems.push(singleItem);
    // this.setState({ items: newItems });
    this.setState({ formDisplay: false });
  };

  render() {
    return (
      <>
        <Navbar
          categories={this.state.categories}
          displayForm={this.displayForm}
        />
        {this.state.formDisplay && (
          <Form
            categories={this.state.categories}
            handleSubmit={this.handleSubmit}
          />
        )}
        <Main items={this.state.items} />
        <>{JSON.stringify(this.state)}</>
      </>
    );
  }
}

export default App;
