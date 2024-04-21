import React, { Component } from "react";
import { NotificationMessage } from "./Notification.style";
import PropTypes from "prop-types";

export default class Notification extends Component {
  render() {
    return (
      <div>
        <NotificationMessage>{this.props.message}</NotificationMessage>
      </div>
    );
  }
}

Notification.propTypes = {
  message: PropTypes.string,
};
