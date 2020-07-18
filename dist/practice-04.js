"use strict";
// 인터페이스에서 제너릭사용하기
//<T>는 치환자같은거라고 생각하면됨.
var stringItems = {
    list: ["a", "b", "c"],
};
console.log(stringItems.list); //=> 'a','b','c'
var numberItems = {
    list: [1, 2, 3, 4, 5],
};
console.log(numberItems.list);
var booleanItems = {
    list: [true, true, false, false],
};
console.log(booleanItems.list);
// 클래스에서 제너릭사용하기
// 큐 선입선출
var Queue = /** @class */ (function () {
    function Queue() {
        this.list = [];
    }
    Object.defineProperty(Queue.prototype, "length", {
        get: function () {
            return this.list.length;
        },
        enumerable: false,
        configurable: true
    });
    Queue.prototype.enqueue = function (item) {
        this.list.push(item);
    };
    Queue.prototype.dequeue = function () {
        return this.list.shift();
    };
    return Queue;
}());
var queue = new Queue();
queue.enqueue(0);
queue.enqueue(1);
queue.enqueue(2);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
