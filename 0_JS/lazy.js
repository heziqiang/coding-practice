// 设计实现 LazyMan 类

// LazyMan('John').eat('lanch').sleep(3).eat('dinner')
// I am John
// I am eating lanch
// 等待了 3 秒
// I am eating dinner

/*
思路: 
*/

class LazyManClass {
  constructor(name) {
    this.name = name;
    this.queue = [];
    this.queue.push(() => {
      console.log(`I am ${this.name}`);
      this.next();
    });
    // 等待后续链式调用全部完成，全部任务已注册，初始启动 next
    setTimeout(() => {
      this.next();
    });
  }
  next() {
    if (this.queue.length) {
      let fn = this.queue.shift();
      fn();
    }
  }
  sleep(time) {
    this.queue.push(() => {
      setTimeout(() => {
        console.log(`等待了 ${time} 秒`);
        this.next();
      }, time * 1000);
    });
    return this;
  }
  eat(item) {
    this.queue.push(() => {
      setTimeout(() => {
        console.log(`I am eating ${item}`);
        this.next(); // 为了保证异步任务顺序，在异步任务完成执行后才调用 next
      });
    });
    return this;
  }
}
function LazyMan(name) {
  return new LazyManClass(name);
}

// Test
LazyMan('John').sleep(1).eat('lanch').sleep(3).eat('dinner');
