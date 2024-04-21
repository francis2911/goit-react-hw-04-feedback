import React, { Component } from 'react';
import PropTypes from 'prop-types';
export default class Statistics extends Component {
  render() {
    return (
      <div>
        <p>Good: {this.props.good}</p>
        <p>Neutral: {this.props.neutral}</p>
        <p>Bad: {this.props.bad}</p>
        <p>
          Total:
          {this.props.total}
        </p>
        <p>Positive Feedback: {this.props.positivePercentage}%</p>
      </div>
    );
  }
}
Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.string,
};
