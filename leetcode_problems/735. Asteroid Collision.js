/*
735. Asteroid Collision
We are given an array asteroids of integers representing asteroids in a row.
The indices of the asteriod in the array represent their relative position in space.
For each asteroid, the absolute value represents its size, and the sign represents its direction (positive meaning right, negative meaning left).
Each asteroid moves at the same speed.
Find out the state of the asteroids after all collisions. If two asteroids meet, the smaller one will explode.
If both are the same size, both will explode. Two asteroids moving in the same direction will never meet.

Example:
Input: asteroids = [5,10,-5]
Output: [5,10]
Explanation: The 10 and -5 collide resulting in 10. The 5 and 10 never collide.

Constraints:
2 <= asteroids.length <= 104
-1000 <= asteroids[i] <= 1000
asteroids[i] != 0
*/

/*
Approach:
Traverse the array, for each item, if no conflict (current go left and previous go right), push into the stack.
If conflict, pop from the stack and compare their absolute value, drop the smaller one, or drop both if equal.
Repeat until no conflict, then push the remain item into stack.
Finally, return the stack as an array.
*/

function asteroidCollision(asteroids) {
  const stack = [];
  for (let item of asteroids) {
    // collision
    while (item < 0 && stack.at(-1) > 0) {
      const prev = stack.pop();
      if (Math.abs(item) < Math.abs(prev)) {
        item = prev;
      } else if (Math.abs(item) > Math.abs(prev)) {
        item = item;
      } else {
        item = undefined;
      }
    }
    if (item) stack.push(item);
  }
  return stack;
}

// Test
console.log(asteroidCollision([5, 10, -5])); // [5, 10]
console.log(asteroidCollision([8, -8])); // []
console.log(asteroidCollision([-8, 8])); // [-8, 8]
console.log(asteroidCollision([10, 2, -11])); // [-11]
