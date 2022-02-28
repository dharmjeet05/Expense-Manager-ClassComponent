/* eslint-disable react/jsx-key */
import PropTypes from "prop-types";
import React, { Component } from "react";

import "./TotalExpenses.css";

export class TotalExpenses extends Component {
  static propTypes = {
    total: PropTypes.number,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <div className="totalbox">
          <h3>Total Expenses : </h3>
          <h2> ₹ {this.props.total}</h2>
        </div>
      </div>
    );
  }
}

export default TotalExpenses;
