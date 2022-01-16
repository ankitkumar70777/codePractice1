import React, { useState } from "react";
import "./navigation.css";

export default function Navigation() {
  const [state, setstate] = useState(false);

  const showSideMenu = () => {
    setstate(!state);
  };

  return (
    <div className="navigationMenu">
      <div className="menu">
        <span onClick={showSideMenu}>gmail</span>
        <a href="#">contact</a>
        <a href="#">login</a>
        <a href="#">terminal</a>
      </div>
      <div className="webBody">
        {state && (
          <div className="sideMenu">
            <a href="#">optiona 1</a>
            <a href="#">optiona 1</a>
            <a href="#">optiona 1</a>
            <a href="#">optiona 1</a>
            <a href="#">optiona 1</a>
            <a href="#">optiona 1</a>
            <a href="#">optiona 1</a>
            <a href="#">optiona 1</a>
            <a href="#">optiona 1</a>
            <a href="#">optiona 1</a>
          </div>
        )}

        <div className="sideMenuBody">description</div>
      </div>
    </div>
  );
}
