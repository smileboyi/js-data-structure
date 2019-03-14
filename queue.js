export default class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    return this.items.shift();
  }

  // 返回最先被添加的原始，也是最先被移除的元素
  front() {
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  clear() {
    this.items.length = 0;
  }

  size() {
    return this.items.length;
  }

  print() {
    console.log(this.items.toString());
  }
}

// const queue = new Queue();
// console.log(queue.isEmpty());
// queue.enqueue('John');
// queue.enqueue('Jack');
// queue.enqueue('Camila');
// queue.print();
// console.log(queue.size());
// console.log(queue.isEmpty());
// queue.dequeue();
// queue.dequeue();
// console.log(queue.front());
// queue.clear();
// console.log(queue.isEmpty());
