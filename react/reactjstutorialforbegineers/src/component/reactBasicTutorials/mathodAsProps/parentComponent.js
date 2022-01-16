import React, { Component } from "react";
import ChildComponent from "./childComponent";

export class ParentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      parentName: "ramesh",
    };

    this.sayName = this.sayName.bind(this);
  }

  sayName(aainame) {
    alert(`hello ${this.state.parentName} ${aainame}`);
  }

  render() {
    return (
      <div>
        <ChildComponent sayName={this.sayName}></ChildComponent>
      </div>
    );
  }
}

export default ParentComponent;
