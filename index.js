let son;
let sanoq = 0;

document.getElementById("btncha").onclick = function (){

    son = document.getElementById("sonde").value;
    
    son = Number(son)
    if (son <= 0){
        document.getElementById("natija").innerHTML = "Natural son kiriting";
    } else if (son == 1){
        document.getElementById("natija").innerHTML = "Tub son emas";
    }else{
        for (let i = 2; i < Math.sqrt(son)+1; i++) {  
            if (son % i == 0){
                sanoq = 1;
                document.getElementById("natija").innerHTML = "Tub son emas";
            }
        }
    }
    if (sanoq == 0){
        document.getElementById("natija").innerHTML = "Tub son";
    }
    sanoq = 0;
}
