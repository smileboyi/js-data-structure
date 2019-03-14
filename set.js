export default class Set {
  constructor() {
    this.items = {};
  }

  add(value) {
    if (!this.has(value)) {
      this.items[value] = value;
      return true;
    }
    return false;
  }

  remove(value) {
    if (this.has(value)) {
      delete this.items[value];
      return true;
    }
    return false;
  }

  has(value) {
    return this.items.hasOwnProperty(value);
  }

  clear() {
    this.items = {};
  }

  size() {
    return Object.keys(this.items).length;
  }

  values() {
    return Object.keys(this.items);
  }

  // 并集
  union(otherSet) {
    const unionSet = new Set();
    let values = this.values();
    for (let i = 0, j = values.length; i < j; i++) {
      unionSet.add(values[i]);
    }
    values = otherSet.values();
    for (let i = 0, j = values.length; i < j; i++) {
      unionSet.add(values[i]);
    }
    return unionSet;
  }

  // 交集
  intersection(otherSet) {
    const intersectionSet = new Set();
    let values = this.values();
    for (let i = 0, j = values.length; i < j; i++) {
      if (otherSet.has(values[i])) {
        intersectionSet.add(values[i]);
      }
    }
    return intersectionSet;
  }

  // 差集
  difference(otherSet) {
    const differenceSet = new Set();
    const values = this.values();
    for (let i = 0, j = values.length; i < j; i++) {
      if (!otherSet.has(values[i])) {
        differenceSet.add(values[i]);
      }
    }
    return differenceSet;
  }

  // 子集
  subSet(otherSet) {
    if (this.size() > otherSet.size()) {
      return false;
    } else {
      const values = this.values();
      for (let i = 0, j = values.length; i < j; i++) {
        if (!otherSet.has(values[i])) {
          return false;
        }
      }
      return true;
    }
  }
}

// const setA = new Set();
// setA.add(1);
// setA.add(2);
// setA.add(3);
// console.log(setA.has(2));
// setA.remove(2);
// console.log('--------------');
// console.log(setA.values());
// console.log('--------------');
// console.log(setA.size());
// console.log(setA.has(2));
// const setB = new Set();
// setB.add(3);
// setB.add(4);
// setB.add(5);
// console.log('--------------');
// console.log(setA.intersection(setB));
// console.log('--------------');
// console.log(setA.difference(setB));
// console.log('--------------');
// console.log(setA.union(setB));
// console.log('--------------');
// console.log(setA.subSet(setB));
// const setC = new Set();
// setC.add(1);
// console.log(setC.subSet(setA));
