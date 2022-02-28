/* eslint-disable react/jsx-key */
import PropTypes from "prop-types";
import React, { Component } from "react";

import "./Form.css";

export class Form extends Component {
  static propTypes = {
    categories: PropTypes.array,
    handleSubmit: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      title: "",
      category: "Home",
      price: 0,
    };
  }

  categoryChange = (e) => {
    this.setState({ category: e.target.value });
  };

  titleChange = (e) => {
    this.setState({ title: e.target.value });
  };

  priceChange = (e) => {
    this.setState({ price: e.target.value });
  };

  render() {
    return (
      <>
        <div className="container">
          <form
            className="expenseform"
            onSubmit={(e) =>
              this.props.handleSubmit(
                e,
                this.state.title,
                this.state.category,
                this.state.price
              )
            }
          >
            <select
              className="expenseform__field"
              name="categories"
              id="categories"
              onChange={this.categoryChange}
              value={this.state.category}
            >
              {this.props.categories.map((item, index) => (
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
              onChange={this.titleChange}
            />
            <input
              className="expenseform__field"
              type="number"
              name="amount"
              id="amount"
              placeholder="Amount"
              required
              onChange={this.priceChange}
            />
            <button type="submit" className="btn">
              Add
            </button>
          </form>
        </div>
      </>
    );
  }
}

export default Form;
