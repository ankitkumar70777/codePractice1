const fnames = ["a", "b", "c", "d", "e"];
const lname = ["ankit", "ravidas", "ac"];
console.log([...fnames, ...lname]); //add array or object using spread operator
console.log(fnames.concat(lname));
console.log(fnames.copyWithin(4, 0, 1)); // (target,start,end)

//normal for of array iteration
for (const i of fnames) {
  console.log("for of -- ", i);
}

//array.entries convert array into object with is iterble
const iterator = fnames.entries();
console.log({ iterator });
for (const i of iterator) {
  console.log(i);
}



//array.every()
