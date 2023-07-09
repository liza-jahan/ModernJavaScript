//named import

// import {pi,a} from "./external.js";  
// console.log(pi,a);

// import {pi as varPi,a as varA} from "./external.js";  
// console.log(varPi,varA);



import * as test from "./external.js";  //shob ak satha ante 

console.log(test);
console.log(test.a);

//default
import external,{pi,myFunc}  from "./external.js"; 
console.log(external,pi);
myFunc();