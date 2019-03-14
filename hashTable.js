import LinkedList from './linkedList';

class valuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }

  toString() {
    return `[${this.key}-${this.value}]`;
  }
}

export default class HashTable {
  constructor() {
    this.table = [];
  }

  loseCode(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = key.charCodeAt(i);
    }
    return hash;
  }

  djb2Code(key) {
    let hash = 5381;
    for (let i = 0; i < key.length; i++) {
      const char = key.charCodeAt(i);
      hash = (hash << 5) + hash + char; /* hash * 33 + c */
    }
    return hash;
  }

  put(key, value) {
    const position = this.loseCode(key);
    if (this.table[position] == undefined) {
      this.table[position] = new LinkedList();
    }
    // 哈希值是一样的元素存放在链表结构中
    this.table[position].append(new valuePair(key, value));
  }

  remove(key) {
    const position = this.loseCode(key);
    if (this.table[position] !== undefined) {
      let current = this.table[position].getHead();
      while (current.next) {
        if (current.element.key === key) {
          this.table[position].remove(current.element);
          if (this.table[position].isEmpty()) {
            this.table[position] = undefined;
          }
          return true;
        }
        current = current.next;
      }

      // 第一个或最后一个
      if (current.element.key === key) {
        this.table[position].remove(current.element);
        if (this.table[position].isEmpty()) {
          this.table[position] = undefined;
        }
        return true;
      }
      return false;
    }
    return false;
  }

  get(key) {
    const position = this.loseCode(key);
    if (this.table[position] !== undefined) {
      let current = this.table[position].getHead();
      while (current.next) {
        if (current.element.key === key) {
          return current.element.value;
        }
        current = current.next;
      }

      // 第一个或最后一个
      if (current.element.key === key) {
        return current.element.value;
      }
    }
    return undefined;
  }

  print() {
    for (let i = 0, j = this.table.length; i < j; i++) {
      if (this.table[i] !== undefined) {
        console.log(i + ': ' + this.table[i]);
      }
    }
  }
}

// const hashTable = new HashTable();
// hashTable.put('John', 'jojn.@test.com');
// hashTable.put('Tyrion', 'tyrion.@test.com');
// hashTable.put('Aaron', 'aaron.@test.com');
// hashTable.put('Donnle', 'donnle.@test.com');
// hashTable.put('Ana', 'ana.@test.com');
// hashTable.put('Jonathan', 'jonathan.@test.com');
// hashTable.put('Jamie', 'jamie.@test.com');
// hashTable.print();
// console.log(hashTable.get('Jamie'));
// hashTable.remove('Jamie');
// console.log(hashTable.get('Jamie'));
