import React, { Component } from "react";
import PureComponentExample1 from "./pureComponent";
import RegularComponentEx1 from "./regularComponentEx1";
import PureFunctionComp1 from "./pureFunctionComp1";

export class ParentComponent1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "ankitkumar",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "ankitkumar",
      });
    }, 2000);
  }

  render() {
    console.log("*parent component*");
    return (
      <div>
        parent component
        {/* <RegularComponentEx1 name={this.state.name}></RegularComponentEx1> */}
        {/* <PureComponentExample1 name={this.state.name}></PureComponentExample1> */}
        <PureFunctionComp1 name={this.state.name}></PureFunctionComp1>
      </div>
    );
  }
}

export default ParentComponent1;
