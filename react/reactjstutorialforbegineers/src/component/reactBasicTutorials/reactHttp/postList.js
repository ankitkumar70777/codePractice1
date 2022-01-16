import React, { Component } from "react";
import axios from "axios";

export class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      error: "",
    };
  }

  componentDidMount() {
    console.log("1");
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        this.setState({
          posts: response.data,
        });
      })
      .catch((error) => {
        console.log("error", error);
        this.setState({
          error: "something went wrong",
        });
      });
  }

  render() {
    const { posts, error } = this.state;
    console.log({ posts, error });
    return (
      <div>
        list of props
        {posts.length ? posts.map((post) => <div>{post.title}</div>) : null}
        {error ? <div>{error}</div> : null}
      </div>
    );
  }
}

export default PostList;
