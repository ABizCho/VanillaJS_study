/* CSS in JS
 앞서 해왔던것처럼 JS 내에서 페이지 스타일을 제어할 수 있다, 하지만 우린 APP의 스타일을 더 세련되게 지정할 수 있는데 그것이 바로 CSS를 사용하여 스마트하게 스타일을 지정하는 이유이다.

style은 되도록 css파일 내에서 제어해줘야한다.

나의 index.html파일은 즉 HTML은 CSS파일과 JS파일 둘을 import한다.
이후의 내용은 cssInJs.css 파일로 넘어가서 진행한다. */

const h1 = document.querySelector(".hello:first-child h1");


// css에서 정의한 .clicked 클래스를 js내에서 아래처럼 h1등 element에 전달한다.
//// element.className = "CSS 클래스명";
console.log(h1.className); // getter : 현재 element에 할당된 css Class를 캐치할 수 있음
h1.className = "clicked"; // setter로서의 className - 즉, className을 이용해 element에 셋팅될 class를 변경할 수 있음
console.log(h1.className);// getter : 현재 element에 할당된 css Class를 채키할 수 있음


///practice : css class - EVENT 연계 심화
function handleTitleClick(){ // Title click에 반응할 function 정의
    const activeClass = "clicked good-font"; //Modified : activeClass에 css Class 두개 "clicked"와 "good-font"를 넣어주기
    //refactoring : css ClassName을 이름으로 향후 사용할 때 발생할 typo에러를 방지하기 위해 정의
    //이것은 변수이므로, activeClass를 사용할 때 typo오류가 발생한다면 console에서 typo 오류임을 알려주기 때문에 큰 도움

    if(this.className === activeClass){ //this의 className이 activeClass 변수 내에 있는 것들일 경우 비워주기
        this.className = "";
    } else{
        this.className =activeClass; //thisdml className이 비어있을경우 activeClass를 할당하기
    }
}
// h1 에게만 event listener 적용
h1.addEventListener("click",handleTitleClick); 

