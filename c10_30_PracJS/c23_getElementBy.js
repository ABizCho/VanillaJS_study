//태그를 식별할 때 id도 물론 사용하지만 className을 우선시 지정한다. id를 지정해주지 않을때도 많다.

//따라서 getElementById() 뿐 아니라 다른 getElementBy 함수들이 존재하는데, 가장 중요한것이 getElementByClassName() 함수이다.
const classN = document.getElementsByClassName("Hello!");
//class이름을  Hello!로 갖는 모든 h1 Element를 가져온다. // 그리고 다수의 element를 array로 가지고있다. //그말인즉슨 element.property로 한가지 element의 프로퍼티에 직접 접근할 수 없음을 의미한다.//


//TAG 이름을 가지고 가져오는 함수
TN = document.getElementsByTagName("h1"); //이것도 배열로 여러개가져옴
console.log(TN);

//이외에도 몇개 더있다.
