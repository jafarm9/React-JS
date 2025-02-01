import { testNumber as tn } from "./module2.js";       // asبرای تغییر اسم متغییر در ایمپورت از 

export var testString = "hello i am a string variable";

export const testFunc = ()=>{
    return "hello i am a function and x:"+tn
}

export class testClass{
    constructor(x){
        this.x = x
    }
    handleLog(){
        console.log("this is " +this.x+ " in test class");
        
    }
}

export default "i am default"