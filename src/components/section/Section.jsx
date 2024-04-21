import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Section extends Component {
  render() {
    return (
      <>
        <h2>{this.props.title}</h2>
        {this.props.children}
      </>
    );
  }
}

Section.propTypes = {
  title: PropTypes.string,
};
