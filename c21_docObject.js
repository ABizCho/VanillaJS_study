// 자바스크립트가 브라우저를 어떻게 움직이게 하는가 ( 브라우저에 초점을 맞춰서 )

// JS를 사용하는 이유는 HTML과 상호작용 하기 위해서이다.

// HTML의 Elements들을 JS를 통해 변경하고 읽을 수 있다.

//브라우저의 콘솔 창에 document를 입력하면 console에서 브라우저에서 렌더링 한 HTML 소스코드를 보여준다. 좀 더 정확히 하자면 document는 브라우저 상에 정의돼있는 하나의 object이며 그 object는 html을 가리키는 객체이다.

//console.dir(document) 를 콘솔에 입력해보면 이것이 단순히 obejct임을 볼 수 있다.

// 정말 중요한 점이 있다. 해당 object는 js의 object 형식이며, js의 눈으로 html을 보여주고 있음을 알 수 있다. 다시말해, js는 HTML에 접근하고 변경 할 수 있다는 뜻이다. 즉, 우리가 js에서 HTML document 객체로부터 title 등의 다양한 property data를 가지고 올 수 있으며 이를 JS를 이용해 활용할 수 있음을 시사한다.

// > document.title = "new title name" 을 콘솔에 입력하면 HTML의 타이틀이 변경되어 브라우저에 바로 반영되는 것을 확인할 수 있다.

//document.title
//document.body
