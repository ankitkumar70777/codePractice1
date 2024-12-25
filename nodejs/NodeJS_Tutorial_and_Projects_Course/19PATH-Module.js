import path from "path";
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

try {
    

console.log("dirname ", dirname(fileURLToPath(import.meta.url))); 

// to get pathname / dirname in es6 module system use import.meta
/**{
  dirname: '/home/ankitkumar/Documents/ankitkumar/codePractice1/nodejs/NodeJS_Tutorial_and_Projects_Course',
  filename: '/home/ankitkumar/Documents/ankitkumar/codePractice1/nodejs/NodeJS_Tutorial_and_Projects_Course/19.PATH-Module.js',
  resolve: [Function: resolve],
  url: 'file:///home/ankitkumar/Documents/ankitkumar/codePractice1/nodejs/NodeJS_Tutorial_and_Projects_Course/19.PATH-Module.js'
}
 */
console.log(import.meta);

// The path.basename() method returns the last portion of a path, similar to the Unix basename command
console.log('path.basename', path.basename('/home/ankitkumar/Documents/ankitkumar/codePractice1/nodejs/NodeJS_Tutorial_and_Projects_Course/19.PATH-Module.js'));
console.log('path.basename', path.basename('/home/ankitkumar/Documents/ankitkumar/codePractice1/nodejs/NodeJS_Tutorial_and_Projects_Course'));
// remove file entension from filename
console.log('path.basename', path.basename('/home/ankitkumar/Documents/ankitkumar/codePractice1/nodejs/NodeJS_Tutorial_and_Projects_Course/19.PATH-Module.js','.js'));

// path.delimiter
/*
 ; for Windows
: for POSIX

it is useful while getting path arrays
 */
console.log('path.delimiter', path.delimiter);

console.log('path array',process.env.PATH.split(path.delimiter));


//path.dirname(path) : use to return dirname of path 
console.log('path.dirname', path.dirname('/home/ankitkumar/Documents/ankitkumar/codePractice1/nodejs/NodeJS_Tutorial_and_Projects_Course/19.PATH-Module.js'));
console.log('path.dirname', path.dirname('/home/ankitkumar/Documents/ankitkumar/codePractice1/nodejs/NodeJS_Tutorial_and_Projects_Course'));

// path.extname(path)
console.log('path.extname', path.extname('/home/ankitkumar/Documents/ankitkumar/codePractice1/nodejs/NodeJS_Tutorial_and_Projects_Course/19.PATH-Module.js'));

// The path.format() method returns a path string from an object. This is the opposite of path.parse().
console.log("path -- ",path.format({
    dir: '/home/user/dir',
    base: 'file.txt',
  }));

//   path.join()
// console.log('path',path.join("/a","b","c","/d"));

// path normalize , path.normalize(path)
// console.log('path.normalize', path.normalize('/a/b/c///d/e/../f'));




// path parce
/*
The returned object will have the following properties:

dir <string>
root <string>
base <string>
name <string>
ext <string>
*/
// console.log("parce path ",path.parse('/home/user/dir/file.txt'));


// get relative path between two directories
console.log('get relative path',path.relative("/home/ankitkumar/Documents/ankitkumar/",'/home/ankitkumar/Documents/ankitkumar/codePractice1/nodejs/NodeJS_Tutorial_and_Projects_Course/19.PATH-Module.js'));


// path sepetrater
console.log("path sepreter",path.sep);

} catch (error) {
    console.log('error------------------',error);   
}