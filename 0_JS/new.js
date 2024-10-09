// 手写 new 操作符

function myNew(constructor, ...args) {
  // 新建原型对象，其 __proto__ 指向构造函数的原型
  const newObj = Object.create(constructor.prototype);
  // 构造函数初始执行
  constructor.call(newObj, ...args);
  return newObj;
}

// 进阶: 继承整体逻辑 参考 extends.js
