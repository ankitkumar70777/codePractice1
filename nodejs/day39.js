"use strict";
// const postData = [
//     {title : '1'},
//     {title : '2'}
// ] ;

// const getPost = (status) => {
//         setTimeout(()=>{
//             console.log('status',status);
//             if(status === 200 ){
//                 console.log('postData',postData);
//             }else{
//                 console.log('err! spmething went wrong');
//             }
//         },3000);
// }; 

// getPost(200);



// const postData = [
//     {title :  'movie1' },
//     {title : 'movie2'}
// ]; 

// const getPost = (status,cbFun) => {
//         setTimeout(()=>{
//             if(status === 200){
//                 cbFun(undefined,postData);
//             }else{
//                 cbFun('unsuccessful req',undefined);
//             }
//         },2000);
// }

// function cbFun(err,data){
//         if(err){
//             console.log('err',err);
//         }else{
//             console.log('data',data);
//         }
// }

// getPost(200,cbFun);



//OOPS programming 

// let tigerObj = {
//     name : 'sheru',
//     age : 10,
//     displayName : function (){
//         return this.name;
//     }
// }

// console.log(tigerObj.displayName());


//class is object in itselt
//use to creat blueprint and prototype
//class name should be first Capital

// classes
// class Animal{
//     constructor(name,age,type) {
//         this.nameOfAn = name;
//         this.ageOfAn = age;
//         this.typeOfAn = type;
//         this.showMyAge = function (){
//             return this.ageOfAn;
//         } ;
//     }

//     showMyage22(){
//         return this.ageOfAn;
//     }
      
// }

// let dig = new Animal('sheru',12,'animal') ;
// let cat = new Animal('chiu',3,'animal') ;

// console.log(dig.nameOfAn);
// console.log(cat.ageOfAn);
// console.log(cat.showMyAge());
// console.log('age of cat ', cat.showMyage22());


// //inheritance

// class Bird extends Animal{
//     constructor(name,age,type,canFly){
//         super(name,age,type);
//         this.canBirdFly = canFly;
//         this.allValReturn = ()=>{
//             return `my name is ${this.nameOfAn} and i can ${this.canBirdFly}`;
//         }
//     }
// }

// let chimani = new Bird('chimani',2,'bird',true);
// console.log(chimani.allValReturn());


//object reference

// function outer(){
//     var x = 5;
//     return   function inner(yourLockyNumber){
//         console.log('your lucky number is',x+yourLockyNumber);
//         return;
//     } ;
// }

// console.log(outer);
// console.log(outer());
// console.log(outer()(5));