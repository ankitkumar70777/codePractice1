import React, { useEffect, useState } from "react";

export default function UseStateRunOnlyOnce() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePosition = (e) => {
    console.log("mouse event");
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    console.log("useEffect called -------");
    window.addEventListener("mousemove", logMousePosition);

    return () => {
      // console.log("remove event listner");
      window.removeEventListener("mousemove", logMousePosition);
    };
  }, []);
  //above array basicly means it does not depend on any state or props
  //so nno need to re-render it, only render it on intial render/first load

  return (
    <div>
      hi hooks x- {x} y- {y}
    </div>
  );
}
