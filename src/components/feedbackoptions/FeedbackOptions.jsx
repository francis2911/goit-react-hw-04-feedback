import React, { Component } from 'react';
import { ButtonOption, OptionList } from './FeedbackOptions.style';
import PropTypes from 'prop-types';

export default class FeedbackOptions extends Component {
  render() {
    return (
      <OptionList>
        <ButtonOption onClick={this.props.onLeaveFeedback.handleGood}>
          {this.props.options[0]}
        </ButtonOption>
        <ButtonOption onClick={this.props.onLeaveFeedback.handleNeutral}>
          {this.props.options[1]}
        </ButtonOption>
        <ButtonOption onClick={this.props.onLeaveFeedback.handleBad}>
          {this.props.options[2]}
        </ButtonOption>
      </OptionList>
    );
  }
}

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.object,
};
