/*
js实现数组扁平化
输入 [1, [2, [3, 4，5]]]
输出 [1, 2, 3, 4，5]
*/

// ES6中的 flat 方法
// 参数 depth:number 可选，深度 默认值为 1 。 返回新数组，包含所有元素。
arr.flat(Infinity);

// 递归
function flatten(arr) {
  let res = [];
  for (let value of arr) {
    if (Array.isArray(value)) {
      // res = res.concat(flatten(value)); // 等效写法
      res.push(...flatten(value));
    } else {
      res.push(value);
    }
  }
  return res;
}

// 递归 + reduce
function flatten2(arr) {
  return arr.reduce((pre, cur) => {
    return pre.concat(Array.isArray(cur) ? flatten2(cur) : cur);
  }, []);
}

// Test
console.log(flatten([1, [2, [3, 4, 5]]])); // [1, 2, 3, 4, 5]
console.log(flatten2([1, [2, [3, 4, 5]]])); // [1, 2, 3, 4, 5]
