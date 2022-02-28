/* eslint-disable react/jsx-key */
import PropTypes from "prop-types";
import React, { Component } from "react";

import "./Navbar.css";

export class Navbar extends Component {
  static propTypes = {
    categories: PropTypes.array,
    displayForm: PropTypes.func,
    displayCategoryForm: PropTypes.func,
    showFilteredItems: PropTypes.func,
    showAll: PropTypes.func,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="container navbar">
        <div className="nav_list">
          <li onClick={this.props.showAll}>All</li>
          {this.props.categories.map((item, index) => (
            <li key={index} onClick={() => this.props.showFilteredItems(item)}>
              {item}
            </li>
          ))}
        </div>
        <div className="nav__right">
          <div className="btn" onClick={this.props.displayCategoryForm}>
            Add Category
          </div>
          <div className="btn" onClick={this.props.displayForm}>
            Add Expense
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
