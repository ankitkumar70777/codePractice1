//this is actually is bidning that made when function is invoked and
//what is reference is determine by from where function is called

//this All Makes Sense Now!

// Call-Site : the location from where function is called
//interview q
// function a() {
//   console.log("in a function ");
//   b(); //call site for b
// }

// function b() {
//   console.log("in b function");
//   c(); //call site for c
// }

// function c() {
//   console.log("in c function");
//   // a();
// }
// a(); //call site for a

// 4 rules )

// 1) default binding

function foo() {
  "use strict";
  console.log("in foo");
  console.log("this :::", this); //value if this depend from where this rogram is run and
  //from where it is called , in node it is global object and in browser it is window
  console.log(this.a); //output of this in browser will be 12 and in node will be undefined //interview imp
  console.log({ a });
}

var a = 12;

foo();
