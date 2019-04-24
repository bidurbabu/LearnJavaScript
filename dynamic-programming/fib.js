var map = [];
var cache = 0;
var create = 0;
const topDownFib = n => {
  if (n <= 1) return n;
  if (!map[n]) {
      create++;
   
    map[n] = topDownFib(n - 1) + topDownFib(n - 2);
  } else {
      cache++;
     
  }
  return map[n];
};
console.log(topDownFib(25));
console.log(cache);
console.log(create);