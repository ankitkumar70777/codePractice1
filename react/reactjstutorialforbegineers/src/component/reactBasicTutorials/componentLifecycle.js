import React, { Component } from "react";
import ComponentLifecycle2 from "./componentLifecycle2";

class ComponentLifecycle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "ankitkumar",
    };
    console.log("lifecycleA a constructor   1  constructor parent");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("lifecycleA      2  getDerivedStateFromProps parent");
    // console.log("satte:::", state);
    // console.log("props", props);
    return null;
  }

  componentDidMount() {
    console.log("lifecycleA 4  componentDidMount parent");
  }

  render() {
    console.log("lifecycleA 3  render parent");
    return (
      <div>
        <ComponentLifecycle2></ComponentLifecycle2>
      </div>
    );
  }
}

export default ComponentLifecycle;
