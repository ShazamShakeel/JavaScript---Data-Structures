//Linked List Class
class LinkedList {
  constructor(value) {
    this.head = {
      value,
      next: null,
    };
    this.tail = this.head,
    this.length = 1
  }
  prepend(value) {
    const newNode = {
      value,
      next: null,
    };
    // console.log("Prepend", newNode)
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }
  append(value) {
    const newNode = {
      value,
      next: null,
    };
    // console.log("Append", newNode)
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }
  insert(index, value) {
    if (index === 0) {
      return this.prepend(value);
    } else if (index >= this.length) {
      return this.append(value);
    }
    let currentNode = this.head;
    const newNode = {
      value,
      next: null,
    };
    for (let i = 1; i < index; i++) {
      currentNode = currentNode.next;
    }
    newNode.next = currentNode.next;
    currentNode.next = newNode;
    this.length++;
  }
  remove(index) {
    if(index == 0){
      let newHeadNode = this.head.next
      this.head = newHeadNode
      return this.head
    } else if (index >= this.length-1){
      let currentNode = this.head;
      for(let i = 1; i < this.length - 2; i++){
        currentNode = currentNode.next
      }
      this.length--
      return currentNode.next = null
    }
    let currentNode = this.head;
    for(let i = 1; i < index; i++){
      currentNode = currentNode.next
    }
    let unwantedNode = currentNode.next
    currentNode.next = unwantedNode.next
    this.length--
    return this.length
  }

  //Print Linked List Values
  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }
}

const myLinkedList = new LinkedList(1);
myLinkedList.prepend(0);
myLinkedList.append(2);
myLinkedList.append(3);
myLinkedList.append(4);
myLinkedList.insert(3, ".");
myLinkedList.remove(3);
console.log(myLinkedList.printList());
console.log(myLinkedList);