import React, { Component } from "react";

class RegularComponentEx1 extends Component {
  render() {
    console.log("*regular component*");
    return <div>regular component {this.props.name}</div>;
  }
}

export default RegularComponentEx1;
