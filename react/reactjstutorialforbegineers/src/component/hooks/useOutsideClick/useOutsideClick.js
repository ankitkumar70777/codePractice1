import { useEffect } from "react";

const UseOutsideClick = (ref, callback) => {

  const handleClick = e => {
      console.log("ref.current ::",ref.current);
      console.log({callback});
      console.log("e.target -------::",e.target);

    if (ref.current && !ref.current.contains(e.target)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  });
};

export default UseOutsideClick;