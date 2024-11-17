/*
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]]
such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
Notice that the solution set must not contain duplicate triplets.

Example:
Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
*/

/*
Approach: sort the array first, iterate throuth the array,
For each element nums[i], use two pointers to find the other two elements.
Skip the duplicate and visited elements.

Time complexity: O(n^2)
Space complexity: O(1)
*/

function threeSum(nums) {
  const n = nums.length;
  if (n < 3) return [];
  nums.sort((a, b) => a - b);
  const result = [];
  for (let i = 0; i < n; i++) {
    // skip duplicate and visited elements
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = n - 1;
    while (left < right) {
      // skip duplicate and visited elements
      if (left > i + 1 && nums[left] === nums[left - 1]) {
        left++;
        continue;
      }
      // skip duplicate and visited elements
      if (right < n - 1 && nums[right] === nums[right + 1]) {
        right--;
        continue;
      }

      const sum = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);
        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }
  return result;
}

// Test
console.log(threeSum([-1, 0, 1, 2, -1, 1, 1, -4])); // [[-1, -1, 2], [-1, 0, 1]]
console.log(threeSum([0, 0, 0])); // [[0, 0, 0]]
console.log(threeSum([])); // []
