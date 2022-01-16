console.log("its working");

//typescript automatically decide datatype of versibale defined
// /so no need to explicitely add datatype to veriabele
let myName = "ankitkumar";
console.log(myName);
//myName = 12; will give error same for boolean and number
myName = "amitkumar";

//assigining type explicitily
let myRealAge; //if you dont assign type at time of initilixation
//TS will assing any in init
myRealAge = "ankitkumar";
console.log(myRealAge);

let myRealAge1: number;
//myRealAge1 = "ankitkumar3"; //here will give error coz myRealAge1 is number
//expliitilly assigned
myRealAge1 = 23;
console.log("myRealAge1 :", myRealAge1);

//array and types
var hobby = ["reading", "cooking"];//string array
console.log("hobby : ", hobby);
//hobby = [1,2,3]; //will give error
//error TS2322: Type 'number' is not assignable to type 'string'
hobby = ["running"];
console.log("hobby : ", hobby);

//explicitly assing type to array
let hobby1: any[] = ["reading", "cooking", "painting"];
hobby1 = [1, 2, 3]; //no error
console.log(hobby1);

//12tuples : set custom data fromat for each and every item in array
let address: [string, number] = ["wada", 13];
console.log(address);
//let address2: [string, number] = [13,"wada"];//will give error

//14: enums :
enum Color {
  gray = 1,
  blue = 1,
  black = 2,
}
console.log(Color.gray);

//15 any : any datatype will assing any dtatype to veriable
let anyData: any = 12;
console.log("anyDate", anyData);
anyData = { name: "ankitkumar" };
console.log("anyDate", anyData);

//16 : undersand the created js code
//17 : using types in function arguments return value

function sayHello(name): string { 
  //this function return string
  // A function whose declared type is neither 'void' nor 'any' must return a value.
  return name;
}
console.log(sayHello("ankitkumarrrrrrr"));

function sayHello2(name): void {
  console.log("we are in sayhello2");
  //return type void means function will return nothing
  //void return undefined
  console.log(name);
}
console.log("runnningSayHello2",sayHello2("ankitSayHello2"));

function sayHello3(name): any {
  //return type any means function will return nothing
  console.log(name);
}
console.log(sayHello3("ankit"));

//assign type to parameters
function add2Num(num1: number, num2: number): number {
  return num1 + num2;
}
console.log(add2Num(2, 2));

//18 : function as types :
//functionType veriable will have 2 param of number then return a number
//order in imp

//19: object as type :
//we cant reassign userData same object with diff property
let userData: { name: string; age: number } = {
  name: "ankitkumar",
  age: 20,
};
// userData = {
//     name : "ankitkumar1",
//     age : "12" //will give error here
// };

console.log(userData);

//20 : exmple :
//21 : type alices :
type alices1 = {
  data: number;
  output: string | number;
};

let object3: alices1 = {
  data: 2,
  output: "done",
};

//22//union types :
let output: string | number = 27;

//23: checking for type during runtime :
// if(typeof result == "result"){

// }

//24 : never type
// function keepProcessing(errorMsg: string): never{
//         throw new Error (errorMsg);
// }
// keepProcessing("stopped");

//diff bet never and void is void returns undefined

// function keepProcessing2(errorMsg: string): void{
//         console.log((errorMsg));
// }
// keepProcessing2("stopped");

//25: nullable types :
let ankit: number = 12;
// ankit = null; //not giving any error //check this on stackoverflow
// ankit = undefined; //not giving any error
console.log(ankit);
let ankit2;
console.log(ankit2);
ankit2 = null;

//26 assignment :
//27 && 28 solution : 
type bankaccountStructure =  { money: number; deposit: (value: number) => void };
let bankaccount: bankaccountStructure = {
  money: 2000,
  deposit(value: number): void {
    this.money += value;
  }
};

let myself: {name: string; bankaccount: bankaccountStructure; hobbies: string[]  } = {
  name: "max",
  bankaccount: bankaccount,
  hobbies: ["sports", "cooking"],
};

myself.bankaccount.deposit(3000);
console.log("myself : ", myself);

//28: summary 2nd module

//3) typescript compiler : 

//30 : intro :

//31 : compling ts code : 
// ts will compile code and if their are any error it will still make js file

//32 : changing compiler behaviour : 
//noEmitOnError : true //will not output js file is error is occured

//33 debugging your js code
//"sourcemap : true " //will generate source .ts file along with js file which you can
//use to debug in chrome debugger

//34 : //avoid implicit any : 

let myNameBro: any = "ankitkumar22" ; //will not give error even if implicit any is true
// because we have specificly set it
// myNameBro = "ankitkumar";

// ley ankit;
// ankit = 12 //will give error in ts 2.0

//36 : 
// "strict null check" check null value and return error
// "nounusedparameter " : will return error if any parameter only declared not used
// in function

//module 4 :typescript and es6:

//41 : let and const : 
//42 : block scope : 
//43 : arrow function : 
const multiplyNum = (num1: number, num2: number): number => {return num1 * num2}; 
console.log(multiplyNum(2,3));

//45 : function and default parameter : 
// const abc = (num1: number = 10,num2: number = 3 ) void => {return num1 * num2;}
//also we can manupluate 2nd para basd on first like
//  const abc2 = (num1: number = 10,num2: number = (num1 + 5) ) void => {return num1 * num2;}

//46: spread operator(...);
console.log('spread op');
 let numberArr = [1,5,8,3,2,90];
console.log(Math.max.apply(null,numberArr)); //old method
console.log(Math.max(...numberArr));  //using spread op

//47 : rest operator : 
function doubleVal(...allInput: number[]){
  console.log(allInput);
    let returnVal: number[] = allInput.map((v,i,a) => {return v + 2;});
    console.log(returnVal);
}
doubleVal(2,3,4);

//48 : distrucring array : 
const array21: string[] = ["ankitkumar","amitkumar"];
const [ankitkumar, amitkumar] =  array21;
console.log(ankitkumar);
console.log(amitkumar);

//49 : distrucring object : 
type employeeStructure = {nameEmp: string, ageEmp: number};
const employee: employeeStructure = {nameEmp: "ankitkumar",  ageEmp: 12};
const {nameEmp, ageEmp} = employee;
console.log(nameEmp);
console.log(ageEmp); 

//50 template leterals : 
console.log(`ankitkumar hi ${nameEmp}`);

//51 : other es6 feature : 

//module 5 : using classes to create objects :  
//55 :  intro : 

//56 : create class and class proerties : 
// public propertis are available from anywhere and 
// private property available from only class
// protectd properties avalable only in class and class inheried from same class

class Person{
  // method and properties both can be protected
  public name: string;
  protected age: number;
  private location: string;
  // public contactOfPerson: string;
  
  constructor(name: string, age: number, location: string){
    this.name = name;
    this.age = age;
    this.location = location;
  }
  public printAge(){
    console.log(this.age);
  }

  // public setContact(contact: string){
  //     this.contactOfPerson = contact;
  // }
//class methods 
 
 
}

const ankitkumar30 = new Person("ankitkumar",27,"mumbai");
console.log(ankitkumar30);
console.log(ankitkumar30.name);
// console.log(ankitkumar30.age);//error age is protected
// console.log(ankitkumar30.location); // error location is private

//57 class method and access modifier 
ankitkumar30.printAge();
// ankitkumar30.setContact("9209497562");
// ankitkumar30.getContact();

//58 : inheritance :
class PersonForMiletry extends Person{
  //enteded classes property always overright parent class properties
  public name: string = "raju";
}
let raju = new PersonForMiletry("raju", 25,"UP");
console.log(raju.name);

//59: inheritance and constructor
//inheritance nevere inhetate private properties and methods
class PersonForHotel extends Person{
  public hotelId: number;
    constructor(name: string, age: number, location: string,hotelId: number){
      super(name, age, location); //here no need to add datatype
      this.hotelId = hotelId;
    }
    showNameAndHotelID(){
      console.log(this.name,this.hotelId);
    }
}
let deepak = new PersonForHotel("deepak",33,"mumbai",12);
deepak.showNameAndHotelID();


//61 : getters and setters  : 
//getter and setters are same as method and properties only diff is we dont call it
//by () it will always available as we set it

// const personEx3 = {
//   fName :  "ankitkumar100",
//   lName :  "ravidas100" ,
//   get  getLnameOfPersonEx3() {
//       return this.lName;
//   },
//   set setLnameOfPersonEx3(lastName: String){
//       this.lName = lastName;
//   }
// }
// console.log(personEx3.getLnameOfPersonEx3);


//62 : static properties and method of class 
//static properties are called directly from class : 
class Car{
  static nameOfCar = "honda";
  static printCarName(){
    return this.nameOfCar; 
  } 
}

console.log(Car.nameOfCar);

//63 : abstract classes : 
//read it later

//64 : private constructor
//read it later

//65 : read only property 
//read it later

//66 excercise
//read it later

//67 solution
//read it later

//68 summary
//read it later

//module 6 : namespace and modules : 

//69 : intro :

//70 : namespace : 
namespace Factory{
  //everything inside namespace is not accessible to other 
  //unless you export it
  //internal module called as namespace
  //same namespace can be split to many files 
  export let numOfEmp: number = 15;
  export let calTotalEmp = (numOfEmp) => {return numOfEmp*2};
  export let allEmpBonus = (numOfEmp) => {return numOfEmp*4};  
}
console.log(Factory.numOfEmp);
console.log(Factory.calTotalEmp(Factory.numOfEmp));


//71 : namespace and multiple file : 
//read it lator :

//72 : namespace imports : 
// 2 ways to connect ts files with namespace
//1) script src all files into main file 
//2) tsc --outFile outFileName.ts 1.ts 2.ts 3.ts

//73 : more on namesapce : 
/* 
      ///<reference path="" />

  and then

  tsc mainFile.ts --outfile mainFile2.js 

 */

 //74 : limitation of namespace : 
 // we can also export namespace
 //and access it with .

  // namespace file1{
  //   export namespace file2{
  //     let myName: string = "ankitkumar";
  //   }
  // }

  // console.log(file1.file2.myName);

  //75 : disadvantage namespace : 
  //just use modules 

//75 modules : 
/*
export function sayHello4(){
    console.log("sayHello4");
}


export let sayHello5 = () => {
        console.log("sayHello4");
}
 */
import { sayHello4 } from "./appImportFile1";
//also import * as appImports from "./appImportFile1.js" will import all exports as object 
console.log(sayHello4);
sayHello4();

//76 loading file : 
// can be use  systemjs pkg for more efficincy

//77 : import export module 

//78 module resolution : 

//79 : namespace vs module 

//80: summary : 

//module 7 :
//07 Doing Contract Work with Interfaces

//81 :  intro

////82 :  basic interface : 
// function displayName(person5: {name: string; age: number}): void{
  //insted of above function we can write below interface
//interface will always garanty that certain parameter are available
interface person5Structure  {
  name: string ; 
  age?: number ; //to make this property optional add ?
  //after adding ? its ok if we dont pass age or pass
  displayAgeAndName (name: string, age: number): void  ; //this is interface mehod which 
  //define return type 
};

function displayName(person5: person5Structure ): void{
      console.log(person5.name, " ", person5.age);
      console.log(person5.toString());
}

let person5: person5Structure = {
  name : "ramesh",
  age : 12,
  displayAgeAndName : (name,age) => {
      console.log(`${name} ${age}`);
  }
}

displayName(person5);//


// 83 : interface and properties 
//84 : interface and method : 


//85 : interface and class 
  // in class we can also add interface

  //86 function type interface : 

  interface doubleVal2{
    (num1: number, num2: number): number;
  }
  function doubleVal2(num1: number,num2: number){
    return num1 * num2;
  }
  console.log(doubleVal2(2,3));

  //87 : interface inheritance : 
  // we can also inherit interface from interface // read it later : 
//88 : interfaces and types dont compile they only check datatypes 
//89 : module summary

//module 8 : Generics : 
// 90
// 91
// 92 : creationg generacics function 
//by using generacs we can specify type of parameter as well as argument 
function gen1<dataType>(data: dataType){
          console.log(data);
}
gen1("ankitkumar"); //ts automatically infurs datatype of augument and para here
//gen1<number>('27'); //here will give error


//93 : build in generacs 

let array1: Array<number> = [1,2,3,5]; //will only contain array with number datatype
array1.push(23); //ok
//array1.push('ankitkumar'); //not ok

//94 : generac type and array 
function printArray<datatype>(args: datatype[]){
  args.forEach((element)=>{console.log(element)});
}
printArray<string>(["apple","banana"]);

//95 : generic type : 
// const echo2: <T>(data: T) => T = betterEcho;
// console.log(echo<string>("something"));

//96 : generic class : 
 //97 : constraints : 
//  read it later 
//98 : //more on generacs 
//read it later


//09 Behind the Scenes with Decorators : 

//class decoraotrs : 

function logged(constructorFn: Function){
  console.log("inside logged")
  console.log(":::",constructorFn);
}
@logged
class Person6{
    constructor(){
      console.log("inside person 6");
    }
}


//121 : tsc -w : watch mode
      // tsconfig : "files" : [
      //   "app.ts"
      // ]

      // tsc app.ts --more options


//decorators : 

function f(myname){
  console.log("decoraotrs5");
  return myname;
}

@f
class A {}

// function f(C) {
//   console.log('apply decorator')
//   return C
// }

// @f
// class A {}

      //cource end