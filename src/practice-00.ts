// Shape 라는 interface 를 선언합니다.
interface Shape {
  getArea(): number; // Shape interface 에는 getArea 라는 함수가 꼭 있어야 하며 해당 함수의 반환값은 숫자입니다.
}

class Circle implements Shape {
  // `implements` 키워드를 사용하여 해당 클래스가 Shape interface 의 조건을 충족하겠다는 것을 명시합니다.
  constructor(public radius: number) {
    this.radius = radius;
  }

  // 너비를 가져오는 함수를 구현합니다.
  getArea() {
    return this.radius * this.radius * Math.PI;
  }
}

class Rectangle implements Shape {
  constructor(private width: number, private height: number) {
    this.width = width;
    this.height = height;
  }
  getArea() {
    return this.width * this.height;
  }
}

const circle = new Circle(5);
const rectangle = new Rectangle(10, 5);

console.log(circle.radius); // 에러 없이 작동
// console.log(rectangle.width); // width 가 private 이기 때문에 에러 발생!

const shapes: Shape[] = [new Circle(5), new Rectangle(10, 5)];

shapes.forEach((shape) => {
  console.log(shape.getArea());
});

// // Shape라는 interface를 선언합니다.
// interface Shape {
//   getArea(): number; // Shape interface 에는 getArea라는 함수가 꼭 있어야 하며 해당 함수의 반환값은 숫자입니다.
// }

// class Circle implements Shape {
//   // implements키워드를 사용하여 해당 클래스가 Shape interface의 조건을 충족하겠다는 것을 명시합니다.

//   constructor(public radius: number) {
//     this.radius = radius;
//   }

//   getArea() {
//     return this.radius * this.radius * Math.PI;
//   }
// }

// class Rectangle implements Shape {
//   constructor(private width: number, private height: number) {
//     this.width = width;
//     this.height = height;
//   }

//   getArea() {
//     return this.width * this.height;
//   }
// }

// const shapes: Shape[] = [new Circle(5), new Rectangle(10, 5)];

// shapes.forEach((shape) => {
//   console.log(shape.getArea());
// });

// function returnNothing(): void {
//   console.log("I am just saying hello world!");
// }

// function sumArray(numbers: number[]): number {
//   return numbers.reduce((acc, current) => acc + current, 0);
// }

// const total = sumArray([1, 2, 3, 4, 5]);

// function sum(x: number, y: number): number {
//   return x + y;
// }

// sum(1, 1);

// let count = 0;
// count += 1;
// count = "갑자기 분위기 문자열";

// const message: string = "hello world";

// const done: boolean = true;

// const numbers: number[] = [1, 2, 3];
// const messages: string[] = ["hello", "wolrd"];

// messages.push(1); // 숫자를 넣으려고 하면 안된다

// let mightBeUndefined: string | undefined = undefined; // 문자열 일 수도 있고 undefined일 수도 있고...
// let nullableNumber: number | null = null; // number 일수도 있고 null 일 수도 있고

// let color: "red" | "orange" | "yellow" = "red"; // red, orange, yellow 중 하나
// color = "yellow";
// color = "green"; // error
