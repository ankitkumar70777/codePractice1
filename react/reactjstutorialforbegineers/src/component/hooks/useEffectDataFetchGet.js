import React, { useEffect, useState } from "react";
import axios from "axios";

export default function UseEffectDataFetchGet() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    const result = axios.get("https://jsonplaceholder.typicode.com/posts");
    console.log("--", result);
    result.then((result) => {
      setPost(result.data);
    });
    result.catch((error) => {
      console.log(error);
    });
  }, []);

  return (
    <div>
      <ul>
        {post.map((v) => {
          return <li>{v.title}</li>;
        })}
      </ul>
    </div>
  );
}
