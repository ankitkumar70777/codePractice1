import React from "react";
import ErrorBoundary from "./error1Boundary";

export default function Error1({ heroName }) {
  if (heroName == "joker") {
    throw new Error("NOT A HERO");
  }
  return (
    <div>
      <h1>{heroName}</h1>
    </div>
  );
}
