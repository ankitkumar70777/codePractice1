














// npm init : initilize application as node apppplication
//npm init intilize folder and create package,json file

//this is exported in another file
// let rect = {
//     perameter : (x,y)=>{
//         return (2*(x+y));
//     },
//     area : (x,y)=>{
//         return (x+y);
//     }
// }

//we have imported modules/function written in another file
//those function is stored in rect veriable as object
//so we use rect.FunctionName
let rect =  require('./10UnderstandNodeModuleExports1');
console.log('rect ::',rect);

function solveRect(l,b){
    console.log('solving for rect with l = '+ l + 
    " and b =  " + b );
    if(l<=0 ||b<=0){
        console.log('rect dimention should be grated than 0');
    }else{
        console.log('area of the rect is '+rect.area(l,b));
        console.log('perameter of the rect is '+rect.perameter(l,b));
    }

} 

solveRect(2,5);
console.log('\n');
solveRect(0,3); 
console.log('\n');
solveRect(3,-3); 

