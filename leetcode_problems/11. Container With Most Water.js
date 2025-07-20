/*
11. Container With Most Water
You are given an integer array height of length n.
There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
Find two lines that together with the x-axis form a container, such that the container contains the most water.
Return the maximum amount of water a container can store.
Notice that you may not slant the container.

Example:
Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
*/

/*
Approach:
Use two pointers: left starts at the front, right at the end. Calculate the current area = minHeight * width.
Moving the taller pointer inward won't increase minHeight, so the area won't get larger.
Instead, move the shorter pointer inward to try to find a taller line, recalculate the area, and update maxArea.
Repeat until left meets right.

Time complexity: O(n)
Space complexity: O(1)
*/

function maxArea(height) {
  let left = 0;
  let right = height.length - 1;
  let maxArea = 0;
  while (left < right) {
    const area = Math.min(height[left], height[right]) * (right - left);
    maxArea = Math.max(maxArea, area);
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maxArea;
}

// Test
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // 49
console.log(maxArea([1, 1])); // 1
console.log(maxArea([])); // 0
