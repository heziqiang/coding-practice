/*
739. Daily Temperatures
Given an array of integers temperatures represents the daily temperatures, 
return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature.
If there is no future day for which this is possible, keep answer[i] == 0 instead.

Example:
Input: temperatures = [73,74,75,71,69,72,76,73]
Output: [1,1,4,2,1,1,0,0]

Constraints:
1 <= temperatures.length <= 105
30 <= temperatures[i] <= 100
*/

/*
Approach:
Use a descending stack to store each element's value and index. Iterate through temperatures,
if the current element is greater than the top of the stack, keep poping and record the distance in the result;
otherwise, push it onto the stack, to wait for the next greater element.
Finally, return the result.

Time complexity: O(n)
Space complexity: O(n) for stack depth
*/

function dailyTemperatures(temperatures) {
  const result = new Array(temperatures.length).fill(0);
  const stack = []; // [[value, index], ...]
  for (let i = 0; i < temperatures.length; i++) {
    const num = temperatures[i];
    while (stack.length && stack.at(-1)[0] < num) {
      const element = stack.pop();
      result[element[1]] = i - element[1]; // distance of index
    }
    stack.push([num, i]);
  }
  return result;
}

// Test
console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])); // [1, 1, 4, 2, 1, 1, 0, 0]
console.log(dailyTemperatures([30])); // [0]
