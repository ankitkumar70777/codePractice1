import React, { Component } from "react";
import axios from "axios";

export class PostReq extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: "",
      title: "",
      body: "",
    };
  }

  updateVals = (e) => {
    // console.log(e.target.name);
    // console.log([e.target.name]);
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post("https://jsonplaceholder.typicode.com/posts", this.state)
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };

  render() {
    const { userId, title, body } = this.state;

    return (
      <div>
        <form onSubmit={this.submitHandler}>
          userId
          <input
            type="text"
            name="userId"
            value={userId}
            onChange={this.updateVals}
          />
          <br />
          title
          <input
            type="text"
            name="title"
            value={title}
            onChange={this.updateVals}
          />
          <br />
          body
          <input
            type="text"
            name="body"
            value={body}
            onChange={this.updateVals}
          />
          <br />
          <button type="submit">submit</button>
        </form>
      </div>
    );
  }
}

export default PostReq;
