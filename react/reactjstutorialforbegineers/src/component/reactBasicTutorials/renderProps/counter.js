import React, { Component } from "react";

export class Counter5 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  incrementCount = () => {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  };

  //counter component does not render anything on its own
  //it only return logic part back to app component or where its getting used

  render() {
    return (
      <div class="test1">
        {this.props.render(this.state.count, this.incrementCount)}
      </div>
    );
  }
}

export default Counter5;
