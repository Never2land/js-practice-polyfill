// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<div class="container"><h1>Polyfills</h1><span>Algochurn</span>
<p>Please read he description to start solving the problem.</p></div>`;

// Write your code here
let data = [1, 2, 3, 4, 5];

// Map pollyfill
Array.prototype.myMap = function (cb) {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    arr.push(cb(this[i], i, this));
  }
  return arr;
};
const mapLog = data.myMap((el) => el * 2);
console.log(mapLog);

// Filter pollyfill
Array.prototype.myFilter = function (cb) {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i])) {
      arr.push(this[i]);
    }
  }
  return arr;
};
const filterLog = data.myFilter((el) => el < 4);
console.log(filterLog);

// Reduce pollyfill
Array.prototype.myReduce = function (cb, initialValue) {
  var res = initialValue;
  for (let i = 0; i < this.length; i++) {
    res = res ? cb(this[i], res) : this[i];
  }
  return res;
};
const reduceLog = data.myReduce((el) => el + 4);
console.log(reduceLog);

// Promise.all() implementation
const myPromiseAll = (promises) => {
  // Remove line number 30.
  let res = [];
  return new Promise((resolve, reject) => {
    promises.forEach((p, index) => {
      p.then((data) => {
        res.push(data);
        if (index === promises.length - 1) {
          resolve(res);
        }
      }).catch((err) => reject(err));
    });
  });
};
myPromiseAll([
  Promise.resolve('hi'),
  Promise.resolve('bye'),
  Promise.resolve('exit'),
])
  .then((value) => console.log(value))
  .catch((err) => console.log(err));
