import React from "react";
//event handling
//react events are camelcase
function ClickEvent(props) {
  const clickHandler = () => {
    console.log("clicked");
  };

  return (
    <div>
      {/* always remember to not to add parenthesis "()" or it will become function call */}
      <button onClick={clickHandler}>click me Event</button>
    </div>
  );
}

export default ClickEvent;
