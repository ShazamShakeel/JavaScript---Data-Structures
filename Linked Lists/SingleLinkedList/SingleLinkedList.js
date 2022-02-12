class LinkedList {
  constructor(value) {
    this.head = {
      value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  //Append
  append(value) {
    const newNode = {
      value,
      next: null,
    };
    this.tail.next = newNode;
    this.tail = newNode;
    return this.length++;
  }

  //Prepend
  prepend(value) {
    const newNode = {
      value,
      next: null,
    };
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
      value,
      next: null,
    };
    let currentNode = this.traverse(index - 1);
    newNode.next = currentNode.next;
    currentNode.next = newNode;
    return this.length++;
  }

  //Delete
  delete(index = this.length) {
    if (index <= 0) {
      this.head = this.head.next;
      return this.length--;
    }
    if (index >= this.length) {
      let currentNode = this.traverse(this.length - 2);
      currentNode.next = null;
      this.tail = currentNode;
      return this.length--;
    }
    let currentNode = this.traverse(index - 1);
    let middleNode = currentNode.next;
    middleNode = middleNode.next;
    currentNode.next = middleNode;
    return this.length--;
  }

  //Search
  search(value){
      let currentNode = this.head
      let i = 0
      while(currentNode.next != null){
        i++
          if(currentNode.value == value){
            return {value, i}
          } else {
            currentNode = currentNode.next
          }
      }
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
}

const list = new LinkedList(3);
list.append(4);
list.append(5);
list.append(6);
list.prepend(2);
list.prepend(1);
list.prepend(0);
list.insert("x", 4);
list.delete(4);
console.log(list.search(2))
console.log(list);
console.log(list.items());
