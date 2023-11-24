// console.log("some text")
// // alert("step to fullstack development")

// window.alert("reklama")

// let texts = "Some text moving";

// document.getElementById("m1").innerHTML = texts;

// let ism = window.prompt("Ismingiz?")

// document.getElementById("m1").innerHTML = "Ismingiz: " +  ism;

let username;

document.getElementById("myButton").onclick = function(){
    username = document.getElementById("myText").value;
    document.getElementById("myLabel").innerHTML = "Assalamu alaykum, " + username
}
