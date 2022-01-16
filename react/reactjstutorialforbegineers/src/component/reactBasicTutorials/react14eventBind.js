import React, { Component } from "react";

export class React14eventBind extends Component {
  constructor() {
    super();
    this.state = {
      message: "hi team",
    };

    // 3rd approach
    this.changeMsg = this.changeMsg.bind(this);
  }

  changeMsg() {
    this.setState({
      message: "bye team",
    });
    console.log("this", this);
  }

  changeMsg2 = () => {
    this.setState({
      message: "bye team",
    });
    console.log("this", this);
  };

  render() {
    return (
      <div>
        <div>{this.state.message}</div>

        {/* this way it works but we need to bind */}
        {/* <button
          onClick={() => {
            this.changeMsg();
          }}
        >
          Click
        </button> */}

        {/* 1st approach */}
        {/* <button onClick={this.changeMsg.bind(this)}>Click</button> */}
        {/* 2nd approach */}
        {/* <button
          onClick={() => {
            this.changeMsg();
          }}
        >
          Click
        </button> */}
        {/*best approach 3rd approach , check constructor too*/}
        <button onClick={this.changeMsg}>Click</button>
        {/* 4th approach change changeMsg to arraow fn */}
        <button onClick={this.changeMsg2}>Click</button>
      </div>
    );
  }
}

export default React14eventBind;
