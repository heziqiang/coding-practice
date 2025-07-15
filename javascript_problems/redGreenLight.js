// 设计红绿灯函数, 循环显示: 红色3秒、黄色1秒，绿色2秒

function show(color, time, callback) {
  return new Promise((resolve) => {
    console.log(color); // 先显示 再等待n秒
    setTimeout(() => {
      callback?.();
      resolve();
    }, time);
  });
}

// async await 写法
async function nextAwait() {
  await show('red', 3000);
  await show('yellow', 1000);
  await show('green', 2000);
  nextAwait();
}

// promise 写法
function nextPromise() {
  return Promise.resolve()
    .then(() => show('red', 3000))
    .then(() => show('yellow', 1000))
    .then(() => show('green', 2000))
    .then(nextPromise);
}

// callback 写法
function nextCallback() {
  show('red', 3000, () => {
    show('yellow', 1000, () => {
      show('green', 2000, nextCallback);
    });
  });
}

// Test

nextAwait(); // 红色3秒, 黄色1秒, 绿色2秒, 循环
// nextPromise();
// nextCallback()
