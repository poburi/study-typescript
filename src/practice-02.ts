// Type Alias 사용하기

/*
type은 특정 타입에 별칭을 붙이는 용도로 사용.
객체, 배열 등을 위한 타입을 설정할 수 있다.
*/

type Person1 = {
  name: string;
  age?: number;
};

// & 는 Intersection 으로서 두개 이상의 타입들을 합쳐줍니다.
type Developer1 = Person & {
  skills: string[];
};

const person1: Person1 = {
  name: "포부리",
};

const develper1: Developer = {
  name: "개발새발",
  skills: ["react", "vue", "node.js"],
};

type People1 = Person1[]; // Person1[]을 앞으로 People1이라는 타입으로 사용 할 수 있다.
const people1: People1 = [person1, develper1];
console.log(people1);

type Color = "red" | "blue" | "white";
const color: Color = "red";
console.log(color);

const colors: Color[] = ["red", "white"];
console.log(colors);
