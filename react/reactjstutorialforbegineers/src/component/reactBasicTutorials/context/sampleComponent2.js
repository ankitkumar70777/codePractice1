import React, { Component } from "react";
import SampelComponent1 from "./sampelComponent";
//import use context in file
import UserContext from "./userContext";

export class SampleComponent2 extends Component {
  render() {
    return (
      <>
        <div>SampleComponent2</div>
        <SampelComponent1></SampelComponent1>
        {/* use it in file as this.context */}
        return <div>hello {this.context}</div>
      </>
    );
  }
}

// 2) set  imported user context to same file
SampleComponent2.contextType = UserContext;
export default SampleComponent2;
