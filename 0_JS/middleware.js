// 实现中间件的注册和运行

class App {
  constructor() {
    this.queue = [];
  }
  use(fn) {
    const task = () => {
      return new Promise((resolve, reject) => {
        try {
          fn(resolve);
        } catch (e) {
          reject(e);
        }
      });
    };
    this.queue.push(task);
  }
  next() {
    if (this.queue.length) {
      const task = this.queue.shift();
      task().finally(() => {
        this.next();
      });
    }
  }
  run() {
    this.next();
  }
}

var app = new App();
app.use((next) => setTimeout(() => next(), 1000));
app.use((next) => {
  console.log(123);
  next();
});
app.run(); // 1秒后打印 123
