//classList란?
/// html의 object가 가지는 모든 class를 리스트라는 구조로 용이하게 확인/제어 하기 위해 존재하는 class의 List
/// classList는 자신만의 다양한 Method를 가지며 이를 활용하여 개별 class들을 제어할 수 있다.
/// 메소드 등은 MDN의 DomTokenList 문서를 확인
/// https://developer.mozilla.org/ko/docs/Web/API/DOMTokenList


//앞선 c28_cssInJs.js 코드의 심화prac을 classList와 classList의 메소드를 활용하여 refactoring 한 모습
const h1 = document.querySelector(".hello:first-child h1");


//refactored
function handleTitleClick(){ 
    const clickedClass = "clicked"; 

    if(this.classList.contains(clickedClass)){ // classList와 classList의 메소드인 contains()를 활용하여 refactor 
        this.classList.remove(clickedClass); // classList와 remove 메소드를 사용하여 refactor
    } else{
        this.classList.add(clickedClass); // 결과적으로 this의 classList 내 많은 class들 중 clickedClass에 해당하는 클래스에 대해서만 조작하였기에, 그 외에 this라는 object가 가지는 클래스들의 상태에 대해서는 변함없이 유지 가능하다. 
    }
}

h1.addEventListener("click",handleTitleClick); 

//결과적으로 우리는 clicked(=clickedClass) 클래스를 동적으로 적용/제거하면서 html에서 h1에 할당한 purple-back-font 클래스를 지킬 수 있었다. 

