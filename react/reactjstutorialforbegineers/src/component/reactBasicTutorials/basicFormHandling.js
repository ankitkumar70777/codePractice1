import React, { Component } from "react";

class BasicFormHandling extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fName: "",
      gender: "",
      cources: "",
    };
  }

  fNameHandler = (e) => {
    console.log(e.target.value);
    this.setState({ fName: e.target.value });
  };

  genderHandler = (e) => {
    console.log(e.target.value);
    this.setState({ gender: e.target.value });
  };

  courcesHandler = (e) => {
    console.log(e.target.value);
    this.setState({
      cources: e.target.value,
    });
  };

  onSubmit = (e) => {
    alert(`${this.state.fName}, ${this.state.gender}, ${this.state.cources}`);
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <label htmlFor="fName">first name</label>
          <input
            type="text"
            name="fName"
            value={this.state.fName || ""}
            onChange={this.fNameHandler}
          />

          <div onChange={this.genderHandler}>
            <label htmlFor="gender">gender</label>
            <input type="radio" name="gender" value="male" />
            male
            <input type="radio" name="gender" value="female" />
            female
          </div>

          <label htmlFor="cources">cources</label>
          <select
            id="cources"
            name="cources"
            onChange={this.courcesHandler}
            value={this.state.cources}
          >
            <option value="Volvo">Volvo</option>
            <option value="Saab">Saab</option>
          </select>

          <button type="submit">submit</button>
        </form>
      </div>
    );
  }
}

export default BasicFormHandling;
