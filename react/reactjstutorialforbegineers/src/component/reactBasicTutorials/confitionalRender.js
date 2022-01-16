import React, { Component } from "react";

class ConfitionalRender extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedin: true,
    };
  }

  render() {
    // return !this.state.isLoggedin ? (
    //   <div>Welcome guest</div>
    // ) : (
    //   <div>Welcome frined</div>
    // );

    return this.state.isLoggedin && <div>Welcome frined</div>;
    // return  !this.state.isLoggedin && <div>Welcome guest</div>;
  }
}

export default ConfitionalRender;
