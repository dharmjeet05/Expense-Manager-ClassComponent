/* eslint-disable react/jsx-key */
import PropTypes from "prop-types";
import React, { Component } from "react";
import "./Main.css";

export class Main extends Component {
  static propTypes = {
    items: PropTypes.array,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <div className="main">
          {this.props.items.map((item) => (
            <div className="main__item">
              <div className="main__item__top">
                <h2>{item.title}</h2>
                <h5>₹ {item.price}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Main;
