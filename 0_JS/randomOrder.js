// 实现数组的乱序输出

/*
思路: 
先从 [0, n-1] 随机选一个下标交换到位置 0,
然后从剩下的 [1, n-1] 随意选一个下标放在位置 1,
继续直到完成所有元素, 返回数组本身。
*/

/**
 *
 * @param arr: number[] 原始数组
 * @return number[] 乱序数组
 */
function randomOrder(arr) {
  for (let i = 0; i < arr.length; i++) {
    // 闭区间 [a, b] 随机选取一个的计算公式为: floor(random() * (b - a + 1)) + i
    const randomIndex = Math.floor(Math.random() * (arr.length - i)) + i;
    // 优点: 通过交换来排序，无需额外空间。
    [arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]];
  }
  return arr;
}

// Test
console.log(randomOrder([1, 2, 3, 4, 5])); // random
