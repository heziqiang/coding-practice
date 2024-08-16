// 手写实现深拷贝函数
// 浅拷贝：将一个对象的属性值复制到另一个对象，如果有的属性的值为引用类型的话，复制引用。
// 深拷贝：当属性值为引用类型的时候，它新建一个引用类型并将对应的值复制给它，递归执行。

/*
方法一
JSON.parse(JSON.stringify(obj))
缺点： JSON结构会丢失 function，undefined，symbol

方法二
lodash 库 _.cloneDeep 方法
*/

// DFS 深度优先递归
function cloneDeep(obj) {
  if (!obj || typeof obj !== "object") return;
  const newObj = Array.isArray(obj) ? [] : {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      const value = obj[key];
      // 引用类型 Object, Array, Function, Date, RegExp,
      // 对对象和数组 递归深度遍历，后面几种引用对象一般不会被修改
      newObj[key] = typeof value === "object" ? cloneDeep(value) : value;
    }
  }
  return newObj;
}

// BSF 广度优先
function cloneDeep2(obj) {
  if (!obj || typeof obj !== "object") return;
  const newObj = Array.isArray(obj) ? [] : {};
  const queue = [[obj, newObj]]; // 队列保存对象 [origin, target]
  while (queue.length) {
    let [origin, target] = queue.shift(); // 出队
    for (let key in origin) {
      if (!origin.hasOwnProperty(key)) continue;
      // 复杂类型，先保存空对象，下一次出队再处理
      if (typeof origin[key] === "object") {
        target[key] = Array.isArray(obj[key]) ? [] : {};
        queue.push([origin[key], target[key]]);
      } else {
        target[key] = origin[key];
      }
    }
  }
  return newObj;
}

// Test
let obj = {
  name: "neo",
  age: 30,
  friends: ["django", "linl"],
  symbolKey: Symbol("abc"),
  hi() {
    console.log("hi");
  },
};
obj.__proto__ = { protoKey: "protoValue" }; // 修改原型上属性
let newObj = cloneDeep(obj);
console.log(newObj.hi === obj.hi); // true
console.log(newObj.symbolKey === obj.symbolKey); // true
console.log(newObj.friends === obj.friends); // false
console.log(newObj.protoKey); // undefined 原型属性不会被复制
