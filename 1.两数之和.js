/*
1. 两数之和
给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出和为目标值 target 的那两个整数，并返回它们的数组下标。
你可以假设每种输入只会对应一个答案，并且你不能使用两次相同的元素。
你可以按任意顺序返回答案。

输入: nums = [3,2,4], target = 6
输出: [1,2]
*/

/*
思路: 遍历数组中的每一个数 x，寻找数组中是否存在 target - x
使用哈希表优化查找效率为 O(1)
因为同一个元素不能重复出现，对于每一个 x 先判断哈希表中是否存在 target-x，如果有则找到，否则在哈希表中添加 x

边界情况: 数组 nums 为空，返回空数组

时间复杂度: O(n)
空间复杂度: O(n)
*/
function twoSum(nums, target) {
  if (!nums || nums.length < 2) return [];
  const map = new Map();
  for (let [i, num] of nums.entries()) {
    if (map.has(target - num)) {
      return [map.get(target - num), i];
    }
    map.set(num, i);
  }
  return [];
}

// Test
console.log(twoSum([1, 2, 0, 7], 9)); // [1, 3]
console.log(twoSum([], 100)); // []
