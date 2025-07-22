/*
1004. Max Consecutive Ones III
Given a binary array nums and an integer k,
return the maximum number of consecutive 1's in the array if you can flip at most k 0's.

Example:
Input: nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3
Output: 10

Constraints:
1 <= nums.length <= 105
nums[i] is either 0 or 1.
0 <= k <= nums.length
*/

/*
Approach:
This is equivalent to finding the longest subarray with at most k zeros.
Use a sliding window: move right forward, count zeros in the window.
While zeros is greater than k, keep moving left to shrink it.
Update the max length, continue until right reaches the end.
Return the max length.

Time complexity: O(n)
Space complexity: O(1)
*/

function longestOnes(nums, k) {
  let maxLength = 0;
  let left = 0;
  let right = 0;
  let zeros = 0;
  while (right < nums.length) {
    if (nums[right] === 0) {
      zeros++;
    }
    while (zeros > k) {
      if (nums[left] === 0) {
        zeros--;
      }
      left++;
    }
    maxLength = Math.max(maxLength, right - left + 1);

    right++;
  }
  return maxLength;
}

// Test
console.log(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2)); // 6
console.log(
  longestOnes([0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], 3)
); // 10
