class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  get(index) {
    return this.data[index];
  }
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.data;
  }
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }
  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);
    return item;
  }
  shiftItems(index) {
    for (let i = index; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
  unshift(item) {
    this.shiftItemsForward(item);
    return this.length;
  }
  shiftItemsForward(item) {
    this.length++;
    for (let i = this.length - 1; i > 0; i--) {
      this.data[i] = this.data[i - 1];
    }
    this.data[0] = item;
  }
  shift() {
    const firstItem = this.data[0];
    this.shiftItems(0);
    return firstItem;
  }
};
const newArray = new MyArray();
newArray.push("Hello");
newArray.push("World");
newArray.push("!");
console.log(newArray);
newArray.get(2);
