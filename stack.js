export default class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }
  // 移除并返回栈顶元素
  pop() {
    return this.items.pop();
  }

  // 返回栈顶元素
  peek() {
    const len = this.items.length;
    if (len > 0) {
      return this.items[len - 1];
    } else {
      return undefined;
    }
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

// const stack = new Stack();
// console.log(stack.isEmpty());
// stack.push(5);
// stack.push(8);
// console.log(stack.peek());
// stack.push(11);
// console.log(stack.size());
// console.log(stack.isEmpty());
// stack.print();
// stack.clear();
// console.log(stack.isEmpty());
