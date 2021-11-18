//if else if else
let age = parseInt(prompt("How old Are you?"));

if(isNaN(age) || age < 1){
    age = parseInt(prompt("No, do type your age"));
} else if(age <= 18 && age >= 1){ //&& 은 AND(논리곱) 둘 다 T여야 T, ||는 OR(논리합) 하나만 T여도 T
    alert("You are not adult");
} else{
    alert("You are adult");
}