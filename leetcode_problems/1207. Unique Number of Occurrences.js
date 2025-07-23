/*
1207. Unique Number of Occurrences
Given an array of integers arr, return true if the number of occurrences of each value in the array is unique or false otherwise.

Example:
Input: arr = [1,2,2,1,1,3]
Output: true
Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.

Constraints:
1 <= arr.length <= 1000
-1000 <= arr[i] <= 1000
*/

/*
Approach:
Use a map to count the occurrences of each value, and use a set to check if the occurrences are unique.

Time complexity: O(n)
Space complexity: O(n)
*/

function uniqueOccurrences(arr) {
  const map = new Map();
  for (let v of arr) {
    map.set(v, (map.get(v) || 0) + 1);
  }
  const set = new Set();
  for (let occ of map.values()) {
    if (set.has(occ)) {
      return false;
    }
    set.add(occ);
  }
  return true;
}

// Test
console.log(uniqueOccurrences([1, 2, 2, 1, 1, 3])); // true
console.log(uniqueOccurrences([1, 2])); // false
console.log(uniqueOccurrences([])); // true
