import React, { useState, useMemo } from "react";
import Child from "./child";

/*
4:40 - When a Parent Component re-renders, all Child components will re-render as well.

5:30 - React.memo is a higher order component, used with functional components. React.memo will compare the previous props to the next props, and if different, will re-render the component.

6:52 - JavaScript Primitives (string, number, boolean) being passed as a prop will work fine with React.memo.

7:30 - Arrays, Objects, Functions being passed as a prop will not work with React.memo alone. You'll need to use hooks like useMemo around the Array or Object.

8:17 - In a functional component, every re-render will cause everything in the function body to be "re-created". So Arrays, Objects, and Functions will be new and different on every re-render. When these are passes to the Child Component, it will cause the Child to re-render.

8:55 - Wrapping Arrays and Objects with the useMemo hook will solve this problem. Better yet, if the dependency array is empty, you should just hoist it out of the function body.

14:24 - When passing Functions down as props, and when Functions are used in a dependency array, wrap them in the useCallback hook to avoid re-renders and prevent useEffects from firing on each re-render.

20:30 - Don't just memoize all the things. Here is the blog post by Kent about when you should use 
*/

// solution 2 better
const info = { name: "ankitkumar" };

const Parent = () => {
  const [count, setCount] = useState(0);

  // solution 2 not recomended
  // const info = useMemo(() => {
  //   return { name: "ankitkumar" };
  // }, []);

  return (
    <>
      <div>
        <p>{count}</p>
        <button
          onClick={() =>
            setCount((prevCount) => {
              return prevCount + 1;
            })
          }
        >
          increase
        </button>
      </div>

      {/* react props which we are sending must be premitivi type 
      if its  not premitive(function, object, array) we can use useMemo,
      if its function use useCallback(), 
      or if that non-premivitive value does not depend on any dependancy keep that prop outside of main function 
      like this Parent as its better way,
 */}
      <Child title={info} age="12" />
    </>
  );
};

export default Parent;
