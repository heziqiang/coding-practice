// 实现数组去重

/*
  解法一: 利用 js Set 去重
  Array.from(new Set(array));
*/

/*
  解法二: 遍历数组, 用一个 map 记录数组元素作为 key, 已存在则忽略。
*/
function uniqueArray(arr) {
  let map = {};
  let res = [];
  arr.forEach((item) => {
    if (!map[item]) {
      map[item] = true;
      res.push(item);
    }
  });
  return res;
}

// Test
console.log(uniqueArray([1, 2, 2, 3, 2, 1, 4, 4])); // [1, 2, 3, 4]
console.log(uniqueArray([])); // []
