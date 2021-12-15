const objectLiteral = {};
const objectConstructur = new Object();

//Initialize me obj
const csw = {
  name: "seongwoo",
  job: "dev",
  weapon: "keyboard",
  age: 24,
  greet: function () {
    return `Hi, my name is ${this.name}!`;
  },
};

console.log("Hi");

console.log(csw.name);
console.log(csw["job"]);
console.log(csw.greet());

csw.name = "Seongwoo";
csw["age"] = 26;
console.log(csw.name);
console.log(csw["age"]);

csw.fight = function () {
  return `${this.name} wanna defeat you with his ${this.weapon}`;
};
console.log(csw.fight());

console.log(csw);
delete csw.age;
console.log(csw);

for (let key in csw) {
  console.log(csw[key]);
}

for (let key in csw) {
  console.log(key.toUpperCase() + ":", csw[key]);
}

console.log(Object.keys(csw));

//객체 프로토타입 선언
function Person(name, age) {
  this.name = name;
  this.age = age;
}

//객체 프로토타입의 인스턴스
let p_seongwoo = new Person("csw", 26);

console.log(p_seongwoo.name, p_seongwoo.age);
