const T = document.getElementById("title"); // id가 "title"인 element를 가져온다.
console.log(T);

console.dir(T); // 인자로 주는 Element의 상세요소리스트 를 보여주는 함수, 이 리스트는 element 내부 세부요소를 이르며,이는 HTML에 표현되어 있는 것들이다, 이 모든 요소들을 js로 조작할 수 있다.

T.innerText = "Got ya!"; //HTML의 Element인 <H1>id="title"을 T에 저장했다./ 이 T를 이용해 해당 엘레멘트의 내부 프로퍼티를 직접 변경조작했다. / 이후 console에서 .dir을 통해 엘레멘트 내부요소를 조회해보면 got ya로 바뀐 것을 알 수 있다./ 즉 JS를 통해 HTML을 변경한 것이다!!! // 이것은 엘레멘트를 식별 가능한 id를 부여하여 js로 접근할 수 있었기에 가능한 일이었다.

console.log(T.id);
console.log(T.className); // console.log와 property를 이용해 엘레멘트에 관한 모든것을 js로 확인할 수 있다.

