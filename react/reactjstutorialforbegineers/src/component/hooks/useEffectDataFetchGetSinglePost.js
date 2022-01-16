import React, { useEffect, useState } from "react";
import axios from "axios";

export default function UseEffectDataFetchGetSinglePost() {
  const [post, getSinglePost] = useState({});
  const [id, setId] = useState(1);
  const [idFromButtonClick, setidFromButtonClick] = useState(1);

  //and set function to run on buttonclick
  const getPostHandler = () => {
    setidFromButtonClick(id);
  };

  useEffect(() => {
    const result = axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    result.then((data) => {
      console.log("data", data.data);
      getSinglePost(data.data);
    });
    result.catch((error) => {
      console.log(error);
    });
    //just change value to watch for useEffect
  }, [idFromButtonClick]);

  return (
    <div>
      <input
        type="text"
        value={id}
        onChange={(e) => {
          setId(e.target.value);
        }}
      />

      <button onClick={getPostHandler}>getPost</button>
      <p>{post.title}</p>
    </div>
  );
}
