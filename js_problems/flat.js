// 实现数组flat方法

// 参数 depth 为扁平层级，默认为 1 层

Array.prototype.myFlat = function (depth = 1) {
  const arr = this;
  // 扁平层级到0 不再继续继续递归
  if (depth <= 0) {
    return arr;
  }
  return arr.reduce((pre, cur) => {
    return pre.concat(
      Array.isArray(cur)
        ? cur.myFlat(depth - 1) // 扁平层级减一
        : cur
    );
  }, []);
};

console.log([1, [2, [3, [4], 5]]].myFlat()); // [1, 2, [3, [4], 5]]
console.log([1, [2, [3, [4], 5]]].myFlat(2)); // [1, 2, 3, [4], 5]
console.log([1, [2, [3, [4], 5]]].myFlat(3)); // [1, 2, 3, 4, 5]
