import React from "react";
const styleColor = {
  color: "red",
};

const TestCode = () => {
  const errorr = false;
  const [statecolor, setStateColor] = React.useState({});

  React.useEffect(() => {
    setStateColor(styleColor);
    return;
  }, [errorr]);

  return (
    <div>
      <p style={statecolor}>this is simple code</p>
    </div>
  );
};

export default TestCode;
