// 实现一个异步调度器，可以控制并发数
class Schedular {
  constructor(limit = 2) {
    this.limit = limit;
    this.queue = [];
    this.concurrent = 0;
  }

  // 添加任务
  add(task) {
    // add 要求返回一个 promise，能跟踪后续状态变化
    return new Promise((resolve) => {
      // 将 resolve 回调绑定在任务 task 上，方便队列流转
      this.queue.push({
        task,
        resolve,
      });
      this.next(); // 启动
    });
  }

  // 执行任务
  next() {
    // 并发已满 或 队列为空，跳过
    if (this.concurrent >= this.limit || !this.queue.length) {
      return;
    }
    const { task, resolve } = this.queue.shift();
    this.concurrent++; // 任务开始 并行+1
    task().finally(() => {
      this.concurrent--; // 任务结束 并行-1
      resolve();
      this.next(); // 继续执行下一个
    });
  }
}

// Test
const getAsyncTask = (taskName, delayTime) => {
  return () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(`${taskName} is Done.`);
        resolve();
      }, delayTime);
    });
  };
};

const schedular = new Schedular();
schedular.add(getAsyncTask('task1', 1000));
schedular.add(getAsyncTask('task2', 500));
schedular.add(getAsyncTask('task3', 400));
schedular.add(getAsyncTask('task4', 300));
// 并发为2
// 完成时序 2, 3, 1, 4
// 任务执行状态 [1, 2] -> [1, 3] -> [1, 4] -> [4]
