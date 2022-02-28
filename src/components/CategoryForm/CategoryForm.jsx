/* eslint-disable react/jsx-key */
import PropTypes from "prop-types";
import React, { Component } from "react";

import "./CategoryForm.css";

export class CategoryForm extends Component {
  static propTypes = {
    handleCategorySubmit: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.state = {
      title: "",
    };
  }

  titleChange = (e) => {
    this.setState({ title: e.target.value });
  };

  render() {
    return (
      <>
        <div className="container">
          <form
            className="categoryform"
            onSubmit={(e) =>
              this.props.handleCategorySubmit(e, this.state.title)
            }
          >
            <input
              className="categoryform__field"
              type="text"
              name="title"
              id="title"
              placeholder="Title"
              required
              onChange={this.titleChange}
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

export default CategoryForm;
