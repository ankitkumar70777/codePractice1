import React from "react";

//class component destructore

class Greet extends React.Component {
  render() {
    const { name, age } = this.props;
    return (
      <div>
        <h1>
          Hello {name} {age}
        </h1>
      </div>
    );
  }
}

export default Greet;
