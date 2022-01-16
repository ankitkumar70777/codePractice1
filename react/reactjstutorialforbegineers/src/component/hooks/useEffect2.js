import React, { useEffect, useState } from "react";

function UseEffect2() {
  const [count, setCount] = useState(0);
  const [fname, setFname] = useState("");

  //useEffect run eveny times when document rendered
  //useEffect is set inside the component by this we can easily access props and state

  useEffect(() => {
    console.log("--");
    document.title = `clicked ${count} times`;
  }, [count]);
  //in above empty array we set props or state we need to watch
  //only those props or array got updated then only useEffect will run

  return (
    <div>
      <input
        type="text"
        name="fname"
        value={fname}
        onChange={(e) => {
          setFname(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        clicked {count} times
      </button>
    </div>
  );
}

export default UseEffect2;
