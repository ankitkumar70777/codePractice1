import React from "react";

class MessageComponent extends React.Component {
  constructor() {
    super();
    //state is reserved keyword in react, so react will understand this.state
    this.state = {
      message: "welcome visitor",
    };
  }

  changeMessage() {
    this.setState({ message: "thank yoou for subscribe" });
  }

  render() {
    return (
      <div>
        {/* we can send data to render function in amin componenrt using this.state method */}
        <h1> {this.state.message} </h1>
        {/* here we can also call function with CB function or we can pass function only wich will call automatically */}
        <button onClick={() => this.changeMessage()}>subscribe</button>
      </div>
    );
  }
}

export default MessageComponent;
