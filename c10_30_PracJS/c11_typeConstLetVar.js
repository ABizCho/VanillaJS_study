//js const = constant = 상수 = 값이 바뀌지 않고 고정되는 변수임 => 추후 변경불가
//js let = 변수 = 추후 값을 변경시킬 수 있는 변수를 선언
/// const is 'immutable(불변)' let is 'mutable'
//js에선 변수표기법으로 camelCase를 주류로 사용한다.
// const를 베이스로 쓰고, 업데이트할 변수가 있을 때 let을 사용한다.
const aInt = 5;
const bInt = 2;
let firstName = '조';
let lastName = '성우';
var newVar = 123; 
//var변수는 원하면 어디서든 업데이트 할 수 있다.
// 그리고 var은 '변수 재선언' 또한 가능하다. const와 let은 변수 재선언이 불가능하다.
/// const와 let이 탄생한 이유는 변수 재선언이 불가능한 변수형을 이용해 데이터를 무결하게 보존하기 위함이다.
//// 따라서 var을 사용하는 것은 구시대적인 방식임, const와 let을 이용하도록 하자.


console.log("laalalala"); // 브라우저 콘솔에 log(메시지) 넘기기
console.log(aInt + bInt);
console.log(aInt * bInt);
console.log(aInt / bInt);
console.log(firstName + lastName);

firstName = '양';
lastName = '해루';

console.log("Your New name is",firstName+lastName);

