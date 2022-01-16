//When an error occurs, JavaScript will normally stop and generate an error message.
try { 
//statement lets you test a block of code for errors.
//The try statement allows you to define a block of code to
// be tested for errors while it is being executed.
  let x = undefined;

  if (!x) {
    throw "blank x";
    //throw statement lets you create custom errors
    //If you use throw together with try and catch, you can control program flow and generate custom error messages.
  }
  console.log(x);
} catch (err) {
  console.log(    `err = ${err} : err.name = ${err.name} : err.message =  ${err.message}` );
  //catch statement lets you handle the error.
    //The catch statement allows you to define a block of code to be executed, 
    //if an error occurs in the try block.
} finally {
  console.log("task done");
  //The finally statement lets you execute code, after try and catch, regardless of the result:
}
//JavaScript has a built in error object that provides error information when an error occurs.
//The error object provides two useful properties: name and message.