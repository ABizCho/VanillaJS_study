//if else 구문

// if(condition){
//     true시 실행
// } else{
//     false 명령부 
// }

//ex
let height = parseInt(prompt("type your height"));

if(isNaN(height)){
    height = parseInt(prompt("No, do type your height"));
    
} else{
    alert("Thanks");
};


//isNaN() 함수 : NaN값인지 boolean으로 반환
const age = parseInt(prompt("How old Are you?"));

console.log(isNaN(age));
