import React, { useState, useCallback } from "react";
import TitleOf from "./component/title";
import Count from "./component/count";
import Button from "./component/button";

export default function ParentComponentUseCallBack() {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(25000);

  //first para: callback function, 2nd para: array of veraibale to watch for changes
  const incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  const incrementSalary = useCallback(() => {
    setSalary(salary + 1);
  }, [salary]);

  return (
    <div>
      <TitleOf />
      <Count text="age" count={age}></Count>
      {/* //whatever we pass btween <tag></tag> can be acces as children */}
      <Button handleClick={incrementAge}>Increment Age</Button>
      <Count text="salary" count={salary}></Count>
      <Button handleClick={incrementSalary}>Increment Salary</Button>
    </div>
  );
}
//react.memo is heigher order component that will prenent functional
//compnent to being re-render if its props or state do not change
//memo is react feature
//function as prop may b re-render again because function is always diff

//use callback hook:

//use callback hook is a memoized version of callback function that only
//changes if one of dependancy changes
