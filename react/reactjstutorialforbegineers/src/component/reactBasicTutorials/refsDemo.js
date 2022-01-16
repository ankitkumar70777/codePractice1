import React, { Component } from "react";

class RefsDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    //old method
    this.autoFoucsName = null;
    this.autoFocusFun = (e) => {
      console.log("e", e);
      this.autoFoucsName = e;
    };
  }

  componentDidMount() {
    //react will call ref element with dom element when component mount
    //and call with null when component unmounts
    //so its imp to check if proprty is exists in ref propert
    //and not null
    if (this.autoFoucsName) {
      this.autoFoucsName.focus();
    }
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.autoFocusFun} />
      </div>
    );
  }
}

export default RefsDemo;
