/*
1732. Find the Highest Altitude
There is a biker going on a road trip. The road trip consists of n + 1 points at different altitudes.
The biker starts his trip on point 0 with altitude equal 0.
You are given an integer array gain of length n where gain[i] is the net gain in altitude between points i​​​​​​ and i + 1 for all (0 <= i < n).
Return the highest altitude of a point.

Example:
Input: gain = [-5,1,5,0,-7]
Output: 1

Constraints:
n == gain.length
1 <= n <= 100
-100 <= gain[i] <= 100
*/

/*
Approach
Traverse the gain array, for each gain number, calculate the current altitude, and update the maxAltitude.

Time complexity: O(n)
Space complexity: O(1)
*/

function largestAltitude(gain) {
  let maxAltitude = 0;
  let cur = 0;
  for (let i = 0; i < gain.length; i++) {
    cur += gain[i];
    maxAltitude = Math.max(maxAltitude, cur);
  }
  return maxAltitude;
}

// Test
console.log(largestAltitude([-5, 1, 5, 0, -7])); // 1
console.log(largestAltitude([-4, -3, -2, -1, 4, 3, 2])); // 0
