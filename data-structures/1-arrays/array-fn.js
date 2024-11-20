let array = function () {
  let length = 0;
  let data = {};

  return {
    push: function (value) {
      data[length] = value;
      length++;
      return length;
    },
    data,
  };
};

const arr1 = array();
console.log(arr1.data);

arr1.push('Hola');
arr1.push('Mundo');
arr1.push('Array');
console.log(arr1.data);
/* ------------------------------- */

function Array() {
  this.length = 0;
  this.data = {};

  this.push = function (value) {
    this.data[this.length] = value;
    this.length++;
    return this.length;
  };

  this.pop = function () {
    const value = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return value;
  };
}

const arr = new Array();

arr.push('Hola');
arr.push('Mundo');
arr.push('Array');

console.log(arr.data);

arr.pop();

console.log(arr.data);
