// 对象扁平化
var obj = {
  a: {
    b: 1,
    c: 2,
    d: { e: 3 },
  },
  b: [4, 5, { a: 6, b: 7 }],
  c: 8,
};
/*
输入: obj
输出: 
    {
        'a.b': 1,
        'a.c': 2,
        'a.d.e': 3,
        'b[0]': 4,
        'b[1]': 5,
        'b[2].a': 6,
        'b[2].b': 7,
         c: 8
    }
*/
function flatObj(o) {
  // if (!o || typeof o !== 'object') throw new Error('参数异常')
  var res = {};
  var flat = function (obj, preKey) {
    if (preKey === void 0) {
      preKey = '';
    }
    Object.entries(obj).forEach(function (_a) {
      var key = _a[0],
        value = _a[1];
      // 有上层key，加 . 或者 [] 组合
      var newKey = key;
      if (preKey) {
        newKey = ''
          .concat(preKey)
          .concat(
            Array.isArray(obj) ? '['.concat(newKey, ']') : '.'.concat(newKey)
          );
      }
      // value 为对象或数组，递归
      if (value && typeof value === 'object') {
        flat(value, newKey);
      } else {
        res[newKey] = value;
      }
    });
  };
  flat(o);
  return res;
}
console.log(flatObj(obj));
