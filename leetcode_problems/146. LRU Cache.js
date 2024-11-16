/*
146. LRU Cache
Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.
Implement the LRUCache class:
LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
int get(int key) Return the value of the key if the key exists, otherwise return -1.
void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache.
If the number of keys exceeds the capacity from this operation, evict the least recently used key.
The functions get and put must each run in O(1) average time complexity.
*/

/*
Approach: Use a double linked list to store used keys, use a Map to store key-Node.
Every time get or put, remove node from the list if exists, then add it to the tail.
If the number of keys exceeds the capacity, delete the head node.

Time complexity: O(1)
Space complexity: O(n)
*/

function DoubleListNode(key = 0, value = 0, next = null, prev = null) {
  this.key = key;
  this.value = value;
  this.next = next;
  this.prev = prev;
}

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.map = new Map();
    this.head = new DoubleListNode();
    this.tail = new DoubleListNode();
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  get(key) {
    if (this.map.has(key)) {
      const node = this.map.get(key);
      this.moveToHead(node);
      return node.value;
    }
    return -1;
  }

  put(key, value) {
    if (this.map.has(key)) {
      const node = this.map.get(key);
      node.value = value;
      this.moveToHead(node);
    } else {
      const node = new DoubleListNode(key, value);
      this.map.set(key, node);
      this.addToHead(node);
      if (this.map.size > this.capacity) {
        const removed = this.removeTail();
        this.map.delete(removed.key);
      }
    }
  }

  addToHead(node) {
    node.prev = this.head;
    node.next = this.head.next;
    this.head.next.prev = node;
    this.head.next = node;
  }

  removeNode(node) {
    node.next.prev = node.prev;
    node.prev.next = node.next;
  }

  moveToHead(node) {
    this.removeNode(node);
    this.addToHead(node);
  }

  removeTail() {
    const node = this.tail.prev;
    this.removeNode(node);
    return node;
  }
}

// Test
const cache = new LRUCache(2);
cache.put(1, 1);
cache.put(2, 2);
console.log(cache.get(1)); // 1
cache.put(3, 3);
console.log(cache.get(2)); // -1
cache.put(4, 4);
console.log(cache.get(3)); // 3
