// Determine if an object has a circular reference

// Method 1: use JSON.stringify, throw error if circular reference
function hasCycle(obj) {
  try {
    JSON.stringify(obj);
  } catch (e) {
    if (e.message.includes('circular')) {
      return true;
    }
  }
  return false;
}

// Method 2: use a Set to store visited objects
// Time complexity: O(n)
// Space complexity: O(n)
function hasCycle2(obj) {
  const visited = new Set();

  function detect(obj) {
    if (obj && typeof obj === 'object') {
      if (visited.has(obj)) return true;
      visited.add(obj);
      for (let val of Object.values(obj)) {
        if (detect(val)) return true;
      }
    }
    return false;
  }

  return detect(obj);
}

// Test
let obj1 = {
  a: {
    b: null,
  },
};
obj1.a.b = obj1;

let obj2 = {
  a: {
    b: 1,
  },
};
console.log(hasCycle(obj1)); // true
console.log(hasCycle(obj2)); // false
console.log(hasCycle2(obj1)); // true
console.log(hasCycle2(obj2)); // false
