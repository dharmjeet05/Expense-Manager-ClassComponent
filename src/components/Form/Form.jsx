/* eslint-disable react/jsx-key */
import PropTypes from "prop-types";
import React, { Component } from "react";

import "./Form.css";

export class Form extends Component {
  static propTypes = {
    categories: PropTypes.array,
  };

  constructor(props) {
    super(props);
    this.state = {
      categories: props.categories,
    };
  }

  render() {
    return (
      <>
        <div className="container">
          <form className="expenseform">
            <select
              className="expenseform__field"
              name="categories"
              id="categories"
            >
              {this.state.categories.map((item, index) => (
                <option key={index} value={item} required>
                  {item}
                </option>
              ))}
            </select>
            <input
              className="expenseform__field"
              type="text"
              name="title"
              id="title"
              placeholder="Title"
              required
            />
            <input
              className="expenseform__field"
              type="number"
              name="amount"
              id="amount"
              placeholder="Amount"
              required
            />
            <button className="btn">Add</button>
          </form>
        </div>
      </>
    );
  }
}

export default Form;
