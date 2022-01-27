//array methods

// var employeesName = ["ankitkumar", "ankitkumar1", "ankitkumar2", "ankitkumar3"];
//access array elemet by index

// employeesName[0] = "ankit";
// console.log(employeesName[0]);

//find last item
// console.log(employeesName[employeesName.length - 1]);

//know index of any array element
// console.log(employeesName.indexOf('ankitkumar1'));
// console.log(employeesName.indexOf("ankitkumar2"));

//mix value in array
// var mixArray = ["a", 3, true, { age: 12 }, ["yes", "no"]];
// console.log("mixArray", mixArray);

// console.log(mixArray[3]);
// mixArray[3].age = 13; //update object vaule
// console.log(mixArray[3]);

//index of will give -1 if annay value not found
// console.log("find premitive value", mixArray.indexOf(true)); //result 2
// console.log("find object", mixArray.indexOf(["yes", "no"])); //result -1
// console.log("find object", mixArray.indexOf({ age: 12 })); //result -1
//always remember you can only find index of only premitive value
//complex data type like array object function alway return -1

//so use findIndex method of es6

// console.log(
//   "find",
//   b.findIndex((v) => v.age === 12)
// ); //3

// or

//array containing array find index of element array
// console.log(
//   mixArray.findIndex((v) => {
//     console.log(v);
//     if (Array.isArray(v)) {
//       return v.includes("yes");
//     }
//   })
// );

// diff between indexof findindex
// indexOf : used with we need to do opeation of premitives values ,
//its access firest parameter as value
//findIndex : used when we need to do operation of complex value like array or objects
//it accept first parameer as function,

var array1 = [12, 13, 14, "ankit"];

//access array element
// arrayName[indexName];

//change array element by index
// array1[0] = 'kumar';
// array1[1] = 'kumar';
// array1[2] = 'kumar';
// console.log('array1',array1);

//change array element by element
// var ankitIndex = array1.indexOf('kumar'); //result ill be -1 of array elementn not found
// console.log('ankitIndex',ankitIndex);

// array1[ankitIndex] = 'anil';
// console.log('array1',array1);

//array are speational type of Objects, datatype of array is objects

//array properties :
// console.log("length 1", array1.length);
// console.log(array1);
//you can truncate array just by setting array length
// array1.length = 2;
// console.log("shorten length to 2 --", array1);
//if you set length more that array actual length it will add empty elements
// array1.length = 6;
// console.log("incresed length to 6", array1.length);
// console.log(array1);
// array1.forEach((v) => console.log("-", v));

// array1.push("a", "b");
// console.log("pushed 2 eleent in array", array1);

//access first array
// console.log(array1[0]);

//access last array
// console.log(array1[array1.length - 1]);

//add array element
// array1.push("apple", "banana");
//or
// array1[array1.length] = "lemen"; //this is possible because array indes is start frm 0 so
//length count start from 1 so array index in always 1 more than total lenth
// console.log(array1, "length", array1.length);
//Adding elements with high indexes can create undefined "holes" in an array:
// array1[10] = "amit";
// console.log(array1); //3 null/emptry items added

//JavaScript does not support arrays with named indexes.
//In JavaScript, arrays always use numbered indexes.

//WARNING !!
// If you use named indexes, JavaScript will redefine the array to a standard object.
// After that, some array methods and properties will produce incorrect results.

//  Example:
// var person = [];
// person["firstName"] = "John";
// person["lastName"] = "Doe";
// person["age"] = 46;
// var x = person.length;     // person.length will return 0
// var y = person[0];         // person[0] will return undefined

// The Difference Between Arrays and Objects :
// In JavaScript, arrays use numbered indexes.
// In JavaScript, objects use named indexes.
// Arrays are a special kind of objects, with numbered indexes.

// When to Use Arrays. When to use Objects.
// JavaScript does not support associative arrays.
// You should use objects when you want the element names to be strings (text).
// You should use arrays when you want the element names to be numbers.

// How to Recognize an Array
//type of array is alwas object so use this method
// console.log('is array : ',Array.isArray(array1));

//JavaScript Array Methods

//1)  toString
// let stringArray = array1.toString();
// console.log(stringArray, typeof stringArray);

// 2) split
// let arrayOfStringArray = stringArray.split(",");
// console.log(arrayOfStringArray);
// arrayOfStringArray.forEach((v) => console.log(v));
//array which have empty item can be converted to string and
//then split them using comma to get empty its as empty value

//join method will join  array into text array withh gven sereter
// console.log("join aray :", array1.join("*"));

//Popping and Pushing
// console.log(array1);
//The pop() method removes last element and  return removed value
//push() method add eleent to last and return total length of array
//shift() remove first eelement   return removed value
//unsift add new element to first return total length of array

// console.log(array1.pop());
// console.log(array1.push("chacha", "mama"));
// console.log(array1);
// console.log(array1.shift());
// console.log(array1);
// console.log(array1.unshift("kaka"));
// console.log(array1);

// console.log(array1[0]);
// delete array1[0];
// console.log(array1[0]);
// console.log(array1);

//Using delete may leave undefined holes in the array. Use pop() or shift() or splice() instead.
//delete only delete object property and will not reindex array or update array length
//this leaves undefined or null holes in array

//Splicing an Array
//splice method return array with deleted array
// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits);
// console.log(fruits.splice(3, 0, "peru")); //on 3rd index delete 0 element and add "peru"
// console.log(fruits);
//return empty array because deldted 0 item
// console.log(fruits);
//use splice to remove itesm insted to using delete
// console.log(fruits.splice(0,2));//on index 0 deleted 2 items
// console.log(fruits);
// console.log(fruits.splice());

// const arrayAnkit = ["ankitkumar", "amitkumar", "anilkumar", "raju"];
// console.log("arrayAnkit", arrayAnkit);
// console.log(arrayAnkit.splice(1, 1, "shimala"));
// console.log("arrayAnkit", arrayAnkit);

//Merging (Concatenating) Arrays
//The concat() method does not change the existing arrays. It always returns a new array.
//concat also takes string as value to mearge with array
// console.log(array1);
// const concatedArray = array1.concat(arrayAnkit, "1111", "2222");
// console.log(concatedArray);

//Slicing an Array make new array of sliced array
//The slice() method creates a new array. It does not remove any elements from the source array.
//If the end argument is omitted, like in the first examples, the slice() method slices out the rest of the array.
//slice work on orignal array

// var slicedArray = concatedArray.slice(2);
// console.log("slicedArray--", slicedArray);
// if two values given it sliced between those and rturn new array
// console.log(slicedArray.splice(3, 9));
// console.log("slicedArray--", slicedArray);

//hard copy of array using slice
// const slicedArrayCopy = slicedArray.slice();
// console.log("slicedArrayCopy-----", slicedArrayCopy);

//automatice string conversion of array
//array automaticaly convert to toStrong() if you print it iinto webpage
// document.write(newArray3);
//All JavaScript objects have a toString() method.
//and array is speational type of object in js
//thatsa why tyoe of array is obbejct in js

//JavaScript Sorting Arrays
// array1.splice(0, array1.length, "ankit"); //empty array
// array1.length = 0; //empty array
// console.log("array1:", array1);
// array1.push("d", "e", "c", "b", "z");

//sort method sort exisitng array alphabetically
//sort perform sorting or origaal array so its effect is permanent
// console.log("exisiting modifies", array1.sort());
// console.log("remain modified", array1);

//reverse() also odifies exisiting array reverse alphabetically
// console.log("reversed", array1.reverse());

//numaic sortng
// var marks = [12, 12, 100, 8, 15];
// console.log("marks", marks);

// console.log(marks.sort((a, b) => a - b));

//numaic sortng in reverse
// console.log("marks ::--", marks);
// console.log(marks.sort((a, b) => b - a));

//to find lowest and height value sort array first (for sort a-b,
//for reverse b-a) and then get index 0 value

//best way to find max min numbr in array to use Math.max()
// console.log(Math.max.apply(null, marks)); //find max number
// console.log(Math.min.apply(null, marks)); //find min number
// apply accepts an array and it applies the array as parameters to the actual function. So,
// Math.max.apply(Math, list);
// can be understood as,

// Math.max("12", "23", "100", "34", "56", "9", "233");
// So, apply is a convenient way to pass an array of data as parameters to a function. Remember

// console.log(Math.max(list));   # NaN
// will not work, because max doesn't accept an array as input.

// There is another advantage, of using apply, you can choose your own context. The first parameter,
// pass to apply of any function, will be the this inside that function. But, max doesn't depend on the current context. So, anything would work in-place of Math.

// console.log(Math.max.apply(undefined, list));   # 233
// console.log(Math.max.apply(null, list));        # 233
// console.log(Math.max.apply(Math, list));        # 233
// */

//Sorting Object Arrays

// let cars1 = [
//   { type: "Volvo", year: 2016 },
//   { type: "Saab", year: 2001 },
//   { type: "BMW", year: 2010 },
//   { type: "ankit", year: 1994 },
//   { type: "anmkit", year: 1994 },
//   { type: "annit", year: 1994 },
//   { type: "annit", year: 1994 },
// ];
// console.log("cars1111", cars1);

// const sortedCar1 = cars1.sort((a, b) => {
//   return a.type.toLowerCase() > b.type.toLowerCase() ? 1 : -1;
// });

// console.log("sortedCar1::", sortedCar1);
//  or

// let sortankit = function (cars1) {
//   console.log("insideSortankit", cars1);
//   cars1.sort(function (a, b) {
//     var x = a.type.toLowerCase();
//     var y = b.type.toLowerCase();
//     console.log("x", x);
//     console.log("y", y);
//     if (x < y) {
//       return -1;
//     }
//     if (x > y) {
//       return 1;
//     }
//     return 0;
//   });
// };

// sortankit(cars1);

//i am here
//-----------------

//JavaScript Array Iteration Methods

//Array.forEach()
//syntax : array.forEach(callback [, thisArgument]);
// var numbers = [45, 4, 9, 16, 25];
// numbers.forEach(arrayForEach);

// function arrayForEach(value,index,array){
//    array[index] = value + 10;
//    console.log('numbersNewInside',numbersNew);
// }
// console.log('numbers',numbers);

//Converting a for loop to forEach
// const items = ['item1', 'item2', 'item3']
// const copyItems = []

// before
// for (let i = 0; i < items.length; i++) {
//   copyItems.push(items[i])
// }

// after
// items.forEach(function(item){
//   copyItems.push(item)
// })

const array2 = [11, 32, 45, 6, 7, 4, 32, 44];
// array2.forEach((v, i, a) => console.log(v * 2));
//foreach exxecute function on each array1 element
//foreach dont return any values it just exacute function on each element
//foreach doeas not mutate array, but callback function can do it
//if we need early termination the insted of forEach use
// for, for in , for of loop and
// every() , some(), find(), findIndex()
//foreach dont wait ofr promices

array2.forEach((v, i, a) => {
  //v = current value
  //i = index of current value
  //a = current array
  const double = a[i] * 2;
});

//array.map

var numbers6 = [45, 4, 9, 16, 25];
//map return new array by calling callback function on each array element
//syntax : map(function(element, index, array) { /* ... */ }, thisArg)
// const number6Double = numbers6.map((v, i, a) => {
//   return v * 2;
// }, 12);
// console.log({ number6Double });

// const number6Double2 = numbers6.map(function returnDouble(v, i, a) {
//   //   v : current value
//   //   i : index of curent value
//   //   a : array
//   //   12 : value of this
//   console.log(v, i, a, this);
// }, 12);

//Array.filter()

//The filter() method return new  array with  elements that passes a test.

// numbers6.push(true, "ankit", false, "", null);
// console.log("numbers6", numbers6);
// //filter truthy val from array
// const filteredArr = numbers6.filter((v) => {
//   return Boolean(v);
// });
// console.log("filteredArr", filteredArr);

//filter array1 by leanth
// array1.length = 0;
// array1.push("ankit", "ankit1", "ankit222");
// const array1Filtered = array1.filter((v) => v.length <= 6);
// console.log(array1Filtered);

//filter only string
// console.log(array1);
// const onlyStrig = array1.filter((v) => typeof v === "string");
// console.log(onlyStrig);
//i was here

//Array.prototype.reduce() :
//reduuce method apply users callback functuion on every array element
//and pass returned value as previousVal on next array element
//syntax : reduce(function(previousValue, currentValue, currentIndex, array) { /* ... */ }, initialValue)
//reduce will return final value after all element iteration done

// array1.pop();
// console.log("array1", array1);
// const resultResuce = array1.reduce((p, v, i, a) => {
//t : previous val
//v : currunt value
//i : index
//a : array

//previous value in first iteration is always 1st element of array
//second previous value is previous value returned by iterator on first iteration
//we can also provide previous value in reduce fnction, it will be passed to calback function
//in first iteration and will return result,
//which will be used as previous val in second iteration

//   console.log({ p, v, i, a });
//   return p + v;

//   //below 1 is previous val
// }, 1);
// console.log(resultResuce);

// const result3 = [{ x: 1 }, { x: 2 }, { x: 3 }].reduce((p, v) => {
//   console.log("p--", p, "v--", v.x);
//   return p + v.x;
// }, 0);
// //always provide intial value if you calculation with array of obj
// console.log(typeof result3, "result3", result3);

//concat value
// const result4 = [
//   [0, 1],
//   [2, 3],
//   [4, 5],
// ].reduce((p, v) => {
//   return v.concat(p).sort((a, b) => a - b);
// }, []);
// console.log("result4", result4);

//counting instance

// let names = ["Alice", "Bob", "Tiff", "Bruce", "Bruce", "Alice"];
// let countedNames = names.reduce((p, v) => {
//   if (v in p) {
//     p[v]++;
//   } else {
//     p[v] = 1;
//   }
//   return p;
// }, {});
// console.log(countedNames);

// Array.prototype.every()
// The every() method tests whether all elements in the array pass the test implemented by the provided function.
//It returns a Boolean value.
// array1.pop();
// console.log(
//   array1.every((v, i, a) => {
//     return v <= 14;
//   })
// );

// Array.prototype.some()
// The some() method tests whether at least one element in the array passes the test implemented by the provided function.
// It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.
// const array = [1, 2, 3, 4, 5];

// // checks whether an element is even
// const even = (element) => element % 2 === 0;

// console.log(array.some(even));
// // expected output: true

//The indexOf() method searches an array for an element value and returns its position.
// Syntax : // array.indexOf(item, start)
// item    Required. The item to search for.
// start   Optional. Where to start the search. Negative values will start at the given position counting from the end, and search to the end.
// Array.indexOf() returns -1 if the item is not found.
// array1.push(14);
// console.log(array1);
// console.log(array1.indexOf(14)); //will return position of element on first match or -1 if test fail

// Array.lastIndexOf() :
// Array.lastIndexOf() is the same as Array.indexOf(), but returns the position of the last occurrence of the specified element.
// array.lastIndexOf(item, start)
// item    Required. The item to search for
// start   Optional. Where to start the search. Negative values will start at the given position counting from the end, and search to the beginning
// console.log(array1.lastIndexOf(14)); //will return position of last occurent of searched element , else -1

// Array.findIndex()
// The findIndex() method returns the index of the first array element that passes a test function.
// var numbers = [4, 9, 16, 25, 29];
// var first = numbers.findIndex(myFunction);

// function myFunction(value, index, array) {
//   return value > 18;
// }

// var employeesName5 = ['ankitkumar','ankitkumar1','ankitkumar2','ankitkumar3'];

//The find() method returns the value of the first array element that passes a test function.
//if no value find returns undefined
// array1.push("kumar");
// console.log(array1);
// console.log(array1.find((v) => typeof v == "string")); //will return first value which pass test
// console.log(array1.filter((v) => typeof v == "string")); //will return all text val

//forEach() calls a provided callbackFn function once for each element in an array in ascending index order.
//It is not invoked for index properties that have been deleted or are uninitialized.
//Return value :  undefined.
// var employeesName5 = [2,3,4,5];
// let message1 = {message:'good morning'}
// employeesName5.forEach((v,i,a)=>{console.log(i + '->' + v);});

//arraymap
//map will perform given callback function on each array element and return array of result
//synax : map(function(element, index, array) { /* ... */ }, thisArg)
// array1.pop();
// console.log(array1);
// console.log(array1.map((v) => v * 2));

// let array4 = ["a", "b", "v", "a", "b", "v", "d", "e"];
// console.log(array4.toString());
// console.log(array4.join(" "));
// console.log(array4.join()); //if nothing is in join() it will work lik toString();
// console.log(array4.slice(1, 2)); //slice always giv return array upto last array point
//we can use slice to create hard copy of array

// array1.pop();
// console.log(array1);

// const newArrat2 = array1; //will creaete soft copy of array1
// console.log(array1.pop()); //so modifying array1 will  effect in new array 2 coz ats softly copied
// console.log(array1); //op : [12,13]
// console.log(newArrat2); //op : [12,13]

// const newArrat2 = array1.slice(); //will creaete hard copy of array1
// console.log(array1.pop()); //so modifying array1 will not effect in new array 2 coz ats gardly copied
// console.log(array1); //op : [12,13]
// console.log(newArrat2); //op : [12,13,14]

//find duplicates
// var findDuplicates = (array1) =>{
//     let array1CloneAndSorted = array1.slice().sort();
//     console.log('array1CloneAndSorted',array1CloneAndSorted);
//     let result = [];
//     for(let i=0;i<array1CloneAndSorted.length-1;i++){
//         if(array1CloneAndSorted[i+1]==array1CloneAndSorted[i]){
//             result.push(array1CloneAndSorted[i]);
//         }
//     }
//     return result;
// }
// console.log('findDuplicates : ',findDuplicates(array1));

// let  findDuplicates22 = array1.slice().sort().filter((val,index,array)=>{if(val==array[index+1]){return val}});
// console.log('findDuplicates22',findDuplicates22);

//length propery :
//use to calculate length of array
//it start counting from 1
// console.log(array1.length);
// console.log((array1.length = 3)); //truncate array from starting
// array1.length = 0; //empty array

//concat
// array3 = array1.concat(array2, "ankit5555");

//copywithin
//syntax :  copyWithin(target, start, end)
array1.push(21, 22, 23, 24, 25);
// console.log(array1);
// console.log(array1.copyWithin(1, 6, 8));

//entries : return array iterator object
// console.log(array1);
// for (const i of array1){
//   console.log("---",i)
// }

// const array1Iterator = array1.entries()
// for(let i of array1Iterator){
//   console.log(i);
// }
// console.log(array1Iterator.next());

//flat : concat all subarray in to single array
array1.push([12,13],[14],[15,16,17],{a:12},[[[1,2,3]]],[[[[[[12,13]]]]]])
// console.log(array1);
// console.log('array1 flat',array1.flat());
// flat method accept depth  in how many level array need to flat
// console.log('array1 flat',array1.flat(3));
// console.log('array1 flat',array1.flat(Infinity));

const array5 = [[12,13],[14],[15,16,17],{a:18},[[[19,20,21]]],[[[[[[23,24]]]]]]];

// const flatArrayFun = (arr)=> {
//  return  arr.reduce((p,v)=>{return p.concat(Array.isArray(v) ? flatArrayFun(v) : v)},[])
// };
// console.log(flatArrayFun(array5))

//Array.from() : 
//Array.from(arrayLike, function mapFn(element, index) { /* ... */ }, thisArg)
// which is same as Array.from(array, mapFun)
// const obj = array5.entries(); //entry create iteratoable object if array
// console.log(Array.from(obj));
// console.log(Array.from("ankit")); //[ 'a', 'n', 'k', 'i', 't' ]
//array from function argument 
// function returnArgumentArr(){
// console.log(arguments, typeof arguments, Array.isArray(arguments))
// console.log(Array.from(arguments))
// }
// returnArgumentArr(12,13,14,{name:"ankit"});



