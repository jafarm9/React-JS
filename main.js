function test(x,y){
    console.log(x+y);
}
const test2 = (x,y)=>{               //ES6 Arrow function
    console.log(x+y);
}
test(8,7)
test2(4,2)

const test3 = y => y*4  // ES6 Arrow function   وقتی یک متغییر باشد این طوری مینویسیم

 console.log(test3(5));

// if(true){
//     let y = 3
//     const z = 4
//     var x = 2

//     x=5
//     y=6
//     // z=12
// }
//     console.log("x:"+x);
//     console.log("z:"+z);
//     console.log("y:"+y);
     


// class Rectangle {
//     constructor(width , height){
//          this.width = width
//          this.height = height
//     }

//     render(){
//         console.log(this.width , this.height);
        
//     }
// }

// // var obj = new Rectangle(10 , 20)
// // // console.log(obj.width , obj.height);
// // obj.render()

// class coloredRectangle extends Rectangle{
//     constructor(width , height , color){
//         super(width , height)
//         this.color = color
//     }
//     show(){
//         return "<div style='width:"+this.width+"px;height:"+this.height+"px;background:"+this.color+"'></div>"
//     }
// }
// var obj = new coloredRectangle(500 , 600 , "green")
// var obj2 = new coloredRectangle(300, 400 , "blue")
// document.getElementById("myDiv").innerHTML = obj.show()
// document.getElementById("myDiv2").innerHTML = obj2.show()
