// implement reduce
Array.prototype.myReduce = function (fn, value) {
  const startIndex = value ? 0 : 1;
  let acc = value || this[0];
  for (let i = startIndex; i < this.length; i++) {
    acc = fn(acc, this[i], i, this);
  }
  return acc;
};


// Test
const arr = [1, 2, 3, 4];
const result = arr.myReduce((acc, curr) => acc + curr);
const result2 = arr.myReduce((acc, curr) => acc + curr, 0);
console.log(result); // 10
console.log(result2); // 10
