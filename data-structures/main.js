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
      this.length++;
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
      this.length++;
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

const BSTObj = new BinarySearchTree();
BSTObj.insert(99);
BSTObj.insert(98);
BSTObj.insert(97);
BSTObj.insert(100);
BSTObj.insert(160);
BSTObj.insert(170);
BSTObj.insert(168);
