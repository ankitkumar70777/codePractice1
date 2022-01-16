// let helloWorld = "good morning";
// console.log(helloWorld);

// //define object structure
// interface User {
//   name: string;
//   age: number;
// }

// const user: User = {
//   name: "ankitkumar",
//   age: 12,
// };
// console.log(user.name);

//define class structure

// interface UserStructure {
//     name: string;
//     age: number;
// }


// class User{
//     name : string;
//     age : number;

//     constructor(name: string, age: number){
//         this.name = name;
//         this.age = age;
//     }
// }
// let amitkumar: UserStructure = new User('amitkumar',12);
// console.log(amitkumar.age);

//Composing Types

//ts guide pdf: 
//console.log("hello world");

//the TypeScript compiler
//this will give error that
//stydy.ts:43:5 - error TS2554: Expected 2 arguments, but got 1
    // function greet(person,date){
    //     console.log(`hello ${person}, ${date}`);
    // }
    // greet('ankitkumar');

//Emitting with Errors
//--noEmitOnError will not emmit error and not update js file

//Explicit Types
//we can add expected datatype in function para 
// function sayHello(name: string,date: Date){
//     console.log(name,date);
// }
// sayHello("ankitkumar", new Date());

//Erased Types : 
//output of this program no 62 will be converted to string adding like this
//console.log(name + " and " + date);
// function sayHello(name: string,date: Date){
//     console.log(`${name} and ${date}`);
// }
// sayHello("ankitkumar", new Date());

//Downleveling : 
// typescript has ability to rewrite  code into newer or oldest exmascript
// version 
// by default TS target es3 to rewrite code
// we can use --target to compile code to specific ECMA version 
// ex : tsc --target es2015 index.js

//Strictness
// typescrictness can be define in --strict flag 
// or in tsconfig.json

//noImplicitAny : 
// Turning on the noImplicitAny flag will issue an error on any variables whose
// type is implicitly inferred as any 

//strickNullChecks :
// check undefined and null values and inform us


//Everyday data Types : 
    //primitive type : string, number, boolean
//     string : ""
//     number : number 
//     boolean : true,false
// always use lower case for defining data types

// Arrys : 
//     number[] means [1,2,3,4,5];
//     string[] means ["a","b"];

// any : 
//     any dont check any value 
//     let x: any = {
//         name : "ankit",
//         age : 24        
//     }

// Type Annotations on Variables : 
// let x: string = "ankitkumar";

// functions : 
//parameter type anotation : 
    // function sayHello(name: string){
    //     console.log(`good morning ${name.toUpperCase()}`);
    // }
    // //error TS2345: Argument of type 'number' is not assignable to parameter of type 'string'.
    // sayHello(23);
    // //working fine
    // sayHello("ankit");

//Return Type Annotations : 
// function addNumber(num1: number, num2: number) :number{
//     return num1 + num2;
// }
// let result = addNumber(3,3);

//Anonymous Functions : 
// TS can automatically determine type of function parameter on 
// all type of function(anonmus/arrow) 

// Even though the parameter s didn't have a type annotation, TypeScript used the types of the
// forEach function, along with the inferred type of the array, to determine the type s will have.
// This process is called contextual typing because the context that the function occurred within
// informs what type it should have.


//Object Types : 
// let cords = {
//         l : 12,
//         r : 11
// };
// function printCords(pt: {l: number,r: number}){
//     console.log(pt);
//     console.log(pt.l);
//     // console.log(arguments);
//     // console.log(arguments[0]);

// }
// printCords(cords);

//Optional Properties
//object type can aslo specify that some or all of their property 
//are optional. to do this add a ? after the prperty name

// let cords = {
//         l : 12
//         // r : 11
// };
// // //made r as optioanl para
// function printCords(pt: {l: number,r?: number}){
//     console.log(pt);
//     console.log(pt.l);
//     console.log(arguments);
//     //console.log(arguments[0]);

// }
// printCords(cords);

// //but for safeside always check if object is missing any values

// function printName(obj: { first: string; last?: string }) {
//  // Error - might crash if 'obj.last' wasn't provided!
//  console.log(obj.last.toUpperCase());
// Object is possibly 'undefined'.
//  if (obj.last !== undefined) {
//  // OK
//  console.log(obj.last.toUpperCase());
//  }
//  // A safe alternative using modern JavaScript syntax:
//  console.log(obj.last?.toUpperCase());
//}

//Union Types : 
//Defining a Union Type : 

// function addVal(id: number | string){
//     console.log(id);
// }
// addVal("hi");

//Type Aliases : 
// type paraType = {
//     name : string;
//     age : number;
// }
//or
// type paraType = {
//     name : string;
//     age : number;
//     id : string | number;
// }
// let details = {
//     name: "ankitkumar",
//     age : 29,
//     // id : 23
//     id : "ankitkumar"
// }
// function sayHello(pt: paraType){
//     console.log(arguments);
//     console.log(pt);
// }   
// sayHello(details);

// Note that aliases are only aliases - you cannot use type aliases to create different/distinct "versions"
// of the same type. When you use the alias, it's exactly as if you had written the aliased type. In other
// words, this code might look illegal, but is OK according to TypeScript because both types are aliases
// for the same type

//Interfaces : is better that type 
//Differences Between Type Aliases and Interfaces
//type can not reopned to new properties  but interface can 
// interface paraType = {
//     name : string;
//     age : number;
// }

//Type Assertions
//const nameInForm = document.getElementById("fName") as HTMLCanvasElement ;

//Literal Types : 
