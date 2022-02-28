import React, { Component } from "react";
import Form from "./components/Form/Form";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import TotalExpenses from "./components/TotalExpenses/TotalExpenses";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      categories: ["Home", "Food", "Travel"],
      items: [],
      filteredItems: [],
      formDisplay: false,
      showAllItems: true,
      total: 0,
    };
  }

  // componentDidMount() {
  //   this.total();
  // }

  // componentDidUpdate() {
  //   this.total();
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
    this.setState({ total: this.state.total + parseInt(price) });
  };

  handleDelete = (id, price) => {
    const afterRemoveItems = this.state.items.filter((item) => item.id !== id);
    this.setState({ items: afterRemoveItems });
    this.setState({ total: this.state.total - parseInt(price) });
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

  // setTotal = () => {
  //   const totalPrice = this.state.items.reduce((acc, cur) => {
  //     return acc + parseInt(cur.price);
  //   }, 0);
  //   this.setState({ total: totalPrice });
  // };

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
        <TotalExpenses total={this.state.total} />
      </>
    );
  }
}

export default App;
