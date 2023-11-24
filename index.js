let a;
let b;
let c;
document.getElementById("b1").onclick = function(){
    a = document.getElementById("aSide").value;
    b = document.getElementById("bSide").value;
    a = Number(a);
    b = Number(b);
    if (a <= 0 || b <= 0){
        document.getElementById("resultC").innerHTML = "O'yin qilmang, ukaxon!"
    }else{
        c = Math.sqrt(Math.pow(a,2) + Math.pow(b,2));
        document.getElementById("resultC").innerHTML = "c tomon: " + c
    }
}

document.getElementById("yuza1").onclick = function(){
    a = document.getElementById("aSide").value;
    b = document.getElementById("bSide").value;
    a = Number(a);
    b = Number(b);
    if (a <= 0 || b <= 0){
        document.getElementById("resultC").innerHTML = "O'yin qilmang, ukaxon!"
    }else{
        c = a*b/2
        document.getElementById("resultC").innerHTML = "Yuza: " + c
    }
}

document.getElementById("b2").onclick = function(){
    a = document.getElementById("aside").value;
    c = document.getElementById("cside").value;
    a = Number(a);
    c = Number(c);
    if (a >= c || a <= 0 || c <= 0){
        document.getElementById("resultb").innerHTML = "O'yin qilmang, ukaxon!"
    }else{
        b = Math.sqrt(Math.pow(c,2) - Math.pow(a,2));
        document.getElementById("resultb").innerHTML = "b tomon: " + b
    }
}

document.getElementById("yuza2").onclick = function(){
    a = document.getElementById("aside").value;
    c = document.getElementById("cside").value;
    a = Number(a);
    c = Number(c);
    if (a >= c || a <= 0 || c <= 0){
        document.getElementById("resultb").innerHTML = "O'yin qilmang, ukaxon!"
    }else{
        b = Math.sqrt(Math.pow(c,2) - Math.pow(a,2));
        b = b * a /2
        document.getElementById("resultb").innerHTML = "Yuza: " + b
    }
}