// https://leetcode.com/problems/running-sum-of-1d-array/

// Given an array nums.We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

// Return the running sum of nums.

var runningSum = function (nums) {
    let output = [];
    let holder = 0;

    for (let i = 0; i < nums.length; i++) {
        holder += nums[i];
        output.push(holder)
    }

    return output
}

// input: [1,2,3,4]
// output: [1,3,6,10]