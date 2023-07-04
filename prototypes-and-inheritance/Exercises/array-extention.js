//IIFE

(function solve() {
  Array.prototype.last = function () {
    return this[this.length - 1];
  };
  Array.prototype.skip = function (n) {
    let newArr = [];
    for (let index = n; index < this.length; index++) {
      newArr.push(this[index]);
    }
    return newArr;
  };
  Array.prototype.take = function (n) {
    let newArr = [];
    for (let index = 0; index < n; index++) {
      newArr.push(this[index]);
    }
    return newArr;
  };
  Array.prototype.sum = function () {
    return this.reduce((a,c) => a + c, 0)
  };
  Array.prototype.average = function() {
    return this.sum() / this.length;
  }
})();

let array = [1,11,4];

console.log(array.last());     // 4
console.log(array.skip(1));    // [11, 4]
console.log(array.take(1));    // [1]
console.log(array.sum(1));     // 16
console.log(array.average(1)); // 5.33


