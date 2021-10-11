/*
Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    for (let i=0; i<nums.length; i++){
      console.log(i, nums[i], target)
      if (nums[i]===target) return i
      if (nums[i]===target+1) return i+1
    }
    return "fail"
};

searchInsert([1,3,5,6], 2)