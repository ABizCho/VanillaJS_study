const body = document.querySelector("body");

function listenAndChangeColor(){
    const WW = window.innerWidth;
    if(0 < WW && WW <= 900){
        body.className = "back-color-b";
    } else if (WW >= 900 && WW < 1400){
        body.className = "back-color-p";
    } else{
        body.className = "back-color-y";
    }
}
window.addEventListener("resize",listenAndChangeColor);