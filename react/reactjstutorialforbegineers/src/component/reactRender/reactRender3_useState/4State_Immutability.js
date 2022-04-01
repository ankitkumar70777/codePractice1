import React, { useState } from "react";

const T4StateImmutability = () => {
  const [fullname, setFullname] = useState({ fn: "ankitkumar", ln: "ravidas" });
  console.log("component re-rendered");

  const changeName = () => {
    setFullname({ fn: "amitkumar", ln: "ravidas" });
  };

  return (
    <div>
      <p>
        {fullname.fn} {fullname.ln}
      </p>
      <button onClick={changeName}>changeName</button>
    </div>
  );
};

export default T4StateImmutability;
