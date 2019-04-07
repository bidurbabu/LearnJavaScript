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
    if(numbers.length < 1) return -1;
    var maxSum = numbers[0];
    var currentSum = numbers[0];
    for(var i=1;i<numbers.length;i++){
        if(currentSum < 0){
            //we want to forget and start new session of sums.
            currentStart = i;
            currentSum = 0;
        }
        currentSum += numbers[i];
        if(maxSum<currentSum){
            maxSum = currentSum;
        }
    }
    return maxSum;
};


