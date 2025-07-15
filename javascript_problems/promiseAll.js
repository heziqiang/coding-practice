/*
  实现 Promise.all
  输入: tasks = [task1, task2, task3]
  输出: Promise<[]>
*/

/*
  思路: 
  参数先用Promise.resolve() 包一层，使其变成一个promise对象
  状态定义: 设 counter 为成功完成的任务数，初始为 0； 设 res 为结果数组。
  主要逻辑: 任务成功一个，记录结果，并将计数+1，如果任务全部成功，resolve结果数组。如果任务一个失败，reject error。
  返回值: 新的 promise
*/
const promiseAll = (tasks) => {
  return new Promise((resolve, reject) => {
    let counter = 0;
    const res = [];
    for (let i = 0; i < tasks.length; i++) {
      Promise.resolve(tasks[i]).then(
        (value) => {
          counter++;
          res[i] = value;
          if (counter === tasks.length) {
            resolve(res);
          }
        },
        (err) => {
          reject(err);
        }
      );
    }
  });
};

// Test
const newTask = (msg, delay) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(msg);
    }, delay);
  });
let t1 = newTask(1, 2000);
let t2 = newTask(2, 3000);
let t3 = newTask(3, 1000);

const now = Date.now();
console.log('Task start');
promiseAll([t3, t1, t2]).then((res) => {
  console.log(res); // [3, 1, 2]
  console.log(`Task end in ${Math.round((Date.now() - now) / 1000)} seconds`);
});

// 进阶: 实现 promise.all 有部分失败不中断
