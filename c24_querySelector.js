// .querySelector() 메소드 -단하나
/// 만약 쿼리가 여러개 걸릴경우 가장 첫번째로 걸린것 단하나만 나온다.
// .querySelectorAll() 메소드 -모두

///쿼리셀렉터는 h1:first-chile와 같은 css셀렉터(선택자)를 사용할 수도있다.

////id의 경우 #idName 을 사용한다.


//상대적으로 가장 편리한 방식의 element get 수단

///querySelector() 메소드는 element를 CSS방식으로 검색할 수 있다.
////이말이 무엇인가?, hello라는 class 내부에(내 경우 div에 먹여놓음) 있는 h1을 가지고 올 수 있다는 것을 의미한다.
const title = document.querySelector(".hello h1") //class명이 hello인 태그 내의 h1태그를 가져오라 (css selector)

// query셀렉터 지정방식 //
// 클래스명 : .Name /  태그명 : Tag //
//id의 경우 #idName 을 사용한다. //
// 상위로부터 뒤로갈수록 하위분류 //

const title2 = document.querySelector("div h1"); 

console.log(title);// 결과적으로 잘 가져온것을 알 수 있다.
console.log(title2);


//queryselector로 아이디 지정 호출 
const iD = document.querySelector("#title");
const Id = document.getElementById("title");

console.log(iD,Id);