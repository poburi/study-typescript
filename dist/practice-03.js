"use strict";
// 함수에서 제너릭 사용하기
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function merge(a, b) {
    return __assign(__assign({}, a), b);
}
var merged = merge({ foo: 1 }, { bar: 1 });
//=> merged의 결과가 any라는 것은 무엇이 있는지 알 수 없는 상태. 즉 안 좋은 상태죠.
// Generics
/*
위 와 같은 상황에서 생겨난것이 Generics.

뜻은 '호환'.
여러 종류의 타입에 대한 '호환'이라는 의미입니다.

제네릭을 사용 할 때는 이렇게 <T> 처럼 꺽쇠 안에 타입의 이름을 넣어서 사용하며, 이렇게 설정을 해주면 제네릭에 해당하는 타입에는 뭐든지 들어올 수 있게 되면서도, 사용 할 때 타입이 깨지지 않게 됩니다.
*/
function Gmerge(a, b) {
    return __assign(__assign({}, a), b);
}
var gmerged = Gmerge({ foo: 1 }, { bar: 1 });
function wrap(param) {
    return {
        param: param,
    };
}
var wrapped = wrap(10);
