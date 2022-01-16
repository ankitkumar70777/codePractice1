import React from "react";

class ClassClick extends React.Component {
  clickHandler = () => {
    console.log("clicked");
  };

  render() {
    return (
      <div>
        {/* always remember to not to add parenthesis "()" or it will become function call */}
        {/* in class component handler is access using this.functionname in {} */}
        <button onClick={this.clickHandler}>click me Event class</button>
      </div>
    );
  }
}

export default ClassClick;
