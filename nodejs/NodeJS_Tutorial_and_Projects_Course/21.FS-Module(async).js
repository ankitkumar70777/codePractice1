import {readFile,writeFile } from "fs";

const writeFileFn = (result)=>{
    writeFile("./notes2.txt",result,(err)=>{
        if(err){
            throw err;
        }
        console.log('file write successful');
    })
}

const readFileFn = (err,result)=>{
    if(err){
        throw err;
    }
    console.log('readfile',result);
    writeFileFn(result)
};

readFile("./notes.txt","UTF-8",readFileFn);