import React, { useState, useEffect } from "react";
import axios from "axios";

function DataFetch1() {
  const [email, setEmailVal] = useState("");
  const [post, setPost] = useState(null);

  console.log({ email }, { post });

  const setPostFn = () => {
    setPost(email);
  };

  let didMount = React.useRef(false);

  useEffect(() => {
    if (didMount.current) {
      console.log("in if block");
      axios
        .post("https://jsonplaceholder.typicode.com/posts", {
          body: post,
        })
        .then((data) => {
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      console.log("in else block");
      didMount.current = true;
    }
  }, [post]);

  return (
    <>
      <label htmlFor="email">
        <input
          type="email"
          name="email"
          id="email"
          onChange={(e) => {
            setEmailVal(e.target.value);
          }}
          value={email}
        />
      </label>
      <button type="button" onClick={setPostFn}>
        submit
      </button>
    </>
  );
}

export default DataFetch1;
