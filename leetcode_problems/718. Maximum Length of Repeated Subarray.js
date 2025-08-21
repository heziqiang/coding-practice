/*
718. Maximum Length of Repeated Subarray
Given two integer arrays nums1 and nums2, return the maximum length of a subarray that appears in both arrays.

Example:
Input: nums1 = [1,2,3,2,1], nums2 = [3,2,1,4,7]
Output: 3
Explanation: The repeated subarray with maximum length is [3,2,1].

Constraints:
1 <= nums1.length, nums2.length <= 1000
0 <= nums1[i], nums2[i] <= 100
*/

/*
Approach:
To find the optimal solution, use Dynamic Programming.
Use a 2D table dp, dp[i][j] represents the length of the longest subarray starting at nums1[i] and nums2[j].
If nums1[i] equals nums2[j], dp[i][j] = dp[i+1][j+1] + 1; otherwise, dp[i][j] = 0.
Track the maximum value in the table as the result.

Time complexity: O(m * n)
Space complexity: O(m * n)
*/
function findLength(nums1, nums2) {
  const m = nums1.length;
  const n = nums2.length;
  let maxLen = 0;
  const dp = Array.from({ length: m }, () => Array(n).fill(0));
  for (let i = nums1.length - 1; i >= 0; i--) {
    for (let j = nums2.length - 1; j >= 0; j--) {
      if (nums1[i] === nums2[j]) {
        dp[i][j] = (dp[i + 1]?.[j + 1] || 0) + 1;
        maxLen = Math.max(maxLen, dp[i][j]);
      }
    }
  }
  return maxLen;
}

// Test
console.log(findLength([1, 2, 3, 2, 1], [1, 0, 3, 2, 1])); // 3
console.log(findLength([1, 2, 3, 2, 1], [5, 2, 1, 4])); // 2
console.log(findLength([1, 2, 3, 2, 1], [1])); // 1
