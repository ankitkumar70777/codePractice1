import React, { Component } from "react";

const HOF1Counter = (OrignalCompo) => {
  console.log("OrignalCompo::", OrignalCompo);
  class NewComponent1 extends Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }

    incrementCount = () => {
      this.setState((prevCalc) => {
        console.log({ prevCalc });
        return { count: prevCalc.count + 1 };
      });
    };

    render() {
      // console.log("-------", this.props);
      console.log(
        "this.state.count",
        [this.state.count],
        "this.incrementCount",
        this.incrementCount
      );
      return (
        <OrignalCompo
          count={this.state.count}
          incrementCount={this.incrementCount}
          {...this.props}
        />
      );
    }
  }
  return NewComponent1;
};

export default HOF1Counter;
