/* eslint-disable react/jsx-key */
import PropTypes from "prop-types";
import React, { Component } from "react";

import "./Navbar.css";

export class Navbar extends Component {
  static propTypes = {
    categories: PropTypes.array,
    displayForm: PropTypes.func,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="container navbar">
        <div className="nav_list">
          {this.props.categories.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </div>
        <div className="btn" onClick={this.props.displayForm}>
          Add Expense
        </div>
      </nav>
    );
  }
}

export default Navbar;
