let count = 0;

document.getElementById("counting").onclick = function (){
    count += 1
    document.getElementById("sanoq").innerHTML = count;
}

document.getElementById("reset").onclick = function (){
    count = 0;
    document.getElementById("sanoq").innerHTML = count;
}