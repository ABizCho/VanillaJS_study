const title = document.querySelector(".hello:first-child h1");

function handleTitleClick(){
    console.log("You clicked!");
};
function handleWindowResize() {
    document.body.style.backgroundColor = "tomato";
}

//event listener를 add하는 방법은 두가지 방식이 있다.
    //(1) addEventListener 메소드
title.addEventListener("mouseenter",handleTitleClick);
    //(2) .onclick 프로퍼티
title.onclick = handleTitleClick;

///////////////////////
//Window Event

// event엔 단순히 클릭,입력 등만 있는것이 아니다.
/// window의 event도 포함하고 있다. 이에 대한 자세한 내용은 MDN의 Window-Web APIs 문서를 참고하면 확인할 수 있다.

window.addEventListener("resize",handleWindowResize);
