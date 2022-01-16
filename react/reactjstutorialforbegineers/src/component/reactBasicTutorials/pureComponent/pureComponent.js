import React, { PureComponent } from "react";

class PureComponentExample1 extends PureComponent {
  render() {
    console.log("*pure component*");
    return <div>pure component {this.props.name}</div>;
  }
}

export default PureComponentExample1;
