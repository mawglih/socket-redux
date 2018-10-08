import React, { Component } from "react";
import { subscribeToTimer } from '../../api';

class Socket extends Component {
  constructor(props) {
  super(props);
  subscribeToTimer((timestamp) => {
    this.setState({
      timestamp,
    });
  });
  }
  state = {
    timestamp: 'no timstamp yet',
  };

  render() {
    return (
      <div>
        <p>Current time is: {this.state.timestamp}</p>
      </div>
    );
  }
}

export default Socket;
