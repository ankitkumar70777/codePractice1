import { readFileSync,writeFileSync } from "fs";

// read file
const readFile = readFileSync("./notes.txt","UTF-8");
console.log('readfile',readFile);

write file
writeFileSync("./notes2.txt",`here is resule ${readFile}`);
