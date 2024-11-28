/*
128. Longest Consecutive Sequence
Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
You must write an algorithm that runs in O(n) time.

Example:
Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
*/

/*
Approach: Turn the array into a set, go through the array, for each number x, check if x+1, x+2, ... exists.
If x-1 exists, then x is not the start of the sequence, it can be skipped.

Time complexity: O(n)
Space complexity: O(n)
*/

function longestConsecutive(nums) {
  const set = new Set(nums);
  let maxLen = 0;
  for (let x of nums) {
    if (set.has(x - 1)) continue;
    let y = x + 1;
    while (set.has(y)) {
      y++;
    }
    maxLen = Math.max(maxLen, y - x);
  }
  return maxLen;
}

// Test
console.log(longestConsecutive([100, 4, 200, 1, 3, 2])); // 4
console.log(longestConsecutive([5, 1, 3])); // 1
console.log(longestConsecutive([])); // 0
