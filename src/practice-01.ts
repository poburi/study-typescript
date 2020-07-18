// 일반 객체를 interface로 타입 설정하기

interface Person {
  name: string;
  age?: number; // 물음표는 설정해도 되고 안해도 되고
}

// interface Developer {
//   name: string;
//   age?: number;
//   skills: string[];
// }

// 상속 가능
interface Developer extends Person {
  skills: string[];
}

const person: Person = {
  name: "김사람",
  age: 20,
};

const developer: Developer = {
  name: "박개발",
  skills: ["js", "react"],
};

const people: Person[] = [person, developer];
console.log(people);
