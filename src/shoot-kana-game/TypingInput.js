import React, { Component } from 'react';

export default class TypingInputPresentation extends Component {
  handleChange = e => {
    const userText = e.target.value.toLowerCase();
    this.props.userTyped(userText);
  };
  render() {
    const {
      userText,
      userAnswerIsIncorrect
    } = this.props;

    const inputBorderStyle = userAnswerIsIncorrect ? {borderColor: 'red'} : {};

    return (
      <input
        autoFocus={true}
        style={{...inputBorderStyle, fontSize: 16, flex: 1, padding: 10}}
        value={userText}
        onChange={this.handleChange} />
    );
  }
}
