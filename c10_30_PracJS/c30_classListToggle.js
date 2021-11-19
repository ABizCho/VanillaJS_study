// classList.toggle()
/// (1) 클래스리스트의 toggle 메소드는 클래스리스트 내에서 특정 클래스의 존재여부를 확인하고
/// (2) 클래스 리스트 내 해당 클래스가 존재하지 않을 시 리스트에 추가 
/// (3) 클래스 리스트 내 해당 클래스가 존재할 시 리스트에서 제거를 수행하는 매우 똑똑한 메소드이다.

///toggle 메소드를 사용한 c29_classList.js 리팩토링
const h1 = document.querySelector(".hello:first-child h1");

function handleTitleClick(){ 
     
    //여기선 clicked 클래스를 단 한번만 사용하므로
    // clickedClass 변수에 할당하지 않는게 효율적인 것이다.
    h1.classList.toggle("clicked"); // 단 한줄의 코드로 c29에서 조건문으로 구현한 class 추가/제거 구현

}

h1.addEventListener("click",handleTitleClick); 
