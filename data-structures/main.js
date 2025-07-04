class SLLNode {
  constructor(val, next) {
    this.val = val;
    this.next = next;
  }
}
class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  get(index) {
    if (index < 1 || index > this.length) {
      return undefined;
    } else {
      let current = 1;
      let node = this.head;
      while (current < index) {
        node = node.next;
        current++;
      }
      return node;
    }
  }

  set(index, val) {
    let node = this.get(index);
    if (!node) {
      return undefined;
    } else {
      node.val = val;
      return true;
    }
  }

  push(val) {
    if (this.length <= 0) {
      this.head = this.tail = new SLLNode(val);
      this.length++;
      return this.head;
    } else {
      let node = this.tail;
      let newNode = new SLLNode(val);
      node.next = newNode;
      this.tail = newNode;
      this.length++;
      return newNode;
    }
  }

  pop() {
    if (this.length <= 0) {
      return undefined;
    }
    if (this.length === 1) {
      let oldHead = this.head;
      this.head = this.tail = null;
      this.length--;
      return oldHead;
    } else {
      let node = this.get(this.length - 1);
      if (!node) {
        return undefined;
      } else {
        let lastTail = node.next;
        this.tail = node;
        this.tail.next = null;
        this.length--;
        return lastTail;
      }
    }
  }

  unshift(val) {
    let newNode = new SLLNode(val);
    if (this.length <= 0) {
      this.head = this.tail = new SLLNode(val);
    } else {
      let oldHead = this.head;
      this.head = newNode;
      this.head.next = oldHead;
    }
    this.length++;
    return true;
  }

  shift() {
    if (this.length <= 0) {
      return undefined;
    }
    let oldHead;
    if (this.length === 1) {
      oldHead = this.head;
      this.head = this.tail = null;
    } else {
      oldHead = this.head;
      let newHead = oldHead.next;
      oldHead.next = null;
      this.head = newHead;
    }
    this.length--;
    return oldHead;
  }

  insert(index, val) {
    if (index === 1) {
      return this.unshift(val);
    }
    if (index === this.length) {
      return this.push(val);
    }
    let node = this.get(index - 1);
    if (!node) {
      return undefined;
    } else {
      let rightSide = node.next;
      let newNode = new SLLNode(val);
      node.next = newNode;
      newNode.next = rightSide;
      this.length++;
      return true;
    }
  }

  remove(index) {
    if (index === 1) {
      return this.shift();
    }
    if (index === this.length) {
      return this.pop();
    }
    let node = this.get(index - 1);
    if (!node) {
      return undefined;
    } else {
      let requiredNode = node.next;
      node.next = requiredNode.next;
      requiredNode.next = null;
      this.length--;
      return requiredNode;
    }
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next = null,
      prev = null;
    for (let i = 1; i <= this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
}

// const sll = new SinglyLinkedList();
// sll.push(1);
// sll.push(2);
// sll.push(3);
// sll.push(4);
// sll.unshift(0);

// *****************************************************************
// *****************************************************************
// *****************************************************************

class DLLNode {
  constructor(val, next, prev) {
    this.val = val;
    this.next = next;
    this.prev = prev;
  }
}

// DoublyLinkedList

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  get(index) {
    if (index < 1 || index > this.length) {
      return undefined;
    } else {
      let current, node;
      if (index <= this.length / 2) {
        console.log("Onward Loop");
        current = 1;
        node = this.head;
        while (current < index) {
          node = node.next;
          current++;
        }
      } else {
        console.log("Outward Loop");
        current = this.length - 1;
        node = this.tail;
        while (current >= index) {
          node = node.prev;
          current--;
        }
      }
      return node;
    }
  }

  set(index, val) {
    let node = this.get(index);
    if (!node) {
      return undefined;
    } else {
      node.val = val;
      return true;
    }
  }

  push(val) {
    let newNode = new DLLNode(val);
    if (this.length <= 0) {
      this.head = this.tail = newNode;
    } else {
      const oldTail = this.tail;
      this.tail = newNode;
      this.tail.prev = oldTail;
      oldTail.next = this.tail;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.length <= 0) {
      return undefined;
    }
    const node = this.tail;
    if (this.length === 1) {
      this.head = this.tail = null;
    } else {
      this.tail = node.prev;
      this.tail.next = node.prev = null;
    }
    this.length--;
    return node;
  }

  unshift(val) {
    let newNode = new DLLNode(val);
    let oldHead = this.head;
    this.head = newNode;
    this.head.next = oldHead;
    oldHead.prev = this.head;
    this.length++;
    return true;
  }

  shift() {
    if (this.length <= 0) {
      return undefined;
    }
    let newHead = this.head.next;
    let oldHead = this.head;
    if (this.length === 1) {
      this.head = this.tail = null;
    } else {
      this.head = newHead;
      newHead.prev = oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }

  insert(index, val) {
    if (index === 1) {
      return this.unshift(val);
    }
    if (index === this.length) {
      return this.push(val);
    }
    let node = this.get(index - 1);
    if (!node) {
      return undefined;
    } else {
      let rightSide = node.next;
      let newNode = new DLLNode(val);
      newNode.prev = node;
      node.next = newNode;
      newNode.next = rightSide;
      this.length++;
      return true;
    }
  }

  remove(index) {
    if (index === 1) {
      return this.shift();
    }
    if (index === this.length) {
      return this.pop();
    }
    let node = this.get(index - 1);
    if (!node) {
      return undefined;
    } else {
      let requiredNode = node.next;
      node.next = requiredNode.next;
      requiredNode.next.prev = node;
      requiredNode.next = null;
      this.length--;
      return requiredNode;
    }
  }
}

// const dll = new DoublyLinkedList();
// dll.push(1);
// dll.push(2);
// dll.push(3);
// dll.push(4);
// dll.unshift(0);

// *****************************************************************
// *****************************************************************
// *****************************************************************

// Stack
// stack is all about LIFO (last in, first out)

// 1)  method to make a stack
// use array to make a stack
// the below code is a valid stack as it adds items and remove the last added items first
let stack1 = [];
stack1.push("1");
stack1.pop();

// the below code is also a valid stack but it is not efficient as it removes a=items from start of array which causes performance issues
let stack2 = [];
stack2.unshift(1);
stack2.shift();

// custom stack class code
// we will use the singly linked list shift and unshift methods (but will name then push and pop) to make a stack as insertion and removal from start of singly linked list is O(1) so this will be a good example
class Stack {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    // unshift(val) {
    let newNode = new SLLNode(val);
    if (this.length <= 0) {
      this.head = this.tail = new SLLNode(val);
    } else {
      let oldHead = this.head;
      this.head = newNode;
      this.head.next = oldHead;
    }
    this.length++;
    return true;
  }

  pop() {
    // shift() {
    if (this.length <= 0) {
      return undefined;
    }
    let oldHead;
    if (this.length === 1) {
      oldHead = this.head;
      this.head = this.tail = null;
    } else {
      oldHead = this.head;
      let newHead = oldHead.next;
      oldHead.next = null;
      this.head = newHead;
    }
    this.length--;
    return oldHead;
  }
}

// const sta = new Stack();
// sta.push(1);
// sta.push(2);
// sta.push(3);
// sta.push(4);

// *****************************************************************
// *****************************************************************
// *****************************************************************

// Queue
// Queue is all about FIFO (first in, first out)

// 1)  method to make a Queue
// use array to make a Queue
// the below code is a valid Queue as it adds items and remove the item which was added first
let Queue1 = [];
Queue1.push("1");
Queue1.shift();

// the below code is also a valid Queue and but uper and this code is same because both will cause reindex so the better example for queue is the 3 method in which we use a class (SLL)
let Queue2 = [];
Queue2.unshift(1);
Queue2.pop();

// custom Queue class code
// we will use the singly linked list shift and unshift methods (but will name then push and pop) to make a Queue as insertion and removal from start of singly linked list is O(1) so this will be a good example
class Queue {
  // we should add item in the tail and remove item from head (this will give us FIFO functionality) and it will be the good case because if we added item in the head that will be ok but if we removed item from end that will be O(N) which is not good
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  enqueue(val) {
    // renamed "enqueue"
    // push(val) {
    if (this.length <= 0) {
      this.head = this.tail = new SLLNode(val);
      this.length++;
      return this.head;
    } else {
      let node = this.tail;
      let newNode = new SLLNode(val);
      node.next = newNode;
      this.tail = newNode;
      this.length++;
      return newNode;
    }
  }

  dequeue() {
    // renamed shift as dequeue, because we want to remove item from head
    // shift() {
    if (this.length <= 0) {
      return undefined;
    }
    if (this.length === 1) {
      let oldHead = this.head;
      this.head = this.tail = null;
      this.length--;
      return oldHead;
    } else {
      let newHead = this.head.next;
      let oldHead = this.head;
      oldHead.next = null;
      this.head = newHead;
      this.length--;
      return oldHead;
    }
  }
}

const queueOBJ = new Queue();
queueOBJ.enqueue(1);
queueOBJ.enqueue(2);
queueOBJ.enqueue(3);
queueOBJ.enqueue(4);

// just some random code (ket key values from objects inside a array)
var arr = [{ message: 1 }, { message: 2 }, { message: 3 }];
let result = arr.flatMap(Object.values);

// *****************************************************************
// *****************************************************************
// *****************************************************************

// Binary Search Trees
class BSTNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
    this.no_of_times_occured = 0;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    if (val === null || val === undefined) {
      // for the repeated values you can use a "number of time" kep in node and increase that if a number repeats
      return "no value passed in insert function";
    }
    const newNode = new BSTNode(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let continueLoop = true;
    let observingSide = null;
    if (val > this.root.val) {
      observingSide = this.root.right;
      if (!observingSide) {
        this.root.right = newNode;
        continueLoop = false;
      }
    } else if (val < this.root.val) {
      observingSide = this.root.left;
      if (!observingSide) {
        this.root.left = newNode;
        continueLoop = false;
      }
    } else if (val === this.root.val) {
      this.root.no_of_times_occured++;
      return this;
    } else {
      return "invalid value passed in insert function";
    }

    while (continueLoop) {
      if (observingSide.val === val) {
        observingSide.no_of_times_occured++;
        continueLoop = false;
        return this;
      } else if (val > observingSide.val) {
        if (!observingSide.right) {
          observingSide.right = newNode;
          continueLoop = false;
        } else {
          observingSide = observingSide.right;
        }
      } else {
        if (!observingSide.left) {
          observingSide.left = newNode;
          continueLoop = false;
        } else {
          observingSide = observingSide.left;
        }
      }
    }
    return this;
  }

  search(val) {
    if (val === null || val === undefined) {
      // for the repeated values you can use a "number of time" kep in node and increase that if a number repeats
      return "no value passed in search function";
    }
    if (val.NaN()) {
      return "invalid value passed in search function";
    }
    if (!this.root) {
      return "tree is empty, add something first";
    }
    let observingSide = this.root;
    let found = false;
    while (observingSide && !found) {
      if (observingSide.val === val) {
        return observingSide;
      } else if (val > observingSide.val) {
        observingSide = observingSide.right;
      } else {
        observingSide = observingSide.left;
      }
    }
    return "not found in tree";
  }

  bfs() {
    // breath first search
    let queue = new Queue(),
      visitedItems = [],
      counter = 0;
    if (!this.root) {
      return "tree is empty";
    } else {
      let current = this.root;
      queue.enqueue(current);
      while (queue.length > 0) {
        current = queue.dequeue().val; // because it will return a Queue Node so get the value of that queue node.
        visitedItems.push(current.val);
        if (!!current.left) {
          queue.enqueue(current.left);
        }
        if (!!current.right) {
          queue.enqueue(current.right);
        }
        // debugger;
        counter++;
      }
      return {
        visitedItems,
        counter,
      };
    }
  }

  dfsPre() {
    // deapth first search
    let data = [];
    let counter = 0;
    function treverse(node) {
      data.push(node.val);
      if (node.left) treverse(node.left);
      if (node.right) treverse(node.right);
      counter++;
    }
    treverse(this.root);
    return { data, counter };
  }

  dfsPost() {
    let data = [];
    let counter = 0;
    function treverse(node) {
      if (node.left) treverse(node.left);
      if (node.right) treverse(node.right);
      data.push(node.val);
      counter++;
    }
    treverse(this.root);
    return {
      data,
      counter,
    };
  }

  dfsInOrder() {
    let data = [];
    let counter = 0;
    function treverse(node) {
      if (node.left) treverse(node.left);
      data.push(node.val);
      if (node.right) treverse(node.right);
      counter++;
    }
    treverse(this.root);
    return {
      data,
      counter,
    };
  }
}

// const BSTObj = new BinarySearchTree();
// BSTObj.insert(99);
// BSTObj.insert(98);
// BSTObj.insert(97);
// BSTObj.insert(100);
// BSTObj.insert(160);
// BSTObj.insert(170);
// BSTObj.insert(168);

// *****************************************************************
// *****************************************************************
// *****************************************************************

// Heaps
// Max Binary Heaps   (both chil nodes should be less than the parent node)
class MaxBinaryHeap {
  constructor() {
    this.data = [];
    this.length = 0;
  }

  insert(val) {
    if (val === null || val === undefined) {
      alert("No value passed in insert function.");
      return;
    }
    this.data.push(val);
    this.bubbleUp();
    this.length++;
    return this;
  }

  bubbleUp() {
    if (this.length > 0) {
      let valIndex = this.data.length - 1;
      let parentIndex = Math.floor((valIndex - 1) / 2);
      while (parentIndex > -1 && this.data[valIndex] > this.data[parentIndex]) {
        if (this.data[valIndex] > this.data[parentIndex]) {
          this.swap(valIndex, parentIndex);
        }
        valIndex = parentIndex;
        parentIndex = Math.floor((valIndex - 1) / 2);
      }
    }
  }

  swap(index1, index2) {
    [this.data[index1], this.data[index2]] = [
      this.data[index2],
      this.data[index1],
    ];
  }

  extractRoot() {
    if (this.data.length < 1) {
      return "no data found";
    }
    this.swap(0, this.data.length - 1);
    const oldRootElement = this.data.pop();
    this.length--;
    this.sinkDown();
    return oldRootElement;
  }

  sinkDown() {
    let swapedIndex = 0;
    let swapedIndexLeftChild = 2 * swapedIndex + 1;
    let swapedIndexRightChild = 2 * swapedIndex + 2;
    while (
      this.data[swapedIndexLeftChild] > this.data[swapedIndex] ||
      this.data[swapedIndexRightChild] > this.data[swapedIndex]
    ) {
      console.log(
        "Starting == this.data = ",
        this.data,
        "swapedIndex = ",
        swapedIndex,
        "swapedIndexLeftChild = ",
        swapedIndexLeftChild,
        "swapedIndexRightChild = ",
        swapedIndexRightChild,
        "this.data[swapedIndex] = ",
        this.data[swapedIndex],
        "this.data[swapedIndexLeftChild] = ",
        this.data[swapedIndexLeftChild],
        "this.data[swapedIndexRightChild] = ",
        this.data[swapedIndexRightChild],
        "this.data[swapedIndexLeftChild] > this.data[swapedIndex] = ",
        this.data[swapedIndexLeftChild] > this.data[swapedIndex],
        "this.data[swapedIndexRightChild] > this.data[swapedIndex] = ",
        this.data[swapedIndexRightChild] > this.data[swapedIndex]
      );
      if (
        this.data[swapedIndexLeftChild] <= this.data[swapedIndex] &&
        this.data[swapedIndexRightChild] <= this.data[swapedIndex]
      ) {
        break; // no child is large than parent, so break
      }
      if (
        this.data[swapedIndexLeftChild] > this.data[swapedIndex] &&
        this.data[swapedIndexRightChild] > this.data[swapedIndex]
      ) {
        // both childs are larger than parent
        if (
          this.data[swapedIndexLeftChild] > this.data[swapedIndexRightChild]
        ) {
          // left child is larger than right child
          this.swap(swapedIndex, swapedIndexLeftChild);
          swapedIndex = swapedIndexLeftChild;
        } else {
          // left child is smaller than right child
          this.swap(swapedIndex, swapedIndexRightChild);
          swapedIndex = swapedIndexRightChild;
        }
      } else {
        if (this.data[swapedIndexLeftChild] > this.data[swapedIndex]) {
          // left child is larger than parent
          this.swap(swapedIndex, swapedIndexLeftChild);
          swapedIndex = swapedIndexLeftChild;
        }
        if (this.data[swapedIndexRightChild] > this.data[swapedIndex]) {
          // right child is larger than parent
          this.swap(swapedIndex, swapedIndexRightChild);
          swapedIndex = swapedIndexRightChild;
        }
      }
      swapedIndexLeftChild = 2 * swapedIndex + 1;
      swapedIndexRightChild = 2 * swapedIndex + 2;
      console.log("Ending == this.data = ", this.data);
    }
  }
}

// const mbh = new MaxBinaryHeap();
// mbh.insert(55);
// mbh.insert(39);
// mbh.insert(41);
// mbh.insert(18);
// mbh.insert(27);
// mbh.insert(12);
// mbh.insert(33);

// *****************************************************************
// *****************************************************************
// *****************************************************************

// Heaps
// Max Binary Heaps   (both chil nodes should be less than the parent node)
class PQNode {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}
class PriorityQueue {
  constructor() {
    this.data = [];
    this.length = 0;
  }

  enqueue(val, priority) {
    if (val === null || undefined || priority === null || undefined) {
      alert("No value passed in enqueue function.");
      return;
    }
    const newNode = new PQNode(val, priority);
    this.data.push(newNode);
    this.bubbleUp();
    this.length++;
    return this;
  }

  bubbleUp() {
    if (this.length > 0) {
      let valIndex = this.data.length - 1;
      let parentIndex = Math.floor((valIndex - 1) / 2);
      while (
        parentIndex > -1 &&
        this.data[valIndex].priority < this.data[parentIndex].priority
      ) {
        if (this.data[valIndex].priority < this.data[parentIndex].priority) {
          this.swap(valIndex, parentIndex);
        }
        valIndex = parentIndex;
        parentIndex = Math.floor((valIndex - 1) / 2);
      }
    }
  }

  swap(index1, index2) {
    [this.data[index1], this.data[index2]] = [
      this.data[index2],
      this.data[index1],
    ];
  }

  dequeue() {
    if (this.data.length < 1) {
      return "no data found";
    }
    this.swap(0, this.data.length - 1);
    const oldRootElement = this.data.pop();
    this.length--;
    this.sinkDown();
    return oldRootElement;
  }

  sinkDown() {
    let swapedIndex = 0;
    let swapedIndexLeftChild = 2 * swapedIndex + 1;
    let swapedIndexRightChild = 2 * swapedIndex + 2;
    while (
      (this.data[swapedIndexLeftChild]
        ? this.data[swapedIndexLeftChild].priority <
          this.data[swapedIndex].priority
        : false) ||
      (this.data[swapedIndexRightChild]
        ? this.data[swapedIndexRightChild].priority <
          this.data[swapedIndex].priority
        : false)
    ) {
      // console.log(
      //   "Starting == this.data = ",
      //   this.data,
      //   "swapedIndex = ",
      //   swapedIndex,
      //   "swapedIndexLeftChild = ",
      //   swapedIndexLeftChild,
      //   "swapedIndexRightChild = ",
      //   swapedIndexRightChild,
      //   "this.data[swapedIndex] = ",
      //   this.data[swapedIndex],
      //   "this.data[swapedIndexLeftChild] = ",
      //   this.data[swapedIndexLeftChild],
      //   "this.data[swapedIndexRightChild] = ",
      //   this.data[swapedIndexRightChild],
      //   "this.data[swapedIndexLeftChild].priority < this.data[swapedIndex].priority = ",
      //   this.data[swapedIndexLeftChild].priority <
      //     this.data[swapedIndex].priority,
      //   "this.data[swapedIndexRightChild].priority < this.data[swapedIndex].priority = ",
      //   this.data[swapedIndexRightChild].priority <
      //     this.data[swapedIndex].priority
      // );
      if (
        this.data[swapedIndexLeftChild]
          ? this.data[swapedIndexLeftChild].priority >=
            this.data[swapedIndex].priority
          : false && this.data[swapedIndexRightChild]
          ? this.data[swapedIndexRightChild].priority >=
            this.data[swapedIndex].priority
          : false
      ) {
        break; // no child is large than parent, so break
      }
      if (
        this.data[swapedIndexLeftChild]
          ? this.data[swapedIndexLeftChild].priority <
            this.data[swapedIndex].priority
          : false && this.data[swapedIndexRightChild]
          ? this.data[swapedIndexRightChild].priority <
            this.data[swapedIndex].priority
          : false
      ) {
        // both childs are larger than parent
        if (
          this.data[swapedIndexLeftChild]
            ? this.data[swapedIndexLeftChild].priority <
              this.data[swapedIndexRightChild].priority
            : false
        ) {
          // left child is larger than right child
          this.swap(swapedIndex, swapedIndexLeftChild);
          swapedIndex = swapedIndexLeftChild;
        } else {
          // left child is smaller than right child
          this.swap(swapedIndex, swapedIndexRightChild);
          swapedIndex = swapedIndexRightChild;
        }
      } else {
        if (
          this.data[swapedIndexLeftChild]
            ? this.data[swapedIndexLeftChild].priority <
              this.data[swapedIndex].priority
            : false
        ) {
          // left child is larger than parent
          this.swap(swapedIndex, swapedIndexLeftChild);
          swapedIndex = swapedIndexLeftChild;
        }
        if (
          this.data[swapedIndexRightChild]
            ? this.data[swapedIndexRightChild].priority <
              this.data[swapedIndex].priority
            : false
        ) {
          // right child is larger than parent
          this.swap(swapedIndex, swapedIndexRightChild);
          swapedIndex = swapedIndexRightChild;
        }
      }
      swapedIndexLeftChild = 2 * swapedIndex + 1;
      swapedIndexRightChild = 2 * swapedIndex + 2;
      // console.log("Ending == this.data = ", this.data);
    }
  }
}

// const pq = new PriorityQueue();
// pq.enqueue(55, 11);
// pq.enqueue(39, 12);
// pq.enqueue(41, 13);
// pq.enqueue(18, 14);
// pq.enqueue(27, 15);
// pq.enqueue(12, 1);
// pq.enqueue(33, 0);

// *****************************************************************
// *****************************************************************
// *****************************************************************

class HashTable {
  constructor(size = 53) {
    this.data = new Array(size);
  }

  _hash = (val, length = this.data.length) => {
    let total = 0;
    let wildPrime = 31;
    for (let i = 0; i < Math.min(val.length, 100); i++) {
      total = (total * wildPrime + (val[i].charCodeAt(0) - 96)) % length;
    }
    return total;
  };
  set(key, val) {
    let index = this._hash(key);
    if (!this.data[index]) {
      this.data[index] = [];
    }
    let keyIndex = this.data[index].length
      ? this.data[index].findIndex((el) => el[0] === key)
      : -1;
    if (keyIndex > -1) {
      this.data[index][keyIndex][1] = val;
    } else {
      this.data[index].push([key, val]);
    }
    return true;
  }

  get(key) {
    let index = this._hash(key);
    if (!this.data[index]) {
      return undefined;
    }
    let keyIndex = this.data[index].length
      ? this.data[index].findIndex((el) => el[0] === key)
      : -1;
    if (keyIndex > -1) {
      return this.data[index][keyIndex][1];
    }
    return undefined;
  }

  values() {
    let resultArr = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        for (let j = 0; j < this.data[i].length; j++) {
          if (!resultArr.includes(this.data[i][j][1])) {
            resultArr.push(this.data[i][j][1]);
          }
        }
      }
    }
    return resultArr;
  }

  keys() {
    let resultArr = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        for (let j = 0; j < this.data[i].length; j++) {
          if (!resultArr.includes(this.data[i][j][0])) {
            resultArr.push(this.data[i][j][0]);
          }
        }
      }
    }
    return resultArr;
  }
}

// const ht = new HashTable(17);
// ht.set('pink', 'pink color');
// ht.set('cayn', 'cayn color');
// ht.set('dark', 'dark color');
// ht.set('red', 'red color');
// ht.set('orange', 'orange color');
// ht.set('blue', 'blue color');
// ht.set('yellow', 'yellow color');
// ht.set('pink2', 'pink2 color');
// ht.set('pink3', 'pink3 color');
// ht.set('pink', 'overide');

// *****************************************************************
// *****************************************************************
// *****************************************************************

// Graphs
// Graphs with adjacencylist
class Graph {
  constructor() {
    this.adjacencylist = {};
  }

  addVertex(vertex) {
    if (!this.adjacencylist[vertex]) this.adjacencylist[vertex] = [];
  }

  addEdge(vertex1, vertex2) {
    if (!this.adjacencylist[vertex1] || !this.adjacencylist[vertex2])
      return "Invalid Vertexs Entered, check if vertexs exists";
    this.adjacencylist[vertex1].push(vertex2);
    this.adjacencylist[vertex2].push(vertex1);
    return this;
  }

  checkVertex(vertex) {
    return !!this.adjacencylist[vertex];
  }

  removeEdge(v1, v2) {
    if (!this.adjacencylist[v1] || !this.adjacencylist[v2])
      return "Invalid Vs Entered, check if vs exists";
    this.adjacencylist[v1].pop(v2);
    this.adjacencylist[v2].pop(v1);
    let index = this.adjacencylist[v1].findIndex((el) => el == v2);
    index > -1 ? this.adjacencylist[v1].splice(index, 1) : null;
    index = this.adjacencylist[v2].findIndex((el) => el == v1);
    index > -1 ? this.adjacencylist[v2].splice(index, 1) : null;
    return this;
  }

  removeVertex(v) {
    if (this.adjacencylist[v]) {
      delete this.adjacencylist[v];
      for (const key in this.adjacencylist) {
        let index = this.adjacencylist[key].findIndex((el) => el == v);
        index > -1 ? this.adjacencylist[key].splice(index, 1) : null;
      }
      return this;
    }
    return undefined;
  }
  DFRtreverseGraph(startingVertex) {
    // DFR = depth first recursively
    if (!this.adjacencylist[startingVertex]) {
      return "invalid vertex or vertex have no edges";
    }
    let resultArr = [];
    let visitedVertexs = {};
    const recursiveGraphTreverse = (innerVertex) => {
      if (!innerVertex) {
        return null;
      }
      visitedVertexs[innerVertex] = true;
      resultArr.push(innerVertex);
      this.adjacencylist[innerVertex].forEach((el) => {
        if (!visitedVertexs[el]) {
          return recursiveGraphTreverse(el);
        }
      });
    };
    recursiveGraphTreverse(startingVertex);
    return { resultArr, visitedVertexs };
  }

  DFItreverseGraph(startingVertex) {
    // DFI = depth first recursively
    if (!this.adjacencylist[startingVertex]) {
      return "invalid vertex or vertex have no edges";
    }
    let resultArr = [];
    let visitedVertexs = {};
    const graphVertexsStack = new Stack();
    graphVertexsStack.push(startingVertex);
    while (graphVertexsStack.length > 0) {
      const vertex = graphVertexsStack.pop().val;
      resultArr.push(vertex);
      // debugger;
      visitedVertexs[vertex] = true;
      // debugger;
      if (vertex) {
        for (let i = 0; i < this.adjacencylist[vertex].length; i++) {
          if (!visitedVertexs[this.adjacencylist[vertex][i]]) {
            graphVertexsStack.push(this.adjacencylist[vertex][i]);
          }
        }
      }
    }
    return { resultArr, visitedVertexs };
  }
}

// const gph = new Graph();
// gph.addVertex("a");
// gph.addVertex("b");
// gph.addVertex("c");
// gph.addVertex("d");
// gph.addVertex("e");
// gph.addVertex("f");
// gph.addEdge("a", "b");
// gph.addEdge("a", "c");
// gph.addEdge("b", "d");
// gph.addEdge("c", "e");
// gph.addEdge("d", "e");
// gph.addEdge("d", "f");
// gph.addEdge("e", "f");


class weightedGraph {
  constructor() {
    this.data = {};
  }

  addVertex(v) {
    if (!this.data[v]) {
      this.data[v] = [];
      return "added";
    }
    return "exists";
  }

  addEdge(v1, v2, w) {
    if (!v1 || !v2 || !w) {
      this.data[v1].push({vertex: v2, weigth: w});
      this.data[v2].push({vertex: v1, weigth: w});
    }
  }
}

const wgObj = new weightedGraph();
wgObj.addVertex("a");
wgObj.addVertex("b");
wgObj.addVertex("c");
wgObj.addVertex("d");

wgObj.addEdge("a", "b", 5);
wgObj.addEdge("a", "c", 7);
wgObj.addEdge("b", "d", 10);