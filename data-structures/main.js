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
      return false;
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
    let oldHead = this.head;
    this.head = newNode;
    this.head.next = oldHead;
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
      return false;
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
      return false;
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
      return false;
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
      return false;
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
      return false;
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

const dll = new DoublyLinkedList();
dll.push(1);
dll.push(2);
dll.push(3);
dll.push(4);
dll.unshift(0);
