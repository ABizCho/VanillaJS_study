//returns란 무엇인가?
///console.log()는 콘솔에 무언가를 log(기록하여 보여줌)하는 것이다.
///return은 function의 결과값을 함수작동의 결과로 반환해주는 것 
////fucntion의 결과를 스크립트(코드) 내에서 반환받아 data로 활용하고 싶기에 return을 사용한다.
////function은 return을 만나면 결과값을 반환하고 종료한다 => 즉, 함수내 return 이후의 명령코드는 실행되지 않는다.

//// ex1
const age = 18;
function calculatorKrAge(A){
    return A + 2 ;
};

const KrAge = calculatorKrAge(age);

console.log(KrAge);

//ex2 calculator

const calculator = {
    plus : function(a,b){
        return a + b;
    },
    minus : function(a,b){
        return a - b;
    },
    times : function(a,b){
        return a * b ;
    },
    divide : function(a,b){
        return a / b ;
    },
    power : function(a,b){
        return a ** b ;
    }
}

const ResultCal = calculator.plus(15,23);
console.log(ResultCal);

const plusResult = calculator.plus(2,3);
const minusResult = calculator.minus(plusResult,10);
const timesResult = calculator.times(minusResult,5);

console.log(timesResult);
