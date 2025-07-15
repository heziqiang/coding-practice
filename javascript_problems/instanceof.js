// 手写 instanceof 方法

/*
思路: 
顺着实例的原型链 ins.__proto__ 向上递归查找，等于构造函数的原型对象 prototype 则匹配，直到抵达 null（即 Object.prototype.__proto__）。
*/
function isInstanceof(ins, constr) {
  let proto = Object.getPrototypeOf(ins);
  while (true) {
    if (!proto) return false;
    if (proto === constr.prototype) return true;
    proto = Object.getPrototypeOf(proto); // 原型链向上递归查找
  }
}

// test
console.log(isInstanceof({}, Object)); // true
console.log(isInstanceof('a', Object)); // true
console.log(isInstanceof(2, String)); // true
