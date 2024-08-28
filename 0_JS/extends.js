// 实现 ES6 继承 extends

// 解法: 寄生组合继承（三合一）

// 寄生继承, Object.create() 关联 __proto__, 缺点: 浅拷贝，多个实例的引用类型属性指向相同的内存，可能篡改（基础类型是复制独立的）
// 原型链继承, Child.prototype = new Parent() , 缺点: 多个实例使用的是同一个原型对象，可能篡改
// 构造函数继承, Parent.call(this), 缺点: 父类原型对象上的方法无法被继承

// 链接: https://github.com/febobo/web-interview/issues/60

function Parent(name) {
  this.name = name;
  this.money = [100, 100];
}
Parent.prototype.getName = function () {
  return this.name;
};

function Child(name, age) {
  Parent.call(this, name); // 1、构造函数
  this.age = age;
}

function clone(parent, child) {
  // 2、原型链
  child.prototype = Object.create(parent.prototype); // 3、寄生
  child.prototype.constructor = child;
}
clone(Parent, Child);

Child.prototype.getAge = function () {
  return this.age;
};

let child1 = new Child("大聪明", 5);
child1.money.push(20);
let child2 = new Child("小可爱", 3);
console.log(child1.getName());
console.log(child1.getAge());
console.log(child1.money);

console.log(child2.getName());
console.log(child2.getAge());
console.log(child2.money);
