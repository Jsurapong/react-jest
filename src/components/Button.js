import React, { Component } from 'react';

export default class Button extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }
  handleClick() {
    this.setState(this.stateUpdater);
  }
  stateUpdater() {
    return { text: 'PROCEED TO CHECKOUT' };
  }
  render() {
    return (
      <button
        onClick={() => {
          this.handleClick();
        }}
      >
        {this.state.text || this.props.text}
      </button>
    );
  }
}
