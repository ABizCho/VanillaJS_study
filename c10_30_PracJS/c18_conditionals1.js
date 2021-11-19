// 조건문 if else 실습


//prompt함수
///현재는 거의 쓰지 않는 함수
////CSS적용불가,안이쁨,js를 멈추게함,팝업을 차단당하기도함
const age = parseInt(prompt("How old are you?"));
console.log(age);
console.log(typeof age);
// prompt()는 사용자에게 창을 띄워주는 함수이다 / 첫번째 인자로 안내할 메시지(string)을 넣어주고 창을 통해 값을 입력받는다 /이 때 입력받는 값은 string(문자열)을 받아 반환한다. / prompt가 실행되고 있을 때 브라우저상의 js를 일시정지시킨다.
/// typeof 변수명 : 변수의 타입을 반환한다.

///parseInt() 함수 : 구문을 분석해 string을 정수로 타입변환
console.log(parseInt(age));

