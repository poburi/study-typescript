// 인터페이스에서 제너릭사용하기
//<T>는 치환자같은거라고 생각하면됨.

interface Items<T> {
  list: T[];
}

const stringItems: Items<string> = {
  list: ["a", "b", "c"],
};

console.log(stringItems.list); //=> 'a','b','c'

const numberItems: Items<number> = {
  list: [1, 2, 3, 4, 5],
};

console.log(numberItems.list);

// interface로 제너릭을 사용한것을 type으로 바꿔보기
// interface는 =이 안붙는데 type으로 해주려면 =이 붙네

type Items1<T> = {
  list: T[];
};

const booleanItems: Items<boolean> = {
  list: [true, true, false, false],
};

console.log(booleanItems.list);

// 클래스에서 제너릭사용하기

// 큐 선입선출

class Queue<T> {
  list: T[] = [];
  get length() {
    return this.list.length;
  }

  enqueue(item: T) {
    this.list.push(item);
  }

  dequeue() {
    return this.list.shift();
  }
}

const queue = new Queue<number>();

queue.enqueue(0);
queue.enqueue(1);
queue.enqueue(2);

console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
