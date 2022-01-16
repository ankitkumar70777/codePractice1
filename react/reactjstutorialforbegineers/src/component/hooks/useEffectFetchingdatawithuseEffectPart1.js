import React, { useState, useEffect } from "react";
import axios from "axios";

export default function ReactHooksTutorial_12_FetchingdatawithuseEffectPart1() {
  const [state, setstate] = useState([]);

  useEffect(() => {
    const result = axios.get("https://jsonplaceholder.typicode.com/posts");
    result.then((data) => {
      console.log(data.data);
      setstate(data.data);
    });
    result.catch((error) => {
      console.log(error);
    });
  }, []);

  return (
    <div>
      <ul>
        {state.map((v) => {
          return <li key={v.id}>{v.title}</li>;
        })}
      </ul>
    </div>
  );
}
