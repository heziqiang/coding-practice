/*
605. Can Place Flowers
You have a long flowerbed in which some of the plots are planted, and some are not.
However, flowers cannot be planted in adjacent plots.
Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n,
return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.

Example:
Input: flowerbed = [1,0,0,0,1], n = 1
Output: true

Constraints:
1 <= flowerbed.length <= 2 * 104
flowerbed[i] is 0 or 1.
There are no two adjacent flowers in flowerbed.
0 <= n <= flowerbed.length
*/

/*
Approach:
Traverse the flowerbed array. If we find a 0, and its neighbors are also 0, plant a flower (set it to 1) and decrement n.
If n becomes 0 or less, return true; otherwise, return false.

Time complexity: O(n)
Space complexity: O(1)
*/

function canPlaceFlowers(flowerbed, n) {
  for (let i = 0; i < flowerbed.length; i++) {
    if (
      flowerbed[i] === 0 &&
      (i === 0 || flowerbed[i - 1] === 0) &&
      (i === flowerbed.length - 1 || flowerbed[i + 1] === 0)
    ) {
      flowerbed[i] = 1;
      n--;
    }
    if (n <= 0) {
      return true;
    }
  }
  return false;
}

// Test
console.log(canPlaceFlowers([1, 0, 0, 0, 1], 1)); // true
console.log(canPlaceFlowers([1, 0, 0, 0, 1], 2)); // false
console.log(canPlaceFlowers([0, 0, 1], 1)); // true
console.log(canPlaceFlowers([1, 0, 0, 0, 0, 1], 2)); // false
