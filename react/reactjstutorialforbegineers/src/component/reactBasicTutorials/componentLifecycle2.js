import React, { Component } from "react";

class ComponentLifecycle2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "ankitkumar",
    };
    console.log("lifecycleB a    1  constructor children");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("lifecycleB a      2  getDerivedStateFromProps  children");
    // console.log("satte:::", state);
    // console.log("props", props);
    return null;
  }

  componentDidMount() {
    console.log("lifecycleB 4  componentDidMount children");
  }

  render() {
    console.log("lifecycleB 3  render children");
    return <div></div>;
  }
}

export default ComponentLifecycle2;
