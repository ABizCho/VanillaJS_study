//obeject

///우리가 플레이어라는 데이터를 어떤 구조로 구현해야할까
///개별 변수를 일일이 선언하는것x
///array로 열거하는것x : 열거된 속성의 의미를 설명하기 어려움
//// object : 한가지 객체가 가지는 속성들을 구조화  <-> list : 리스트 내 모든값이 같은 의미를 가짐, ex)요일, 수열, 장바구니 등등
///object를 사용O

//object를 초기화 하기위해 중괄호를 사용한다
/// const objectName = { prop1 : "val1", prop2 : 123, prop3 : true ... } 
const player = {
    name : "horiz.d",
    age : 26,
    stacks : ["R","Python","JS","HTML","css"],
    money : 0
};

// Object내의 속성에 접근하기
///(1) object.property 구조를 이용해 객체내 속성을 특정하여 접근가능
console.log(player);
console.log(player.stacks);
console.log(player.stacks[0]);
///(2) object["property"];
console.log();
console.log(player["stacks"]);
console.log(player["stacks"][1]);

// Object의 property값 수정가능
player.name = "ABizCho";
player["stacks"][4] = "React";
player.age = player.age + 1; // 한해가지남
console.log(player); 


// Object에 property 추가 가능
player.fat = true;
console.log(player.fat);



