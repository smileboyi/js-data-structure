class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

export default class LinkedList {
  length = 0;
  head = null;
  Node = null;

  constructor() {}

  append(element) {
    const node = new Node(element);
    let current;
    if (this.head === null) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.length = this.length + 1;
  }

  insert(position, element) {
    if (position > -1 && position < this.length) {
      const node = new Node(element);
      let current = this.head,
        previous,
        index = 0;
      if (position === 0) {
        node.next = current;
        this.head = node;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        node.next = current;
        previous.next = node;
      }
      this.length = this.length + 1;
      return true;
    } else {
      return false;
    }
  }

  remove(element) {
    const index = this.indexOf(element);
    return this.removeAt(index);
  }

  removeAt(position) {
    if (position > -1 && position < this.length) {
      let current = this.head,
        previous,
        index = 0;
      if (position === 0) {
        this.head = current.next;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        previous.next = current.next;
      }
      this.length = this.length - 1;
      current.next = null;
      return current.element;
    } else {
      return null;
    }
  }

  indexOf(element) {
    let current = this.head,
      index = 0;
    while (current) {
      if (element === current.element) {
        return index;
      }
      index++;
      current = current.next;
    }
    return -1;
  }

  isEmpty() {
    return this.length === 0;
  }

  size() {
    return this.length;
  }

  getHead() {
    return this.head;
  }

  toString() {
    let current = this.head,
      string = '';
    while (current) {
      string += ',' + current.element;
      current = current.next;
    }
    return string.slice(1);
  }
}

// let linkedList = new LinkedList();
// console.log(linkedList.isEmpty());
// linkedList.append(5);
// linkedList.append(8);
// linkedList.append(15);
// linkedList.insert(1, 10);
// console.log(linkedList.getHead());
// console.log(linkedList.toString());
// linkedList.append(20);
// linkedList.append(30);
// linkedList.removeAt(1);
// console.log(linkedList.toString());
// linkedList.remove(5);
// console.log(linkedList.toString());
// console.log(linkedList.size());
// console.log(linkedList.getHead());
// console.log(linkedList.isEmpty());
