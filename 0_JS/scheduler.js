// 实现一个异步调度器，可以控制并发数
class Scheduler {
  constructor(limit = 2) {
    this.limit = limit;
    this.queue = [];
    this.concurrent = 0;
  }

  // 添加任务
  add(task) {
    // add 要求返回一个 promise，能跟踪后续状态变化
    return new Promise((resolve, reject) => {
      // 将 resolve 回调绑定在任务 task 上，方便队列流转
      this.queue.push({ task, resolve, reject });
      this.next(); // 启动
    });
  }

  // 执行任务
  next() {
    // 并发数已满 或 队列为空，跳过
    if (this.concurrent >= this.limit || !this.queue.length) return;
    const { task, resolve, reject } = this.queue.shift(); // 取出队列头部任务 先进先出
    this.concurrent++; // 任务开始 并行+1
    task()
      .then(resolve)
      .catch(reject)
      .finally(() => {
        this.concurrent--; // 任务结束 并行-1
        this.next(); // 继续执行下一个
      });
  }
}

// Test
const timeout = (time) => {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
};

const createTask = (name, time) => {
  return () => timeout(time).then(() => console.log(name));
};

const scheduler = new Scheduler();
scheduler.add(createTask('task1', 1000));
scheduler.add(createTask('task2', 500));
scheduler.add(createTask('task3', 400));
scheduler.add(createTask('task4', 300));

// 完成时序 2, 3, 1, 4
// 执行状态 [1, 2] -> [1, 3] -> [1, 4] -> [4]
