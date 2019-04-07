var permute = function(nums) {
  var store = [];

  const permuteR = (arr, memo) => {
    var memo = memo || [];
    if (arr.length === 1) {
      memo.push(arr[0]);
      store.push(memo);
    }
    for (var i = 0; i < arr.length; i++) {
      var newArray = arr.slice(0, i).concat(arr.slice(i + 1));
      var copy = memo.slice();
      copy.push(arr[i]);
      permuteR(newArray, copy);
    }
  };
  permuteR(nums, []);
  return store;
};
console.log(permute("abc"));
