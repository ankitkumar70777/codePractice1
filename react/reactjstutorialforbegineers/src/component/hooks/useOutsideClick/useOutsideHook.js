import React, { useRef } from "react";

import UseOutsideClick from "./useOutsideClick";

function MyComponent() {
  const ref = useRef();

  UseOutsideClick(ref, () => {
    console.log('You clicked outside')
  });

  return (
      <>
    <div className="App">
      <div ref={ref}>
        <h4>This is a menu</h4>
        <p>This is another content</p>
      </div>
      <div>
        This is a content outside the menu
      </div>
    </div>
    </>
  );
}

export default MyComponent;