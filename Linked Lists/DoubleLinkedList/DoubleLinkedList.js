class LinkedList {
  constructor(value) {
    this.head = {
      prev: null,
      next: null,
      value,
    };
    this.tail = this.head;
    this.length = 1;
  }

  //Append
  append(value) {
    const newNode = {
      prev: null,
      next: null,
      value,
    };
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    return this.length++;
  }

  //Prepend
  prepend(value) {
    const newNode = {
      prev: null,
      next: null,
      value,
    };
    this.head.prev = newNode;
    newNode.next = this.head;
    this.head = newNode;
    return this.length++;
  }

  //Insert
  insert(value, index = this.length) {
    if (index <= 0) {
      return this.prepend(value);
    }
    if (index >= this.length) {
      return this.append(value);
    }
    const newNode = {
      prev: null,
      next: null,
      value,
    };
    let firstNode = this.traverse(index - 1);
    let thirdNode = firstNode.next;
    newNode.prev = firstNode;
    newNode.next = thirdNode;
    firstNode.next = newNode;
    thirdNode.prev = newNode;
    return this.length++;
  }

  //Delete
  delete(index = this.length - 1) {
    if (index <= 0) {
      this.head = this.head.next;
      this.head.prev = null;
      return this.length--;
    }
    if (index >= this.length - 1) {
      let firstNode = this.traverse(this.length - 2);
      firstNode.next = null;
      this.tail = firstNode;
      return this.length--;
    }
    let firstNode = this.traverse(index - 1);
    let middleNode = firstNode.next;
    let thirdNode = middleNode.next;
    firstNode.next = thirdNode;
    thirdNode.prev = firstNode;
    return this.length--;
  }

  //Search
  search(value) {
    let currentNode = this.head;
    let i = 0;
    while (currentNode.next != null) {
      i++;
      if (currentNode.value == value) {
        return { value, i };
      } else {
        currentNode = currentNode.next;
      }
    }
    return "Nothing Found !"
  }

  //Array of Items
  items() {
    let arr = [];
    let currentNode = this.head;
    while (currentNode != null) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return arr;
  }

  //Traverse to Index
  traverse(index) {
    let currentNode = this.head;
    let i = 0;
    while (i < index) {
      currentNode = currentNode.next;
      i++;
    }
    return currentNode;
  }

  //Reverse
  reverse() {
    if(!this.head.next){
      return this.head;
    }
    let first = this.head
    this.tail = this.head
    let second = this.head.next
    let temp;
    while(second){
      temp = second.next
      second.next = first
      first = second
      second = temp
    }
    this.tail.prev = this.head.next
    this.head.next = null
    this.head = first
    this.head.prev = null
    return this.items()
  }
}

const list = new LinkedList(2);
list.append(3);
list.append(4);
list.append(5);
list.append(6);
list.prepend(1);
list.prepend(0);
list.insert("x", 4);
list.delete(4);
console.log(list.search("x"));
console.log(list);
console.log(list.items());
console.log(list.reverse())
console.log(list)