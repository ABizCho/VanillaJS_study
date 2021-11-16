//fucntion의 매개변수,인자
///매개변수명을 설정하면 해당 자리에 들어온 인자는 해당 매개변수명을 함수의 명령부에서 변수이름으로 사용한다.

////사용자정의함수 ex1
function sayHello(nameOfPerson, age){
    console.log("Hello my name is " + nameOfPerson + " and I'm "+age+" years old.");
};

sayHello("cho",26);
sayHello("yang",22);
sayHello("paul",24);

////사용자정의함수 ex2 
function plus(firstNumber,secondNumber){
    console.log(firstNumber+secondNumber);
};

plus(10,12);
plus(); //NaN 출력 (Not A Number)


//Object 내의 함수(모듈) 생성,사용
///this 는 해당 모듈을 품고있는 객체명을 지정

//// ex1 : this 활용
const player = {
    name : "Zed",
    age : 23,
    playerHello : function() {
        console.log("Hello "+ this.name + " I'm Developer. You inserted "+this.age+" in your age Property.");
    }
}

player.playerHello()

//// ex2 : 외부변수를 인자로
const user = {
    name : "seongwoo",
    age : 26,
    Hello : function(targetPersonName){
        console.log("Hello " + targetPersonName + ", I'm " + this.name +".");
    }
};

user.Hello("Jinx");
user.Hello("VI");

