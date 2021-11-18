//if else if else
/// else if의 조건에 중복이 발생한다면 상단에 있는 조건을 실행한다. (js는 위에서 아래로 읽음), 조건문의 분기는 단일선택임
let age = parseInt(prompt("How old Are you?"));

if(isNaN(age) || age < 1){
    age = parseInt(prompt("No, do type your age"));
} else if(age <= 18 && age >= 1){ //&& 은 AND(논리곱) 둘 다 T여야 T, ||는 OR(논리합) 하나만 T여도 T
    alert("You are not adult");
} else if(age===100){
    alert("wow..100 years old")
} else {
    alert("You are adult");
}