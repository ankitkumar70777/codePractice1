import React, { useState, useEffect } from "react";
import axios from "axios";

export default function ReduceFetchData1() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [post, setPost] = useState({});

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((data) => {
        setLoading(false);
        setPost(data.data);
        setError("");
      })
      .catch((err) => {
        setLoading(false);
        setPost({});
        setError("something went wrong");
      });
  }, {});

  return (
    <div>
      {loading ? <h1>Loading......</h1> : post.title}
      {error ? error : null}
    </div>
  );
}
