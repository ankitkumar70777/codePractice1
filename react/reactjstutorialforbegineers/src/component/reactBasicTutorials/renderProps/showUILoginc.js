import React, { Component } from "react";

class ShowUILoginc extends Component {
  render() {
    console.log("show logic up", this.props);
    return (
      <button onClick={this.props.incrementCount}>
        clicked {this.props.count} times
      </button>
    );
  }
}

export default ShowUILoginc;
