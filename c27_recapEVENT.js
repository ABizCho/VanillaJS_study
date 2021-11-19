const h1 = document.querySelector(".hello:first-child h1");
h1.style.color = "red"
console.dir(h1);


// function handleTitleClick(){
//     if(h1.style.color === "red"){
//         h1.style.color = "yellow";
//     } else {
//         h1.style.color = "red";
//     }
    
// }

///// 위의 코드를 아래로 리팩토링
function handleTitleClick(){
    const currentColor = h1.style.color // h1의 스타일 상태 그자체를 currentColor 변수에 저장
    let newColor;
    if(currentColor === "red"){
        newColor = "yellow";
    } else {
        newColor = "red";
    }
    
}

h1.addEventListener("click",handleTitleClick);