// 判断对象是否存在循环引用

/*
解法一 利用 JSON.stringify()对该类对象进行序列化，存在循环引用就会报错: Converting circular structure to JSON.
*/
function hasCycle(obj) {
  try {
    JSON.stringify(obj);
  } catch (e) {
    if (e.message.includes("circular")) {
      return true;
    }
  }
  return false;
}

/*
解法二 深度遍历对象，判断是否存在属性 等于 祖先对象
@param obj: object 判断对象
@param parent: object[] 所有父级对象
*/
function hasCycle2(obj, parent = []) {
  return Object.values(obj).some((val) => {
    if (parent.includes(val)) return true;
    if (typeof val === "object") {
      return hasCycle2(val, [obj, ...parent]);
    }
  });
}

// Test
let obj1 = {
  a: {
    b: null,
  },
};
obj1.a.b = obj1;

let obj2 = {
  a: {
    b: 1,
  },
};
console.log(hasCycle(obj1)); // true
console.log(hasCycle(obj2)); // false
console.log(hasCycle2(obj1)); // true
console.log(hasCycle2(obj2)); // false
