import React from "react";

class Counter extends React.Component {
  //rconst shortcut
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  increment() {
    //we can not modify component value directly always use setState method
    //if we modify state directly react will not rerender componet again,
    //when you use setState method that method will ifnorm react to rerender component

    this.setState(
      //this will work with prevState
      //we also have access of props
      (prevState, props) => ({
        count: prevState.count + 1,
      }),
      () => {
        console.log("--count", this.state.count);
      }
    );
  }

  increment5time() {
    //even if we have set increment 5 time it will not work because
    //react group setState multiple calls into once single update
    //for better performance/
    //so fallwing all calls will be done in one single call/ and updated val will
    //not carry over between diff calls

    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  }

  render() {
    return (
      <div>
        <p>Count : {this.state.count}</p>
        <button onClick={() => this.increment()}>click here </button>
        <button onClick={() => this.increment5time()}>
          click here 5 time increment
        </button>
      </div>
    );
  }
}

export default Counter;
