export default class Dictionary {
  constructor() {
    this.items = {};
  }

  set(key, value) {
    this.items[key] = value;
  }

  remove(key) {
    if (this.has(key)) {
      delete this.items[key];
      return true;
    }
    return false;
  }

  has(key) {
    return key in this.items;
  }

  get(key) {
    return this.items[key];
  }

  clear() {
    this.items = {};
  }

  size() {
    return Object.keys(this.items).length;
  }

  values() {
    return Object.values(this.items);
  }
}

// const dictionary = new Dictionary();
// dictionary.set('a', 1);
// dictionary.set('b', 2);
// console.log(dictionary.values());
// console.log(dictionary.has('a'));
// dictionary.remove('a');
// console.log(dictionary.has('a'));
// console.log(dictionary.size());
// dictionary.clear();
// console.log(dictionary.size());
