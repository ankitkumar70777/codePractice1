import React, { Component } from "react";
import HOF1Counter from "./counter";

class HofTutorial1 extends Component {
  render() {
    console.log("++++", this.props);
    const { count, incrementCount } = this.props;
    return <button onClick={incrementCount}>clicked {count} times</button>;
  }
}

export default HOF1Counter(HofTutorial1);
