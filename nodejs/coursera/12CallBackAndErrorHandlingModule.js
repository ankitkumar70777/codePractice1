// module.exports.rectCalculate = (x,y,callback) =>{
//     if(x <= 0 || y <=0 ){
//         setTimeout(() => {
//                 callback(new Error(`invalid values x : ${x} and y : ${y} `),null);
//         }, 3000);
//     }else{
//         setTimeout(() => {
//                callback(null,{
//                    parameter : (x,y) =>{return (2*(x+y))},
//                    area : (x,y) =>{return (x+y)}
//                }); 
//         }, 3000);
//     }
// }