// 1.
(() => {
  let x, y;
  try {
    throw new Error();
  } catch (x) {
    (x = 1), (y = 2);
    console.log(x);
  }
  console.log(x);
  console.log(y);
})();

// 2.
let someArr = [[0, 1], [2, 3]];
console.log(someArr.reduce(
  (acc, cur) => {
    return acc.concat(cur);
  },
  [1, 2]
));

