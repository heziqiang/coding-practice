/*
509. Fibonacci Number
The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, 
such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,
F(0) = 0, F(1) = 1
F(n) = F(n - 1) + F(n - 2), for n > 1.
Given n, calculate F(n).

Constraints:
0 <= n <= 30
*/

/*
Approach: Recursive method

Time complexity: O(n ^ 2)
Space complexity: O(n), for recursion stack depth
*/
function fibonacciRecursive(n) {
  if (n < 2) return n;
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

/*
Approach: Dynamic Programming
Use only two variables, prev and cur, to store intermediate values.
Initialize prev = 0, cur = 1
Update them at each step: [prev, cur] = [cur, prev + cur]

Time complexity: O(n)
Space complexity: O(1)
*/

function fibonacci(n) {
  if (n < 2) return n;
  let prev = 0, cur = 1;
  for (let i = 2; i <= n; i++) {
    [prev, cur] = [cur, prev + cur];
  }
  return cur;
}

// Test
console.log(fibonacciRecursive(3)); // 2
console.log(fibonacciRecursive(6)); // 8
console.log(fibonacciRecursive(0)); // 0

console.log(fibonacci(3)); // 2
console.log(fibonacci(6)); // 8
console.log(fibonacci(0)); // 0
