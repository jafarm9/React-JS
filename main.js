import myDefault ,{ testString , testFunc , testClass } from "./module1.js";
console.log(testString);
console.log(testFunc(5));
let obj = new testClass("Jafar")
obj.handleLog();
console.log(myDefault);



