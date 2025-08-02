// 函数柯里化的实现

// 一 参数固定
/*
思路: 
通过 bind 暂存部分参数，直到数量足够再执行原函数
*/
function currying(fn, ...args) {
  return args.length >= fn.length
    ? fn(...args)
    : currying.bind(null, fn, ...args);
  // bind 相当于:
  // function newFn(...newArgs) {
  //     return currying.apply(null, [fn, ...args, ...newArgs]);
  // };
}

// Test
function sum(a, b, c) {
  return a + b + c;
}
let curriedSum = currying(sum);
console.log(curriedSum(1, 2, 3)); // 6
console.log(curriedSum(1)(2, 3)); // 6
console.log(curriedSum(1)(2)(3)); // 6

// 二、参数不固定
// sumNum(1)(2, 3)() 当最后调用参数为空时才执行计算
/*
思路: 
使用闭包，封装状态参数队列 用于保存中间过程参数，
当调用参数不为空时，参数入队并返回函数，当调用参数为空，执行计算。
*/
function currying2(fn) {
  let args = [];
  const newFn = (...newArgs) => {
    if (!newArgs.length) {
      // 空参数 执行计算
      let value = fn.apply(null, args);
      args = []; // 清空 不影响再次调用
      return value;
    }
    args.push(...newArgs); // 参数入队
    return newFn;
  };
  return newFn;
}

function add(...args) {
  return args.reduce((prev, cur) => prev + cur, 0);
}

const curriedAdd = currying2(add);

// Test
console.log(curriedAdd()); // 0
console.log(curriedAdd(1)(2, 3)()); // 6
console.log(curriedAdd(1, 2, 3)()); // 6
