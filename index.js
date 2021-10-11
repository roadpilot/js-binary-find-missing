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
    let right = nums.length - 1;
    let left = 0;
    while (left <= right) {
        pivot = Math.floor(left + (right - left) / 2)
        if (nums[pivot] === target) return pivot;
        if (nums[pivot] > target) right = pivot - 1
        else {left = pivot + 1}
    }
    return left;
};

searchInsert([1,3,5,6], 4)