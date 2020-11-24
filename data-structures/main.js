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
    if (this.lenght <= 0) {
      this.head = this.tail = new Node(val);
      this.lenght++;
      return this.head;
    } else {
      let node = this.tail;
      let newNode = new Node(val);
      node.next = newNode;
      this.tail = newNode;
      this.lenght++;
      return newNode;
    }
  }

  pop() {
    if (this.lenght <= 0) {
      return undefined;
    }
    if (this.lenght === 1) {
      let oldHead = this.head;
      this.head = this.tail = null;
      this.lenght--;
      return oldHead;
    } else {
      let node = this.get(this.lenght - 1);
      if (!node) {
        return undefined;
      } else {
        let lastTail = node.next;
        this.tail = node;
        this.tail.next = null;
        this.lenght--;
        return lastTail;
      }
    }
  }

  unshift(val) {
    let newNode = new Node(val);
    let oldHead = this.head;
    this.head = newNode;
    this.head.next = oldHead;
    this.lenght++;
    return true;
  }

  shift() {
    if (this.lenght <= 0) {
      return undefined;
    }
    if (this.lenght === 1) {
      let oldHead = this.head;
      this.head = this.tail = null;
      this.lenght--;
      return oldHead;
    } else {
      let newHead = this.head.next;
      let oldHead = this.head;
      oldHead.next = null;
      this.head = newHead;
      this.lenght--;
      return oldHead;
    }
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
      this.lenght++;
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
      this.lenght--;
      return requiredNode;
    }
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next = null, pre = null;
    for (let i = 1; i <= this.lenght; i++) {
        next = node.next;
        node.next = pre;
        pre = node;
        node = next;
    }
    return this;
  }
}

const sll = new SinglyLinkedList();
sll.push(1);
sll.push(2);
sll.push(3);
sll.push(4);
sll.shift(0);


// *****************************************************************
// *****************************************************************
// *****************************************************************


// DoublyLinkedList

class DoublyLinkedList {
  constructor() {}
}

const dll = new DoublyLinkedList();