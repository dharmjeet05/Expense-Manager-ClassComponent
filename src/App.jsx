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
      filteredItems: [],
      formDisplay: false,
      showAllItems: true,
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

  handleDelete = (id) => {
    const afterRemoveItems = this.state.items.filter((item) => item.id !== id);
    this.setState({ items: afterRemoveItems });
  };

  showAll = () => {
    this.setState({ showAllItems: true });
  };

  showFilteredItems = (category) => {
    const filtered = this.state.items.filter(
      (item) => item.category === category
    );
    this.setState({ filteredItems: filtered });
    this.setState({ showAllItems: false });
  };

  render() {
    return (
      <>
        <Navbar
          categories={this.state.categories}
          displayForm={this.displayForm}
          showFilteredItems={this.showFilteredItems}
          showAll={this.showAll}
        />
        {this.state.formDisplay && (
          <Form
            categories={this.state.categories}
            handleSubmit={this.handleSubmit}
          />
        )}
        <Main
          items={this.state.items}
          filteredItems={this.state.filteredItems}
          handleDelete={this.handleDelete}
          showAllItems={this.state.showAllItems}
        />
      </>
    );
  }
}

export default App;
