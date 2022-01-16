import React, { Component } from "react";
import InputComp from "./input";

export class FocusInputJs extends Component {
  constructor(props) {
    super(props);
    this.focusInputParent = React.createRef();
  }

  clickHanlder = () => {
    this.focusInputParent.current.focusComponent();
  };

  render() {
    return (
      <div>
        <InputComp ref={this.focusInputParent}></InputComp>
        <button onClick={this.clickHanlder}>click for focus</button>
      </div>
    );
  }
}

export default FocusInputJs;
