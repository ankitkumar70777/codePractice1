/*
1) each file in node  application  becomes its own node module
2) module veriable(module object) gives access to currunt module defination in a file
3)  module.exports  variable determines the export from currunt module
4)  module.export export veriables/function so other files/module can import it
5)  when you need to import module exported by another function you use 
 require("./moduleName");
6) module type :  
    a) file based
    b) core modules : part of core node 
        : for code module we only specify name
    ex : path,fs,os,util and few other
    c) external node modules : 
        - third patry module
        - install using npm
        - node_module folder in you node application
7) 
*/
//you can require/import single module value exported by module

// const {area} = require("./9NodeModuleExport");
// const {perimeter} = require("./9NodeModuleExport");
// console.log(area);
// console.log(perimeter);
// let areaResult = area(5,5);
// let perimeterResult = perimeter(5,5);
// console.log(areaResult);
// console.log(perimeterResult);

//or you can  require/import whole module from then it will return object of all values you exported the you can use it

// const $9NodeModuleExportjs = require("./9NodeModuleExport");
// console.log('$9NodeModuleExportjs :::',$9NodeModuleExportjs);
 

 //insted of module.exports you can use only exports