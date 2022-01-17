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
console.log(array1);
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

const arrayAnkit = ["ankitkumar", "amitkumar", "anilkumar", "raju"];
// console.log("arrayAnkit", arrayAnkit);
// console.log(arrayAnkit.splice(1, 1, "shimala"));
// console.log("arrayAnkit", arrayAnkit);

//Merging (Concatenating) Arrays
//The concat() method does not change the existing arrays. It always returns a new array.
//concat also takes string as value to mearge with array
// console.log(array1);
const concatedArray = array1.concat(arrayAnkit, "1111", "2222");
console.log(concatedArray);

//Slicing an Array make new array of sliced array
//The slice() method creates a new array. It does not remove any elements from the source array.
//If the end argument is omitted, like in the first examples, the slice() method slices out the rest of the array.
//slice work on orignal array

var slicedArray = concatedArray.slice(2);
console.log("slicedArray--", slicedArray);
// if two values given it sliced between those and rturn new array
console.log(slicedArray.splice(3, 9));
console.log("slicedArray--", slicedArray);

//hard copy of array using slice
const slicedArrayCopy = slicedArray.slice();
console.log("slicedArrayCopy-----", slicedArrayCopy);

//automatice string conversion of array
//array automaticaly convert to toStrong() if you print it iinto webpage
// document.write(newArray3);
//All JavaScript objects have a toString() method.
//and array is speational type of object in js
//thatsa why tyoe of array is obbejct in js

//i was here

// //JavaScript Sorting Arrays
// var array5 = ['raju','subhash','amit','ankitkumar','anil'];
// console.log('intinial',array5);
// //sort method sort exisitng array alphabetically
// console.log('exisiting modifies',array5.sort());
// console.log('remain modified',array5);

// //reverse() also odifies exisiting array reverse alphabetically
// console.log('reversed',array5.reverse());

// //numaic sortng
// var marks = [12,12,100,8,15];
// var marks2 = [12,12,100,8,15];
// console.log('marks',marks);
// console.log(marks.sort(function(a,b){return a-b}));

// //numaic sortng in reverse
// console.log('marks',marks);
// console.log('marks',marks.sort(function(a,b){return b-a}));

//  //to find lowest and height value sort array first and then gert index 0 value r last value

//  var sortedNumaricArray = marks.sort(function(a,b){return a-b});
// // now points[0] contains the highest value
// // and points[points.length-1] contains the lowest value
// console.log('sortedNumaricArray',sortedNumaricArray);
// var sortedNumaricArrayReverse = marks.sort(function(a,b){return b-a});
// console.log('sortedNumaricArrayReverse',sortedNumaricArrayReverse);

// //best way to find max min numbr in array to use Math.max()

// var points = [40, 100, 1, 5, 25, 10];
// function mayMaxArray(points){
//     // console.log("hi",points);
//     return Math.max.apply(null,points);
// }
// console.log(mayMaxArray(points));

// //The apply() method takes arguments as an array.

// /*

// 143

// apply accepts an array and it applies the array as parameters to the actual function. So,

// Math.max.apply(Math, list);
// can be understood as,

// Math.max("12", "23", "100", "34", "56", "9", "233");
// So, apply is a convenient way to pass an array of data as parameters to a function. Remember

// console.log(Math.max(list));   # NaN
// will not work, because max doesn't accept an array as input.

// There is another advantage, of using apply, you can choose your own context. The first parameter, you pass to apply of any function, will be the this inside that function. But, max doesn't depend on the current context. So, anything would work in-place of Math.

// console.log(Math.max.apply(undefined, list));   # 233
// console.log(Math.max.apply(null, list));        # 233
// console.log(Math.max.apply(Math, list));        # 233
// */

// //Math.min.apply to find the lowest number in an array:
// function myMinArray(points){
//     return Math.min.apply(null,points);
// }
// console.log(myMinArray(points));

// //Sorting Object Arrays

// let cars1 = [
// {type:"Volvo", year:2016},
// {type:"Saab", year:2001},
// {type:"BMW", year:2010}
// ];
// console.log('cars1111',cars1);

// let sortankit = function (cars1){
//     console.log('insideSortankit',cars1);
//     cars1.sort(function(a,b){
//         var x = a.type.toLowerCase();
//         var y = b.type.toLowerCase();
//         console.log('x',x);
//         console.log('y',y);
//         if (x < y) {return -1;}
//         if (x > y) {return 1;}
//         return 0;
//     });
// }

// sortankit(cars1);
// console.log('insideSortankit',cars1);

//this is q t ask navin

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

//for ref
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

// var numbers2 = [45, 4, 9, 16, 25];
// //numbers2.forEach(function(value){console.log(value)});
// numbers2.forEach((value) => {console.log(value)});

//Converting a for loop to forEach
// const items = ['item1', 'item2', 'item3']
// const copyItems = []

// // before
// // for (let i = 0; i < items.length; i++) {
// //   copyItems.push(items[i])
// // }

// // after
// items.forEach(function(item){
//   copyItems.push(item)
// })
// console.log('copyItems',copyItems);
// console.table(copyItems);

//array.map

var numbers6 = [45, 4, 9, 16, 25];
// var newArray6 = numbers6.map(increaseVal);
// function increaseVal(val,index,array){
//     console.log(val);
//     if (val == 9){
//          val=val*2;
//     }
//     return val+":"+index;
// }
//  console.table(newArray6);

//Array.filter()

//The filter() method creates a new array with array elements that passes a test.
// console.log('numbers6',numbers6);
// numbers6FilteredArray = numbers6.filter((value,index,array)=>{return value<25});
// console.log('numbers6FilteredArray',numbers6FilteredArray);

//Array.prototype.reduce() :
// The reduce() method works from left-to-right in the array
// let array8 = [1, 2, 3, 4];
// function adding1(accumulator,curruntValue,curruntIndex,sourceAray){
//     console.log('accumulator',accumulator);
//     console.log('curruntValue',curruntValue);
//     console.log('curruntIndex',curruntIndex);
//     console.log('sourceAray',sourceAray);
//     return accumulator+curruntValue;
// }
// console.log('adding8',array8.reduce(adding1));

// The reduce() method can accept an initial value:

// var sum = numbers1.reduce(myFunction, 100);

// Array.reduceRight()
// The reduceRight() method runs a function on each array element to produce (reduce it to) a single value.The reduceRight() works from right-to-left in the array.

// Array.prototype.every()
// The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
// const isBelowThreshold = (currentValue) => currentValue < 40;

// const array1 = [1, 30, 39, 29, 10, 13];

// console.log(array1.every(isBelowThreshold));
// // expected output: true

// Array.prototype.some()
// The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.
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
// var fruits25 = ["Apple", "Orange", "Apple", "Mango"];
// console.log(fruits25.indexOf('Apple'));

// Array.lastIndexOf() :
// Array.lastIndexOf() is the same as Array.indexOf(), but returns the position of the last occurrence of the specified element.
// array.lastIndexOf(item, start)
// item    Required. The item to search for
// start   Optional. Where to start the search. Negative values will start at the given position counting from the end, and search to the beginning
// var fruits = ["Apple", "Orange", "Apple", "Mango"];
// var a = fruits.lastIndexOf("Apple");

//The find() method returns the value of the first array element that passes a test function.

// var numbers = [4, 9, 16, 25, 29];
// var first = numbers.find(myFunction);

// function myFunction(value, index, array) {
//   return value > 18;
// }

// Array.findIndex()
// The findIndex() method returns the index of the first array element that passes a test function.
// var numbers = [4, 9, 16, 25, 29];
// var first = numbers.findIndex(myFunction);

// function myFunction(value, index, array) {
//   return value > 18;
// }

// var employeesName5 = ['ankitkumar','ankitkumar1','ankitkumar2','ankitkumar3'];

// //access last element :
// console.log(employeesName5[employeesName5.length-1]);
// console.log(Array.isArray(employeesName5));
// let x55 = employeesName5.toString();
// console.log(x55);
// console.log(x55.split(','));
// console.log(employeesName5.join('*'));

//forEach() calls a provided callbackFn function once for each element in an array in ascending index order.
//It is not invoked for index properties that have been deleted or are uninitialized.
//Return value :  undefined.
// var employeesName5 = [2,3,4,5];
// let message1 = {message:'good morning'}
// employeesName5.forEach((v,i,a)=>{console.log(i + '->' + v);});

//arraymap

// let array2 = [2,4,6,8,0];
// let array3 = array2.map((v,i,a)=>{
//     return v+2;
// });
// console.log("array3",array3);

// let array1 = ["a", "b", "v", "a", "b", "v", "d", "e"];
// console.log(araray1.toString());
// console.log(araray1.join(' '));
// console.log(araray1.join());//if nothing is in join() it will work lik toString();
// console.log(araray1.slice(1,2));//slice always giv return array upto last array point
//ex this will start from element 1 and upto element 1
// let array2 = [12,14,2,0,6,6,5,2,89,2];
// array2.sort(function(a,b){
//     console.log('a:',a,'b:',b);
//     let x = a-b;
//     console.log('x',x);
//     return x;
// });
// console.log('array2',array2);
// array1[array1.indexOf('ankit',2)]='bata';
//indexOf always return avlue of only first occurance
//we can define starring point for index of
// console.log('array1',array1);
// console.log('slice',array1.slice());

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

// const findDuplicates = (arr) => {
//   let sorted_arr = arr.slice().sort(); // You can define the comparing function here.
//   // JS by default uses a crappy string compare.
//   // (we use slice to clone the array so the
//   // original array won't be modified)
//   let results = [];
//   for (let i = 0; i < sorted_arr.length - 1; i++) {
//     if (sorted_arr[i + 1] == sorted_arr[i]) {
//       results.push(sorted_arr[i]);
//     }
//   }
//   return results;
// }

// let  findDuplicates22 = array1.slice().sort().filter((val,index,array)=>{if(val==array[index+1]){return val}});
// console.log('findDuplicates22',findDuplicates22);
// // map()

// let findDuplicates23 = [];
// array1.slice().sort().forEach((v,i,a)=>{if(v==a[i+1]){findDuplicates23.push(v)}});
// console.log('findDuplicates23',findDuplicates23);

// let listOfIndexAndVal = [];
// array1.forEach((v,i,a)=>{
// console.log(v,i);
// });

//what is map in js
