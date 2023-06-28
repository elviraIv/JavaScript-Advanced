class List {
  constructor() {
    this.size = 0;
    this.collection = [];
  }

  add(element) {
    this.collection.push(element);
    this.collection.sort((a, b) => a - b);
    this.size++;
  }
  remove(index) {
    if (index < 0 || index > this.collection.length) {
      throw new Error("Invalid index");
    }
    this.collection.splice(index, 1);
    this.size--;
  }
  get(index) {
    if (index < 0 || index >= this.collection.length) {
      throw new Error("Invalid index");
    }

    return this.collection[index];
  }
}




