/*
739. Daily Temperatures
Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature.
If there is no future day for which this is possible, keep answer[i] == 0 instead.

Example:
Input: temperatures = [73,74,75,71,69,72,76,73]
Output: [1,1,4,2,1,1,0,0]
*/

/*
Approach: Use a descending stack to store indexs. Traverse the temperatures, for each item compare it with the stack top item.
If bigger then the stack top item, keep poping from the stack and set their index distance, until no bigger.
Push the current index into stack.

Time complexity: O(n)
Space complexity: O(n)
*/

function dailyTemperatures(temperatures) {
  const stack = [];
  const res = new Array(temperatures.length).fill(0);

  for (let i = 0; i < temperatures.length; i++) {
    while (stack.length && temperatures[i] > temperatures[stack.at(-1)]) {
      const topIndex = stack.pop();
      res[topIndex] = i - topIndex; // distance from the nearest warmer day
    }
    stack.push(i);
  }
  return res;
}

// Test
console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])); // [1,1,4,2,1,1,0,0]
