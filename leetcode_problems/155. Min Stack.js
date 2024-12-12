/*
155. Min Stack
Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.
Implement the MinStack class:
MinStack() initializes the stack object.
void push(int val) pushes the element val onto the stack.
void pop() removes the element on the top of the stack.
int top() gets the top element of the stack.
int getMin() retrieves the minimum element in the stack.
You must implement a solution with O(1) time complexity for each function.
*/

/*
Approach: Store the min val ever of each element.

Time complexity: O(1)
Space complexity: O(n)
*/

class MinStack {
  constructor() {
    this.stack = [];
  }

  push(val) {
    const lastItem = this.stack.at(-1);
    this.stack.push({
      val,
      min: lastItem ? Math.min(lastItem.min, val) : val,
    });
  }

  pop() {
    const lastItem = this.stack.pop();
    return lastItem?.val;
  }

  top() {
    const lastItem = this.stack.at(-1);
    return lastItem?.val;
  }

  getMin() {
    const lastItem = this.stack.at(-1);
    return lastItem?.min;
  }
}

// Test
const obj = new MinStack();
obj.push(1);
console.log(obj.pop()); // 1
obj.push(2);
obj.push(3);
console.log(obj.top()); // 3
console.log(obj.getMin()); // 2
