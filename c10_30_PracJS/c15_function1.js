//Function part1
///fucntion은 어떤 코드를 캡슐화해서 실행을 여러번 할 수 있게 해준다.

function sayGood(){ 
    console.log("Good");
}

sayGood();
sayGood();

///function 활용

function printUserInfo(Name){
    console.log(Name.userName);
    console.log(Name.userAge); 
}

const user = {
    userName : "Brown",
    userAge : 27
};

printUserInfo(user)