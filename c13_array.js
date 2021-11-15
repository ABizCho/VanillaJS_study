//Arrays : 배열 => 자료구조 : 우리가 어떻게 최선의 방법으로 자료를 정리할지에 대한 방법 및 구조
/// Array : 일련의 자료를 선형의 자료구조인 리스트로 나열해 구조화
//// 리스트의 개별 요소간 타입이 동일하지 않아도 된다. 짬뽕가능
/// const 변수명 = ["A" , "B" , "C" , "D"]
const daysOfWeek = ['mon','tue','wed','thur','fri','sat','sun'];

const nonsense = [1,2,'hello',false,null,true,undefined];

console.log(daysOfWeek,nonsense);


//array 인덱싱
///JS는 수열이 0부터 시작한다.
console.log(daysOfWeek[0]);//출력


//array 추가하기

daysOfWeek[7] = "8thDay"; // (1)인덱싱하여 추가 or 수정
console.log(daysOfWeek);

daysOfWeek.push("9thDay")//(2) array.push(item) 함수로 추가하기
console.log(daysOfWeek)


