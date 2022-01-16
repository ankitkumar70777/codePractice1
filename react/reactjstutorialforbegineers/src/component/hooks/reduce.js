import React from "react";

export default function ReduceArray() {
  //syntax /
  // reduce((previousValue, currentValue, currentIndex, array) => { /* ... */ }, initialValue)
  //the reduce method perforn given reduce function on each element of array, in order of
  // passing return value
  //final result is a single total value

  //previousValue : tha value resulting and returned from previous op,
  //   on first call if initial value is provided otherwise element[0] od array

  //   currentValue: the value of cuurrunt element, if nitial value if provided
  //element[0] else element[1]

  // currentIndex : index of current value

  //array : the array it self

  //inital value : optioanl

  //   const arr1 = [1, 2, 3, 4];

  //   const result = arr1.reduce((p, c, i, a) => {
  //previous val : 1,
  //currunt val : 2
  //     console.log("p", p);
  //     console.log("c", c);
  //     console.log("i", i);
  //     console.log("a", a);
  //     return p + c;
  //   }, 10);
  //if initial value if provided than
  //previous val is 10 and currunt is 1,
  //   console.log(result);

  //calc element of object
  //   const arr2 = [{ x: 1 }, { x: 2 }, { x: 3 }];

  //   const result2 = arr2.reduce((p, c) => {
  //     console.log("p", p);
  //     console.log("c", c);
  //     return p + c.x;
  //   }, 0);
  //   console.log("result2::", result2);

  //   let arr3 = [
  //     [0, 1],
  //     [2, 3],
  //     [4, 5],
  //   ];

  //   const result3 = arr3.reduce((p, c) => {
  //     return p.concat(c);
  //   });
  //   console.log("result3", result3);

  return <div></div>;
}
