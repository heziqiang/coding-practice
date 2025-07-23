/*
2215. Find the Difference of Two Arrays
Given two 0-indexed integer arrays nums1 and nums2, return a list answer of size 2 where:
answer[0] is a list of all distinct integers in nums1 which are not present in nums2.
answer[1] is a list of all distinct integers in nums2 which are not present in nums1.
Note that the integers in the lists may be returned in any order.

Example:
Input: nums1 = [1,2,3], nums2 = [2,4,6]
Output: [[1,3],[4,6]]

Constraints:
1 <= nums1.length, nums2.length <= 1000
-1000 <= nums1[i], nums2[i] <= 1000
*/

/*
Approach:
Use two sets to hold the distinct numbers from nums1 and nums2.
Traverse each set; if a number isn’t in the other set, add it to the result.

Time complexity: O(n)
Space complexity: O(n) for set size
*/

function findDifference(nums1, nums2) {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);
  const res = [[], []];
  for (const num of set1) {
    if (!set2.has(num)) {
      res[0].push(num);
    }
  }
  for (const num of set2) {
    if (!set1.has(num)) {
      res[1].push(num);
    }
  }
  return res;
}

// Test
console.log(findDifference([1, 2, 3], [2, 4, 6])); // [[1,3],[4,6]]
console.log(findDifference([1, 2, 3, 3], [1, 1, 2, 2])); // [[3],[]]
console.log(findDifference([], [])); // [[],[]]
