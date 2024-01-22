class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(data) {
    const newNode = new Node(data);

    let current = this.head;
    
    if (!current) {
      this.head = newNode;
    } else {
      while (current.next) {
        current = current.next;
      }

      current.next = newNode;
    }
  }

  prepend(data) {
    const newNode = new Node(data);

    newNode.next = this.head;

    this.head = newNode;
  }

  size() {
    let count = 0;

    let current = this.head;

    while (current) {
      count++;
      current = current.next
    }

    return count;
  }

  getHead() {
    if (!this.head) return 'There is no data in this list.';
    return this.head;
  }

  getTail() {
    let current = this.head;

    if (!current) return 'There is no data in this list.';

    while (current.next) {
      current = current.next;
    }

    return current;
  }

  at(index) {
    if (index === 0 || !this.head) return this.getHead()
    
    let current = this.head;

    for (let i = 0; i < index; i++) {
      current = current.next;
      if (!current) return 'There is no element in that index.'
    }
    
    return current;
  }

  pop() {
    if (!this.head) return;
  
    if (this.size() === 1) {
      this.head = null;
    } else {
      let current = this.head;
      let previous;

      while (current.next) {
        previous = current;
        current = current.next;
      }

      previous.next = null;
    }
  }

  contains(data) {
    let current = this.head;

    while (current) {
      if (current.data === data) return true;
      current = current.next
    }

    return false;
  }

  find(data) {
    let current = this.head;
    let index = 0;
    
    while (current) {
      if (current.data === data) return index;
      current = current.next;
      index++
    }

    return null;
  }

  toString() {
    let current = this.head;
    let string = "";

    while (current) {
      string += `(${current.data}) -> `;
      current = current.next
    }

    return string += 'null';
  }

  insertAt(data, index) {
    if (index === 0 || !this.head) {
      this.prepend(data);
    } else if (index >= this.size()) {
      this.append(data);
    } else {
      const newNode = new Node(data);
      let current = this.head;
      let previous;

      for (let i = 0; i < index; i++) {
        previous = current;
        current = current.next
      }

      previous.next = newNode;
      newNode.next = current;
    }
  }

  removeAt(index) {
    if (!this.head) return;

    if (index === 0) {
      this.head = this.head.next;
    } else {
      let current = this.head;
      let previous;

      for (let i = 0; i < index; i++) {
        previous = current;
        current = current.next;
        if (!current) return 'There is no element in that index';
      }

      previous.next = current.next;
    }
  }
}

const list = new LinkedList();

list.append('item1');
list.append('item2');
list.prepend('item0')
console.log(list)
console.log(list.size())
console.log(list.getHead())
console.log(list.getTail())
console.log(list.at(1))
list.pop()
console.log(list.contains('item0'))
console.log(list.find('item2'))
list.append('item564')
console.log(list.toString())
list.insertAt('item100', 2)
list.insertAt('item1000', 645)
console.log(list.toString())
list.removeAt(0)
console.log(list.toString())
list.removeAt(2)
console.log(list.toString())
console.log(list.removeAt(100))
console.log(list.toString())