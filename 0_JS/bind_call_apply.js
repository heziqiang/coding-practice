// 手写 bind 函数
// fn.bind(ctx, arg1, arg2) 内部暂存 ctx 和 参数
// 关联题: 实现 curry 返回偏函数
Function.prototype.myBind = function (ctx, ...args) {
  const fn = this;
  return (...newArgs) => {
    return fn.call(ctx, ...args, ...newArgs);
  };
};

// 手写 call 函数
// fn.call(ctx, arg1, arg2, arg3)
Function.prototype.myCall = function (ctx = window, ...args) {
  const fn = this;
  ctx.fn = fn;
  const res = ctx.fn(...args);
  delete ctx.fn;
  return res;
};

// 手写 apply 函数
// fn.apply(ctx, [arg1, arg2, arg3])
// apply 和 call 的区别: 第二个及以后参数合并为数组
Function.prototype.myApply = function (ctx = window, args) {
  const fn = this;
  ctx.fn = fn;
  const res = ctx.fn(...args);
  delete ctx.fn;
  return res;
};

// Test
const obj = { name: "obj" };
const fn = function (...args) {
  return [...args, this];
};
const fnB = fn.myBind(obj, 1, 2);

console.log(fn(3, 4)); // 3, 4, window
console.log(fnB(3, 4)); // 1, 2, 3, 4, {name: 'obj'}
console.log(fn.myCall(obj, 1, 2)); // 1, 2, {name: 'obj'}
console.log(fn.myApply(obj, [1, 2, 3])); // 1, 2, 3, {name: 'obj'}

// Test ArrowFunction
const fnArrow = (...args) => {
  return [...args, this?.name];
};
const fnArrowB = fnArrow.myBind(obj, 1, 2);
console.log(fnArrowB(3, 4)); // 1, 2, 3, 4, undefined
