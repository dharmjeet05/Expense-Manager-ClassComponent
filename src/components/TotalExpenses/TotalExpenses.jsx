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
        <h3>Total Expenses : ₹ {this.props.total}</h3>
      </div>
    );
  }
}

export default TotalExpenses;
