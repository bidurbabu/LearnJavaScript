/*
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

Example:

Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.

/**
 * @param {number[]} nums
 * @return {number}
 */

var maxSubArray = function(numbers) {
  if (numbers.length < 1) return -1;
  var maxSum = numbers[0];
  var currentSum = numbers[0];
  for (var i = 1; i < numbers.length; i++) {
    if (currentSum < 0) {
      //we want to forget and start new session of sums.
      currentStart = i;
      currentSum = 0;
    }
    currentSum += numbers[i];
    if (maxSum < currentSum) {
      maxSum = currentSum;
    }
  }
  return maxSum;
};

var climbStairs = function(n) {
  var count = 0;
  var climbStairsR = nn => {
    if (nn < 0) {
      return;
    }
    if (nn === 0) {
      count++;
      return;
    }
    climbStairsR(nn - 1);
    climbStairsR(nn - 2);
  };
  climbStairsR(n);
  return count;
};

var climbStairs = function(n) {
  c1 = 1;
  c2 = 2;
  if (n < 1) return 0;
  if (n === 1) return 1;
  if (n === 2) return 2;
  var sum = c1 + c2;
  for (var i = 3; i < n; i++) {
    c1 = c2;
    c2 = sum;
    sum = c1 + c2;
  }
  return sum;
};

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  var maxProfit = 0;
  for (var i = 0; i < prices.length; i++) {
    for (var j = i + 1; j < prices.length; j++) {
      if (prices[j] - prices[i] > maxProfit) {
        maxProfit = prices[j] - prices[i];
      }
    }
  }
  return maxProfit;
};
const maxProfitDynamic = prices => {
  let minSoFar = prices[0];
  let maxProfitSoFar = 0;
  for (var i = 0; i < prices.length; i++) {
    if (prices[i] - minSoFar > maxProfitSoFar) {
      maxProfitSoFar = prices[i] - minSoFar;
    }
    if (prices[i] < minSoFar) {
      minSoFar = prices[i];
    }
  }
  return maxProfitSoFar;
};

var rob = function(nums) {
  var maxCollected = 0;
  var robInner = (collected, startIndex) => {
    if (startIndex >= nums.length) {
      if (collected > maxCollected) {
        maxCollected = collected;
      }
      return;
    }
    robInner(collected + nums[startIndex], startIndex + 2);
    if (startIndex + 1 < nums.length) {
      robInner(collected + nums[startIndex + 1], startIndex + 3);
    }
  };
  robInner(0, 0);
  return maxCollected;
};

const robDynamic = nums => {
  var mc = nums[0];
  var mdc = 0;
  for (var i = 1; i < nums.length; i++) {
    var pmc = mc;
    var pMdc = mdc;
    mc = nums[i] + pMdc;
    mdc = pmc > pMdc ? pmc : pMdc;
  }
  return mdc > mc ? mdc : mc;
};
console.log(robDynamic([2, 1, 1, 2]));
