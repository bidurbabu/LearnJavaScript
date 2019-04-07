/*
Given a collection of numbers that might contain duplicates, return all possible unique permutations.

Example:

Input: [1,1,2]
Output:
[
  [1,1,2],
  [1,2,1],
  [2,1,1]
]
*/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    var collection = [];
    const permuteUniqueR = (arr,cc) => {
        var ll = cc || [];
        if(arr.length === 1){
            ll.push(arr[0]);
            collection.push(ll);
        }
        var dict = {};
        for(var i=0;i<arr.length;i++){
            if(!dict[arr[i]]){
                dict[arr[i]] = 1;
                var arrCopy = arr.slice(0,i).concat(arr.slice(i+1));
                var l = ll.slice();
                l.push(arr[i]);
                permuteUniqueR(arrCopy,l);
            }
        }
        
    };
    permuteUniqueR(nums,[]);
    return collection;
};
console.log(permuteUnique([1,1,2]));