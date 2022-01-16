import React, { Component } from "react";

class RefsDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    //first step
    this.autoFoucsName = React.createRef();
  }

  //autofocus in input element
  // componentDidMount() {
  focusComponent() {
    this.autoFoucsName.current.focus();
    console.log(this.autoFoucsName);
  }

  render() {
    return (
      <div>
        {/* 2nd step */}
        <input type="text" ref={this.autoFoucsName} />
      </div>
    );
  }
}

export default RefsDemo;
