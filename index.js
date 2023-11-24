// console.log("some text")
// // alert("step to fullstack development")

// window.alert("reklama")

// let texts = "Some text moving";

// document.getElementById("m1").innerHTML = texts;

// let ism = window.prompt("Ismingiz?")

// document.getElementById("m1").innerHTML = "Ismingiz: " +  ism;

// let username;

// document.getElementById("myButton").onclick = function(){
//     username = document.getElementById("myText").value;
//     document.getElementById("myLabel").innerHTML = "Assalamu alaykum, " + username
// }

// let mynum = 5

// console.log(mynum,typeof mynum)
// mynum = Boolean(mynum)
// console.log(mynum,typeof mynum)

// let pages = "120"
// pages  = pages + 1
// console.log(typeof pages,pages)

// pages = Number(pages)
// pages ++
// console.log(typeof pages,pages)

// let is_open = false

// console.log("state of opened: ",is_open)

// is_open = String(is_open)

// console.log("state of eponed: ",is_open, typeof is_open)
const PI = 3.14;
let radius;
let lenofcicrle;
document.getElementById("myButton").onclick = function(){
    radius = document.getElementById("radius").value;
    lenofcicrle = 2*PI*Number(radius);
    document.getElementById("lenofcircle").innerHTML = lenofcicrle;
}