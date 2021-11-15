//js const = constant = 상수 = 값이 바뀌지 않고 고정되는 변수임 => 추후 변경불가
//js let = 변수 = 추후 값을 변경시킬 수 있는 변수를 선언
//js에선 변수표기법으로 camelCase를 주류로 사용한다.
const aInt = 5;
const bInt = 2;
let firstName = '조';
let lastName = '성우';

console.log("laalalala"); // 브라우저 콘솔에 log(메시지) 넘기기
console.log(aInt + bInt);
console.log(aInt * bInt);
console.log(aInt / bInt);
console.log(firstName + lastName);

firstName = '양';
lastName = '해루';

console.log("Your New name is",firstName+lastName);
