/*
238. Product of Array Except Self
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
You must write an algorithm that runs in O(n) time and without using the division operation.

Example:
Input: nums = [1,2,3,4]
Output: [24,12,8,6]

Constraints:
2 <= nums.length <= 105
-30 <= nums[i] <= 30
The input is generated such that answer[i] is guaranteed to fit in a 32-bit integer.
*/

/*
Approach:
For each number in nums, the product of all other elements equals its prefix product multiply its suffix product.
First, scan left to build prefix products.
Then, scan right to build suffix products and multiply them by the prefix products.
*/

function productExceptSelf(nums) {
  const n = nums.length;
  const result = [];
  let prefix = 1;
  let suffix = 1;
  for (let i = 0; i < n; i++) {
    result[i] = prefix;
    prefix *= nums[i];
  }
  for (let i = n - 1; i >= 0; i--) {
    result[i] *= suffix;
    suffix *= nums[i];
  }
  return result;
}

// Test
console.log(productExceptSelf([1, 2, 3, 4])); // [24, 12, 8, 6]
console.log(productExceptSelf([-1, 1, 0, -3, 3])); // [0, 0, 9, 0, 0]
console.log(productExceptSelf([0, 1])); // [1, 0]
