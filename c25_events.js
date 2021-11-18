//EVENTS
//이벤트란 유저가 페이지상에서 동작할 때 그 동작을 감지(listen)하는 오브젝트들을 말함
//javascript에서 html을 조회하여 볼 수 있는 오브젝트들 중 event들이 있기 때문에 우리는 js를 통해 html상에서 감지되는 events를 listen할 수 있는 것이다.
///querySelector 등의 메소드로 html의 Element를 조회했을 때 나오는 세부요소들 중 'on%'의  이름을 가진 요소들이 Events이다.

const title = document.querySelector(".hello:first-child h1"); //css selector방식
console.log(title);
console.dir(title); // 콘솔에 출력되는 HTML TO javascript Obejects 중 'on%'에 해당하는 애들이 events이다.
//style object는 꽤 중요하다.
//펼쳐보면 style 내부에 있는 property가 상당히 많다

//style변경
title.style.color ="red";
//html 내 Element인 h1의 색상을 js로 제어했음
///js는 브라우저상에서 동작하여 html에 접근함
///고로 js와 브라우저간의 강력한 관계가 중요함을 이해해야함

//하지만 style을 본래 CSS가 제어하는게 맞음을 알고있다. 따라서 위와같은 케이스는 좋지않으며 JS내에서 CSS를 어떻게 조작하는지 뒤에 추가로 공부한다.


// click event :click을 listen
/// .addEventListener 메소드를 감지하고자 하는 우리의 오브젝트 변수에 추가

function handleTitleClick(){
    alert("You clicked Title!!");
};
function handleMouseEnter(){
    title.innerText = "I'm here!";
};
function hadleMouseLeave(){
    title.innerText = "Grab me!";
}
title.addEventListener("click",handleTitleClick); 
title.addEventListener("mouseenter",handleMouseEnter);
title.addEventListener("mouseleave",hadleMouseLeave); 
 // 매개변수1:listen할 이벤트  
 // 매개변수2:listen감지시 수행할 함수

//무슨 이벤트를 listen할 것인지 인자로 정해줘야함

/// 유저가 title을 click할 경우 javascript가 이를 감지하여 fucntion을 호출해주는 원리  (상호작용)






