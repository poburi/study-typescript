// 제네릭(Generics)은 타입스크립트에서 함수, 클래스, interface, type을 사용하게 될 때 여러 종류의 타입에 대하여 호환을 맞춰야 하는 상황에서 사용하는 문법입니다.

// 함수에서 제너릭 사용하기

function merge(a: any, b: any): any {
  return {
    ...a,
    ...b,
  };
}

const merged = merge({ foo: 1 }, { bar: 1 });

//=> merged의 결과가 any라는 것은 무엇이 있는지 알 수 없는 상태. 즉 안 좋은 상태죠.

// Generics
/*
위 와 같은 상황에서 생겨난것이 Generics.

뜻은 '호환'.
여러 종류의 타입에 대한 '호환'이라는 의미입니다.

제네릭을 사용 할 때는 이렇게 <T> 처럼 꺽쇠 안에 타입의 이름을 넣어서 사용하며, 이렇게 설정을 해주면 제네릭에 해당하는 타입에는 뭐든지 들어올 수 있게 되면서도, 사용 할 때 타입이 깨지지 않게 됩니다. 
*/

function Gmerge<A, B>(a: A, b: B): A & B {
  return {
    ...a,
    ...b,
  };
}

const gmerged = Gmerge({ foo: 1 }, { bar: 1 });

function wrap<T>(param: T) {
  return {
    param,
  };
}

const wrapped = wrap(10);
