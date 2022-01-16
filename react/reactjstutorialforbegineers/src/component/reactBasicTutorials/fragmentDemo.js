import React from "react";
import FragmentDemo2 from "./fragmentDemo2";

export default function FragmentDemo() {
  return (
    <table>
      <thead>
        <tr>
          <th>name</th>
          <th>age</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <FragmentDemo2></FragmentDemo2>
        </tr>
      </tbody>
    </table>
  );
}
