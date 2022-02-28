import React, { Component } from "react";
import CategoryForm from "./components/CategoryForm/CategoryForm";
import Form from "./components/Form/Form";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import TotalExpenses from "./components/TotalExpenses/TotalExpenses";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      categories: ["Home", "Food", "Travel"],
      categoryFormDisplay: false,
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

  displayCategoryForm = () => {
    this.setState({ categoryFormDisplay: !this.state.categoryFormDisplay });
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

  handleCategorySubmit = (e, title) => {
    e.preventDefault();
    this.setState({ categories: [...this.state.categories, title] });
    this.setState({ categoryFormDisplay: false });
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

  render() {
    return (
      <>
        <Navbar
          categories={this.state.categories}
          displayForm={this.displayForm}
          displayCategoryForm={this.displayCategoryForm}
          showFilteredItems={this.showFilteredItems}
          showAll={this.showAll}
        />
        {this.state.formDisplay && (
          <Form
            categories={this.state.categories}
            handleSubmit={this.handleSubmit}
          />
        )}
        {this.state.categoryFormDisplay && (
          <CategoryForm handleCategorySubmit={this.handleCategorySubmit} />
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
