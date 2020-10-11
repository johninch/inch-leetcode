/*
 * @lc app=leetcode.cn id=41 lang=javascript
 *
 * [41] 缺失的第一个正数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
    let newArr = []
    for (let i = 0; i < nums.length; i++) {
        let value = nums[i]
        if (value > 0 && value <= nums.length) {
            newArr[value - 1] = value
        }
    }

    for (let i = 0; i < newArr.length; i++) {
        if (newArr[i] === undefined) {
            return i + 1
        }
    }

    return newArr.length + 1
};
// @lc code=end

