/* eslint-disable react/jsx-key */
import PropTypes from "prop-types";
import React, { Component } from "react";

import { AiFillCloseCircle } from "react-icons/ai";

import "./Main.css";

export class Main extends Component {
  static propTypes = {
    items: PropTypes.array,
    filteredItems: PropTypes.array,
    handleDelete: PropTypes.func,
    showAllItems: PropTypes.bool,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <div className="main">
          {this.props.items.length == 0 ? (
            <div
              className="container"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <h2>Please Add Expenses</h2>
            </div>
          ) : this.props.showAllItems ? (
            this.props.items.map((item) => (
              <div className="main__item" key={item.id}>
                <AiFillCloseCircle
                  className="main__close_btn"
                  onClick={() => this.props.handleDelete(item.id, item.price)}
                />
                <p>{item.category}</p>
                <div className="main__item__top">
                  <h2>{item.title}</h2>
                  <h5>₹ {item.price}</h5>
                </div>
              </div>
            ))
          ) : (
            this.props.filteredItems.map((item) => (
              <div className="main__item" key={item.id}>
                <AiFillCloseCircle
                  className="main__close_btn"
                  onClick={() => this.props.handleDelete(item.id, item.price)}
                />
                <p>{item.category}</p>
                <div className="main__inner">
                  <div className="main__item__top">
                    <h2>{item.title}</h2>
                    <h5>₹ {item.price}</h5>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    );
  }
}

export default Main;
