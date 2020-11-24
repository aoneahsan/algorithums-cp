class Node {
  constructor(val, next) {
    this.val = val;
    this.next = next;
  }
}
class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.lenght = 0;
  }

  get(index) {
    if (index < 1 || index > this.lenght) {
      return undefined;
    } else {
      current = 1;
      let node = this.head;
      while (current < index) {
        node = node.next;
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
    current = 1;
    let node = this.tail;
    let newNode = new Node(val);
    node.next = newNode;
    this.tail = newNode;
    return newNode;
  }

  pop() {
    let node = this.get(this.lenght - 1);
    if (!node) {
      return undefined;
    } else {
      let lastTail = node.next;
      this.tail = node;
      this.tail.next = null;
      return lastTail;
    }
  }

  shift(val) {
    let newNode = new Node(val);
    let oldHead = this.head;
    this.head = newNode;
    this.head.next = oldHead;
    return true;
  }

  unshift() {
    let newHead = this.head.next;
    let oldHead = this.head;
    this.head = newHead;
    return oldHead;
  }

  insert(index, val) {
    if (index === 1) {
      return this.unshift(val);
    }
    if (index === this.lenght) {
      return this.push(val);
    }
    let node = this.get(index - 1);
    if (!node) {
      return false;
    } else {
      let rightSide = node.next;
      let newNode = new Node(val);
      node.next = newNode;
      newNode.next = rightSide;
      return true;
    }
  }

  remove(index) {
    if (index === 1) {
      return this.shift();
    }
    if (index === this.lenght) {
      return this.pop();
    }
    let node = this.get(index - 1);
    if (!node) {
      return false;
    } else {
      let requiredNode = node.next;
      node.next = requiredNode.next;
      requiredNode.next = null;
      return requiredNode;
    }
  }
}

const sll = new SinglyLinkedList();
sll.push(1);
sll.push(2);
sll.push(3);
sll.push(4);
sll.shift(0);
