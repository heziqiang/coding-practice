/*
283. Move Zeroes
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
Note that you must do this in-place without making a copy of the array.

Example:
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

Constraints:
1 <= nums.length <= 104
-231 <= nums[i] <= 231 - 1
*/

/*
Approach:
Use two pointers, left points to the start of zeros, right looks for non-zeros.
When right finds a non-zero, swap it with left, and move left forward.

Time complexity: O(n)
Space complexity: O(1)
*/

function moveZeroes(nums) {
  let left = 0;
  let right = 0;
  while (right < nums.length) {
    if (nums[right] !== 0) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      left++;
    }
    right++;
  }
}

// Test
const nums1 = [0, 1, 0, 3, 12];
const nums2 = [2, 1];
const nums3 = [];
moveZeroes(nums1);
moveZeroes(nums2);
moveZeroes(nums3);
console.log(nums1); // [1, 3, 12, 0, 0]
console.log(nums2); // [2, 1]
console.log(nums3); // []
