/*
724. Find Pivot Index
Given an array of integers nums, calculate the pivot index of this array.
The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.
If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.
Return the leftmost pivot index. If no such index exists, return -1.

Example:
Input: nums = [1,7,3,6,5,6]
Output: 3

Constraints:
1 <= nums.length <= 104
-1000 <= nums[i] <= 1000

Note: This question is the same as '1991. Find the Middle Index in Array'
*/

/*
Approach:
Traverse the nums array, For each number (as the pivot), check if the left sum equals the right sum.
The left sum is the sum of numbers we already seen.
The right sum is total sum - current number - left sum.

Time complexity: O(n)
Space complexity: O(1)
*/

function pivotIndex(nums) {
  let totalSum = nums.reduce((acc, cur) => acc + cur, 0);
  let leftSum = 0;
  for (let i = 0; i < nums.length; i++) {
    const cur = nums[i];
    rightSum = totalSum - cur - leftSum;
    if (leftSum === rightSum) {
      return i;
    }
    leftSum += cur;
  }
  return -1;
}

// Test
console.log(pivotIndex([1, 7, 3, 6, 5, 6])); // 3
console.log(pivotIndex([2, 1, -1])); // 0
console.log(pivotIndex([1, 2, 3])); // -1
